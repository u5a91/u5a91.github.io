// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config

export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
  output: 'static',
  outDir: 'docs',
  base: '/palimpsest/',
});
