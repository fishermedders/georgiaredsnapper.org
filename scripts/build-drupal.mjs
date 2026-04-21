#!/usr/bin/env node
/**
 * build-drupal.mjs — Post-build script for the Drupal embed.
 *
 * After vite-plugin-singlefile produces a single HTML file with all JS & CSS
 * inlined, this script:
 *
 *   1. Rewrites every reference to a public-folder image so it points to the
 *      configured asset directory on the Drupal server.
 *   2. Extracts the CSS and JS from the singlefile output.
 *   3. Wraps them in a self-bootstrapping snippet that, on load:
 *        a. Immediately hides the Drupal page (cloaking <style>)
 *        b. Wipes all Drupal styles, scripts, and body content
 *        c. Rebuilds <head> and <body> with only the React app
 *        d. Fades the page in once React has rendered
 *   4. Writes two output files:
 *        • dist-drupal/drupal-full.html  — complete standalone page (for QA)
 *        • dist-drupal/drupal-embed.html — paste into Drupal's HTML source
 *
 * Configuration
 * ─────────────
 *   ASSET_BASE  (env var)  Base URL for images on the Drupal server.
 *                           Defaults to  /sites/default/files/crd/AppRedSnapper
 *
 *   Example:
 *     ASSET_BASE=/RedSnapper/assets node scripts/build-drupal.mjs
 *
 *   If you set ASSET_BASE=/RedSnapper/assets  then a reference to
 *   "/hero.webp" becomes "/RedSnapper/assets/hero.webp" in the output.
 */

import {
  readFileSync,
  writeFileSync,
  readdirSync,
  statSync,
  existsSync,
} from "fs";
import { join, extname, relative } from "path";
import { fileURLToPath } from "url";

// ── Paths ──────────────────────────────────────────────────────────────────
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist-drupal");
const PUBLIC = join(ROOT, "public");

// ── Configurable asset base (no trailing slash) ────────────────────────────
const ASSET_BASE = (
  process.env.ASSET_BASE || "/sites/default/files/crd/AppRedSnapper"
).replace(/\/+$/, "");

// ── Image extensions we care about ─────────────────────────────────────────
const IMAGE_EXTS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
  ".ico",
  ".bmp",
]);

// ── Helpers ────────────────────────────────────────────────────────────────
/** Recursively collect every file path under `dir`. */
function walkDir(dir, list = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walkDir(full, list);
    } else {
      list.push(full);
    }
  }
  return list;
}

/**
 * Escape `</script` (case-insensitive) inside text that will live between
 * <script> ... </script> tags.  The HTML parser looks for `</` followed by
 * the tag name to close the element — inserting a backslash (`<\/script`)
 * prevents the parser from seeing it as a closing tag while remaining
 * semantically identical in JS string contexts.
 */
function escapeScriptClose(str) {
  return str.replace(/<\/script/gi, "<\\/script");
}

// ── Locate build output ────────────────────────────────────────────────────
const htmlPath = join(DIST, "drupal.html");
if (!existsSync(htmlPath)) {
  console.error("✘ Build output not found at", htmlPath);
  console.error(
    "  Did you run  vite build --config vite.config.drupal.js  first?",
  );
  process.exit(1);
}

let html = readFileSync(htmlPath, "utf-8");

// ── Build a list of public-folder image paths to rewrite ───────────────────
const publicImages = walkDir(PUBLIC)
  .filter((f) => IMAGE_EXTS.has(extname(f).toLowerCase()))
  .map((f) => "/" + relative(PUBLIC, f).replace(/\\/g, "/"));

// Sort longest-first so  /logos/DNR_Logo.svg  is matched before  /DNR_Logo.svg
publicImages.sort((a, b) => b.length - a.length);

console.log(
  `\nRewriting ${publicImages.length} image path(s)  →  ASSET_BASE = "${ASSET_BASE}"\n`,
);

for (const imgPath of publicImages) {
  const escaped = imgPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escaped, "g");
  const count = (html.match(regex) || []).length;

  if (count > 0) {
    const replacement = `${ASSET_BASE}${imgPath}`;
    html = html.replace(regex, replacement);
    console.log(`  ✓ ${imgPath}  →  ${replacement}  (${count}×)`);
  }
}

// ── Write the full standalone page (for local QA in a browser) ─────────────
const fullPath = join(DIST, "drupal-full.html");
writeFileSync(fullPath, html, "utf-8");

// ── Extract CSS & JS from the singlefile HTML ─────────────────────────────
let appCss = "";
{
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    appCss += m[1] + "\n";
  }
}

let moduleJs = "";
let classicJs = "";
{
  const re = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1];
    const content = m[2].trim();
    if (!content) continue;
    if (/type\s*=\s*["']?module/i.test(attrs)) {
      moduleJs += content + "\n";
    } else {
      classicJs += content + "\n";
    }
  }
}

