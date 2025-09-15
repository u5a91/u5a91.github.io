// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import { visit } from "unist-util-visit"; // ★追加

// 先頭スラの <img src="/..."> に base を前置する rehype
function rehypePrefixAbsoluteImg(base = "/") {
  // base は末尾スラッシュ付きを想定（例: "/palimpsest/"）
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "img" || !node.properties) return;
      const src = node.properties.src;
      if (typeof src !== "string") return;
      if (src.startsWith("/")) {
        node.properties.src = base + src.slice(1);
      }
    });
  };
}

export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkMath],
    // rehype の適用順は MathJax の後でOK
    rehypePlugins: [
      rehypeMathjax,
      [rehypePrefixAbsoluteImg, "/palimpsest/"], // ★追加
    ],
  },
  output: "static",
  outDir: "docs",
  base: "/palimpsest/",
});
