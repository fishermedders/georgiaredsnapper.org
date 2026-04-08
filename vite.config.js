import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // This is how you enable the React Compiler in Vite
          ["babel-plugin-react-compiler", { target: "19" }],
        ],
      },
    }),
  ],
});
