import { ServerRenderFunction } from "../../src/types/ServerRenderFunction";
import { format, Options as PrettierOptions } from "prettier";
import { minify, Options as MinifierOption } from "html-minifier";
import { readFileSync } from "fs";
import { resolve } from "path";
import { renderPreloadLinks } from "./renderPreloadLinks";
import type { Data } from "../../src/types/Data";
import { randomBytes } from "crypto";
import { Response } from "express";

interface Options {
  render: ServerRenderFunction;
  isProd: boolean;
  url: string;
  template: string;
  config: Data;
  res?: Response;
}

const prettierOptions: PrettierOptions = {
  parser: "html",
  ...JSON.parse(readFileSync(resolve(process.cwd(), ".prettierrc"), "utf-8"))
};
const minifierOptions: MinifierOption = {
  removeComments: true,
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true,
  collapseBooleanAttributes: true,
  html5: true,
  sortAttributes: true,
  keepClosingSlash: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  sortClassName: true
};

export const getHtml = async (options: Options) => {
  const { render, isProd, url, template, config, res } = options;
  const manifest = isProd ? require("../../build/ssr-manifest.json") : {};
  const nonceId = randomBytes(16).toString("base64");

  const { html: renderedHtml, context } = await render(url);
  const preloadLinks = renderPreloadLinks(context.modules, manifest);
  const html = template
    .replace("<!-- app-html -->", renderedHtml)
    .replace("<!-- preload-links -->", preloadLinks)
    .replace("<!-- data-config -->", JSON.stringify(config))
    .replace("<!-- nonce-id -->", nonceId);

  if (res) {
    // res.setHeader("Content-Security-Policy", `script-src 'nonce-${nonceId}'`);
  }

  const minifiedHtml = minify(html, minifierOptions);
  let finalHtml = minifiedHtml;
  if (!isProd) {
    finalHtml = format(minifiedHtml, prettierOptions);
  }

  return finalHtml;
};
