// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax], // 余計な prefix はしない
  },
  site: "https://u5a91.net",
  base: "/",              // 独自ドメイン直下
  output: "static",
  outDir: "docs",         // Pages: Deploy from a branch -> main / docs
});
