import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "VITE_");
  const siteUrl = (env.VITE_SITE_URL || "").replace(/\/+$/, "");

  return {
    plugins: [
      react(),
      {
        // Fills absolute URLs (canonical, Open Graph) in index.html at build time.
        name: "hao-site-url",
        transformIndexHtml: (html) => html.replaceAll("__SITE_URL__", siteUrl),
      },
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom", "react-dom/client", "react-router-dom"],
          },
        },
      },
    },
  };
});
