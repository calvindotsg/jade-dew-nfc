import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import {remarkReadingTime} from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://jadedew.netlify.app/',
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        'https://jadedew.netlify.app/sitemap-index.xml',
        'https://jadedew.netlify.app/sitemap-0.xml',
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: 'server',
  adapter: netlify({ edgeMiddleware: true }),
  vite: {
    build: {
      rollupOptions: {
        external: (id) => id.includes('@astrojs/netlify/ssr-function.js') ? false : id,
      },
    },
    assetsInclude: '**/*.riv',
  },
});
