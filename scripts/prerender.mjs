import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { render } from "../dist-ssr/entry-server.js";

const outputPath = resolve("dist/index.html");
const template = await readFile(outputPath, "utf8");
const appHtml = render();
const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

if (html === template) {
  throw new Error("Unable to find the root element while prerendering.");
}

await writeFile(outputPath, html);
