import { generatePhrase } from "./generatePhrase";
import { getPrettyAllLocales } from "./getAllLocales";
import { deletePhrase } from "./deletePhrase";
import { updateHash } from "./updateHash";

const { Select } = require("enquirer");

enum Action {
  GeneratePhrase = "generate_phrase",
  DeletePhrase = "delete_phrase",
  GetAllLocales = "get_all_locales",
  UpdateHash = "update_hash",
}

async function getAction() {
  return await new Select({
    name: "action",
    message: "Select action with localization",
    choices: [
      { message: "Generate phrase", name: Action.GeneratePhrase },
      { message: "Delete phrase", name: Action.DeletePhrase },
      { message: "Get all locales", name: Action.GetAllLocales },
      { message: "Update hashes", name: Action.UpdateHash },
    ],
  })
    .run()
    .catch(console.error);
}

async function runAction(action: Action) {
  switch (action) {
    case Action.GeneratePhrase:
      return await generatePhrase();
    case Action.DeletePhrase:
      return await deletePhrase();
    case Action.GetAllLocales:
      return await getPrettyAllLocales();
    case Action.UpdateHash:
      return await updateHash();
  }
}

export { Action, getAction, runAction };
