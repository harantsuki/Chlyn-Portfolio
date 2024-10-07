import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Chlyn-Portfolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom"],
        },
      },
    },
  },
});
