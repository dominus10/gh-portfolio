// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
// @ts-ignore
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://dominus10.github.io",
  base: "gh-portfolio",
  devToolbar: {
    enabled: false,
  },
  vite: { plugins: [tailwindcss()] },
  integrations: [react()],
});
