// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://soft-smakager-d59252.netlify.app",
  integrations: [preact()],
});