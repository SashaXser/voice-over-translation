import fs from "node:fs/promises";
import path from "node:path";
import { styleText } from "node:util";

import config from "../config";
import { loadLocale } from "../locales";

const localesPath = path.resolve(config.localizationPath, "locales");

async function getAllLocales() {
  return (await fs.readdir(localesPath)).filter((file) =>
    file.endsWith(".json"),
  );
}

async function getPrettyAllLocales() {
  const files = await getAllLocales();
  const locale = await loadLocale("en.json");

  const availableLocales = files
    .map((file) => {
      const filename = file.replace(".json", "");
      return `\n  - ${locale.langs[filename]} (${styleText("gray", file)})`;
    })
    .join("");

  console.log(styleText("yellow", "Available locales:"), availableLocales);
}

export { getAllLocales, getPrettyAllLocales };
