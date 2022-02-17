import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve as res, dirname } from "path";
import { ServerModule } from "./src/types/ServerRenderFunction";
import { getHtml } from "./server/utils/getHtml";
import { getPageRoutes } from "./src/utils/pageRoutes";
import Axios from "axios";
import type { Data } from "./src/types/Data";

const resolve = (...p: string[]) => res(__dirname, ...p);
const template = readFileSync("build/index.html", "utf-8");
const { render } = require("./build/server-bundle/entry-server") as ServerModule;

(async () => {
  const { data: config } = await Axios.get<Data>(
    "https://raw.githubusercontent.com/MDReal32/MDReal32/master/config.json"
  );
  const pageRoutes = getPageRoutes(config);
  for (const route of pageRoutes) {
    const endpoint = route.path.toLowerCase();
    const destinationFile = resolve(`build/${endpoint}.html`);
    const html = await getHtml({ url: endpoint, render, isProd: true, template }, config);
    mkdirSync(dirname(destinationFile), { recursive: true });
    writeFileSync(destinationFile, html);
  }

  const destinationFile = resolve(`build/index.html`);
  const html = await getHtml({ url: "/", render, isProd: true, template }, config);
  writeFileSync(destinationFile, html);
})();
