import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: "/bookfinder/",
  server: {
    proxy: {
      "/api": {
        // Proxy all requests starting with "/api"
        target: "http://localhost:5000", // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove "/api" prefix
      },
    },
  }, // <-- This closing brace was missing
});
