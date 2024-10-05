import path from "node:path";

import config from "./config";
import { prettyStringify } from "./utils";

const localesPath = path.resolve(config.localizationPath, "locales");
async function loadLocale(filename: string) {
  const localeFile = Bun.file(path.resolve(localesPath, filename));
  return await localeFile.json();
}

async function loadTextFromLocale(filename: string) {
  const localeFile = Bun.file(path.resolve(localesPath, filename));
  return await localeFile.text();
}

async function saveLocale(filename: string, content: Record<string, unknown>) {
  const localePath = path.resolve(localesPath, filename);
  return await Bun.write(localePath, prettyStringify(content));
}

export { localesPath, loadLocale, loadTextFromLocale, saveLocale };
