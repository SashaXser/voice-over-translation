import { styleText } from "node:util";
const { Input, Confirm } = require("enquirer");

import { getAllLocales } from "./getAllLocales";
import { loadLocale, saveLocale } from "../locales";
import { updateHash } from "./updateHash";

const rawPhrasePrompt = new Input({
  message: "Enter the raw phrase (English-key)",
  initial: "",
});

async function deletePhrase() {
  const rawPhrase = await rawPhrasePrompt.run().catch(console.error);
  if (!rawPhrase) {
    return;
  }

  const confirmed = await new Confirm({
    name: "question",
    message: `Are you sure you want to delete the phrase "${rawPhrase}"?`,
  })
    .run()
    .catch(console.error);
  if (!confirmed) {
    return;
  }

  const files = await getAllLocales();
  for await (const file of files) {
    const locale = await loadLocale(file);
    delete locale[rawPhrase];
    await saveLocale(file, locale);
  }

  const localesCount = files.length.toString();
  console.log(
    `${styleText(
      "green",
      "√",
    )} Successfully deleted phrase "${styleText("gray", rawPhrase)}" from ${styleText("yellow", localesCount)} locales!`,
  );
  await updateHash();
}

export { deletePhrase };
