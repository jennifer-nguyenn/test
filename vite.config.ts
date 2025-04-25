import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test/",
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
