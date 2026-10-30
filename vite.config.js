import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset URLs relative, so the build works on any GitHub Pages
// path (user site or project site) without further configuration.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
