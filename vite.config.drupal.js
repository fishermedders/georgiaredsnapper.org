import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Drupal embed build — inlines all JS & CSS into a single HTML file.
// Usage: npm run build:drupal

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", { target: "19" }],
        ],
      },
    }),
    viteSingleFile(),
  ],
  build: {
    outDir: "dist-drupal",
    emptyOutDir: true,
    rollupOptions: {
      input: "drupal.html",
    },
  },
});
