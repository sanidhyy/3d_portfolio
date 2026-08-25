import netlify from "@netlify/vite-plugin";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }

  return {
    base: "./",
    plugins: [
      tailwindcss(),
      react(),
      netlify(),
      VitePWA({
        registerType: "prompt",
        includeAssets: ["favicon.ico", "apple-touch-icon.png"],
        workbox: {
          navigateFallbackDenylist: [/^\/api\//],
        },
        manifest: {
          name: "Sanidhya - 3D Portfolio",
          short_name: "Sanidhya",
          description: "Amazing 3D Portfolio in React using Three.js",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png",
              purpose: "apple touch icon",
            },
            {
              src: "/maskable_icon.png",
              sizes: "120x120",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
          theme_color: "#8796ff",
          background_color: "#ffffff",
          display: "standalone",
          scope: "/",
          start_url: "/",
          orientation: "portrait",
        },
      }),
    ],
    assetsInclude: ["**/*.glb"],
  };
});