// ── Build the self-bootstrapping embed snippet ─────────────────────────────
//
// Structure of the output:
//
//   <style id="grsp-cloak">        ← hides the Drupal page instantly
//   <script type="text/grsp-css">  ← app CSS stored as inert text
//   <script type="text/grsp-mod">  ← app module JS stored as inert text
//   <script type="text/grsp-cls">  ← app classic JS stored as inert text
//   <script>                       ← bootstrap: wipes Drupal, rebuilds page
//
// The browser will NOT apply <script type="text/grsp-*"> tags because the
// type is unrecognised — their textContent is just held as data until the
// bootstrap reads it.

const bootstrapCode = `
(function () {
  function boot() {
    /* ── Read payloads ── */
    var cssEl = document.querySelector('script[type="text/grsp-css"]');
    var modEl = document.querySelector('script[type="text/grsp-mod"]');
    var clsEl = document.querySelector('script[type="text/grsp-cls"]');
    if (!cssEl || !modEl) return;

    var appCss   = cssEl.textContent;
    var moduleJs = modEl.textContent;
    var classicJs = clsEl ? clsEl.textContent : '';

    /* ── Nuke Drupal head contents ── */
    // Remove every stylesheet, inline style, script, and misc link
    var kill = document.querySelectorAll(
      'link[rel="stylesheet"], style, script, link[as="script"], link[rel="preload"]'
    );
    for (var i = 0; i < kill.length; i++) {
      if (kill[i].parentNode) kill[i].parentNode.removeChild(kill[i]);
    }

    /* ── Nuke Drupal body ── */
    document.body.className = '';
    document.body.removeAttribute('style');
    document.body.innerHTML = '';

    /* ── Rebuild <head> essentials ── */
    // Charset
    if (!document.querySelector('meta[charset]')) {
      var mc = document.createElement('meta');
      mc.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(mc, document.head.firstChild);
    }
    // Viewport
    if (!document.querySelector('meta[name="viewport"]')) {
      var mv = document.createElement('meta');
      mv.name = 'viewport';
      mv.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(mv);
    }

    /* ── Inject app CSS ── */
    var style = document.createElement('style');
    style.textContent = appCss;
    document.head.appendChild(style);

    /* ── Create mount point ── */
    // Keep body hidden until React paints
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.35s ease';

    var root = document.createElement('div');
    root.id = 'grsp-root';
    document.body.appendChild(root);

    /* ── Inject classic (non-module) JS if present ── */
    if (classicJs.trim()) {
      var cs = document.createElement('script');
      cs.textContent = classicJs;
      document.body.appendChild(cs);
    }

    /* ── Inject module JS (the React app) ── */
    var ms = document.createElement('script');
    ms.type = 'module';
    ms.textContent = moduleJs;
    document.body.appendChild(ms);
  }

  // Fire as early as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
`.trim();

const snippetParts = [
  `<!-- Georgia Red Snapper — Drupal Embed (auto-generated) -->`,
  `<!-- Cloak: hide Drupal page immediately so the user never sees it -->`,
  `<style id="grsp-cloak">body{opacity:0!important}</style>`,
  ``,
  `<!-- App CSS (inert — not applied until the bootstrap reads it) -->`,
  `<script type="text/grsp-css">${escapeScriptClose(appCss)}</script>`,
  ``,
  `<!-- App module JS (inert — not executed until the bootstrap injects it) -->`,
  `<script type="text/grsp-mod">${escapeScriptClose(moduleJs)}</script>`,
];

if (classicJs.trim()) {
  snippetParts.push(
    ``,
    `<!-- App classic JS — polyfills / preloaders (inert) -->`,
    `<script type="text/grsp-cls">${escapeScriptClose(classicJs)}</script>`,
  );
}

snippetParts.push(
  ``,
  `<!-- Bootstrap: wipes Drupal, rebuilds the page, mounts the React app -->`,
  `<script>${escapeScriptClose(bootstrapCode)}</script>`,
);

const snippet = snippetParts.join("\n");

// ── Write embed ────────────────────────────────────────────────────────────
const embedPath = join(DIST, "drupal-embed.html");
writeFileSync(embedPath, snippet, "utf-8");

// ── Summary ────────────────────────────────────────────────────────────────
const kb = (s) => (Buffer.byteLength(s, "utf-8") / 1024).toFixed(1);

console.log("\n✔ Done!\n");
console.log(
  `  drupal-full.html   ${kb(html).padStart(7)} KB  ← standalone page for local QA`,
);
console.log(
  `  drupal-embed.html  ${kb(snippet).padStart(7)} KB  ← paste into Drupal's HTML source editor`,
);
console.log(
  "\nThe embed will automatically wipe the Drupal page and take over <html>.",
);
console.log(
  "Make sure Drupal's text format is set to Full HTML / Unfiltered so it",
);
console.log("does not strip <style> and <script> tags.\n");
console.log("Required images (upload to Drupal server):");
for (const imgPath of publicImages) {
  console.log(`  ${ASSET_BASE}${imgPath}`);
}
console.log();
