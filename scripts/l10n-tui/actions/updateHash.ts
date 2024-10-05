import path from "node:path";
import { styleText } from "node:util";

import config from "../config";
import { getAllLocales } from "./getAllLocales";
import { loadTextFromLocale } from "../locales";
import { prettyStringify } from "../utils";

async function updateHash() {
  const files = await getAllLocales();
  const hashes = {};
  for await (const file of files) {
    const locale = file.replace(".json", "");
    const localeText = await loadTextFromLocale(file);
    const hasher = new Bun.CryptoHasher("md5");
    hasher.update(localeText);
    hashes[locale] = hasher.digest("hex");
  }

  const hashesPath = path.resolve(config.localizationPath, config.hashesFile);
  await Bun.write(hashesPath, prettyStringify(hashes));

  const localesCount = Object.keys(hashes).length.toString();
  console.log(
    `${styleText(
      "green",
      "√",
    )} Successfully updated hashes for ${styleText("yellow", localesCount)} locales!`,
  );
}

export { updateHash };
