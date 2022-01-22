import { readFileSync, unlinkSync, writeFileSync } from "fs";
import { resolve } from "path";
import { ServerModule } from "./src/types/ServerRenderFunction";
import { format, Options } from "prettier";

const toAbsolute = (p: string) => resolve(__dirname, p);
const template = readFileSync("build/index.html", "utf-8");
const prettierOptions: Options = JSON.parse(readFileSync("./.prettierrc", "utf-8"));
const { render } = require("./build/server-bundle/entry-server") as ServerModule;

(async () => {
  const { html } = await render();
  const renderedHtml = template.replace(`<!-- app-html -->`, html);
  const destinationFile = toAbsolute(`build/index.html`);

  writeFileSync(destinationFile, format(renderedHtml, { parser: "html", ...prettierOptions }));

  unlinkSync(toAbsolute(`build/ssr-manifest.json`));
})();
