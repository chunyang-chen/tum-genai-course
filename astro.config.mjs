import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL || "https://chunyang-chen.github.io/tum-genai-course";
const base = process.env.BASE_PATH || "";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  scopedStyleStrategy: "where"
});
