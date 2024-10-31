import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },

  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercel(),
});