import { styleText } from "node:util";
const { Input, Confirm } = require("enquirer");

import { loadLocale, saveLocale } from "../locales";
import { getAllLocales } from "./getAllLocales";
import { translate } from "../utils";
import { updateHash } from "./updateHash";

const rawPhrasePrompt = new Input({
  message: "Enter the raw phrase (English-key)",
  initial: "",
});

const addPhraseConfirm = new Confirm({
  name: "question",
  message: "Add the phrase to the json files?",
});

async function generatePhrase() {
  const rawPhrase = await rawPhrasePrompt.run().catch(console.error);
  if (!rawPhrase) {
    return;
  }

  const englishPhrase = await new Input({
    message: "Enter the phrase (English-value)",
    initial: rawPhrase,
  })
    .run()
    .catch(console.error);
  if (!englishPhrase) {
    return;
  }

  const needAddToJSON = await addPhraseConfirm.run().catch(console.error);
  const files = await getAllLocales();
  const englishLocale = await loadLocale("en.json");
  if (!needAddToJSON) {
    console.log(styleText("yellow", "Generated locales:"));
  }

  for await (const file of files) {
    const locale = file.replace(".json", "");
    const localeData = await loadLocale(file);
    const localizedPhrase =
      file === "en.json"
        ? englishPhrase
        : await translate(englishPhrase, `en-${locale}`);
    if (!needAddToJSON) {
      console.log(
        `  - ${englishLocale.langs[locale]} (${styleText("gray", file)}): '${styleText("gray", `"${rawPhrase}": "${localizedPhrase}"`)}'`,
      );
      continue;
    }

    localeData[rawPhrase] = localizedPhrase;
    await saveLocale(file, localeData);
  }

  const localesCount = files.length.toString();
  console.log(
    `${styleText(
      "green",
      "√",
    )} Successfully generated new phrase "${styleText("gray", rawPhrase)}" (${styleText("gray", englishPhrase)}) for ${styleText("yellow", localesCount)} locales!`,
  );
  if (needAddToJSON) {
    await updateHash();
  }
}

export { generatePhrase };
