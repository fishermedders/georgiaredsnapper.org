/**
 * base.js — Runtime base-path detection.
 *
 * Evaluated once when first imported. Detection is case-insensitive so that
 * server-side redirects (e.g. from georgiaredsnapper.com) that normalise the
 * path to lowercase still resolve correctly.  After detecting the base, the
 * URL is immediately normalised to canonical casing via replaceState so that
 * React Router's basename comparison works correctly.
 *
 * /RedSnapper_Staging must be checked before /RedSnapper because /RedSnapper
 * is a prefix of /RedSnapper_Staging.
 */

const { pathname, search, hash } = window.location;
const pathLower = pathname.toLowerCase();

export const BASE = pathLower.startsWith("/redsnapper_staging")
  ? "/RedSnapper_Staging"
  : pathLower.startsWith("/redsnapper")
    ? "/RedSnapper"
    : "/";

export const IS_STAGING = BASE === "/RedSnapper_Staging";

// If the URL's base prefix has the wrong case, normalise it now — before
// BrowserRouter is created — so basename matching works correctly.
// slice(BASE.length) is safe because only casing differs; char count is equal.
if (BASE !== "/" && !pathname.startsWith(BASE)) {
  window.history.replaceState(
    null,
    "",
    BASE + pathname.slice(BASE.length) + search + hash,
  );
}
