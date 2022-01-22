import { readFileSync, unlinkSync, writeFileSync } from "fs";
import { resolve } from "path";
import { ServerModule } from "./src/types/ServerRenderFunction";
import { format, Options as PrettierOptions } from "prettier";
import { minify, Options as MinifyOptions } from "html-minifier";

const minifyOptions: MinifyOptions = {
  removeComments: true
};

const toAbsolute = (p: string) => resolve(__dirname, p);
const template = readFileSync("build/index.html", "utf-8");
const prettierOptions: PrettierOptions = JSON.parse(readFileSync("./.prettierrc", "utf-8"));
const { render } = require("./build/server-bundle/entry-server") as ServerModule;

(async () => {
  const { html } = await render();
  const renderedHtml = template.replace(`<!-- app-html -->`, html);
  const destinationFile = toAbsolute(`build/index.html`);
  const minifiedHtml = minify(renderedHtml, minifyOptions);
  const formattedHtml = format(minifiedHtml, { parser: "html", ...prettierOptions });

  writeFileSync(destinationFile, formattedHtml);
})();
