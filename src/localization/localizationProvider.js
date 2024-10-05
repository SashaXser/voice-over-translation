import defaultLocale from "./locales/en.json";

import debug from "../utils/debug.js";
import { contentUrl } from "../config/config.js";
import { votStorage } from "../utils/storage.js";
import { getTimestamp, GM_fetch } from "../utils/utils.js";

const localeCacheTTL = 7200;
const localizationUrl = `${contentUrl}/${
  DEBUG_MODE || IS_BETA_VERSION ? "dev" : "master"
}/src/localization`;

// TODO: add get from hashes.json or use DEFAULT_LOCALES
export const availableLocales = AVAILABLE_LOCALES;

export const localizationProvider = new (class {
  lang = "en";
  locale = {};
  gmValues = [
    "locale-phrases",
    "locale-lang",
    "locale-version",
    "locale-lang-override",
  ];

  constructor() {
    const langOverride = votStorage.syncGet("locale-lang-override", "auto");
    if (langOverride && langOverride !== "auto") {
      this.lang = langOverride;
    } else {
      this.lang =
        (navigator.language || navigator.userLanguage)
          ?.substr(0, 2)
          ?.toLowerCase() ?? "en";
    }
    this.setLocaleFromJsonString(votStorage.syncGet("locale-phrases", ""));
  }

  reset() {
    for (let i = 0; i < this.gmValues.length; i++) {
      votStorage.syncDelete(this.gmValues[i]);
    }
  }

  async checkUpdates() {
    debug.log("Check locale updates...");
    try {
      const res = await GM_fetch(`${localizationUrl}/hashes.json`);
      if (res.status !== 200) {
        throw res.status;
      }

      const hashes = await res.json();
      const localeHash = await votStorage.get("locale-hash");
      const actualHash = hashes[this.lang];

      return localeHash !== actualHash ? actualHash : false;
    } catch (err) {
      console.error(
        "[VOT] [localizationProvider] Failed to get locales hash, cause:",
        err,
      );

      return false;
    }
  }

  async update(force = false) {
    const localeUpdatedAt = await votStorage.get("locale-updated-at", 0);
    const localeLang = await votStorage.get("locale-lang");
    const timestamp = getTimestamp();
    if (
      !force &&
      localeUpdatedAt + localeCacheTTL > timestamp &&
      localeLang === this.lang
    ) {
      return;
    }

    const hash = await this.checkUpdates();
    await votStorage.set("locale-updated-at", timestamp);
    if (!hash) {
      return;
    }

    debug.log("Updating locale...");
    try {
      const res = await GM_fetch(
        `${localizationUrl}/locales/${this.lang}.json`,
      );
      if (res.status !== 200) {
        throw res.status;
      }

      // We use it .text() in order for there to be a single logic for GM_Storage and localStorage
      const text = await res.text();
      await votStorage.set("locale-phrases", text);
      this.setLocaleFromJsonString(text);

      await votStorage.set("locale-hash", hash);
      await votStorage.set("locale-lang", this.lang);
    } catch (err) {
      console.error(
        "[VOT] [localizationProvider] Failed to get locale, cause:",
        err,
      );
      this.setLocaleFromJsonString(await votStorage.get("locale-phrases", ""));
    }
  }

  setLocaleFromJsonString(json) {
    try {
      this.locale = JSON.parse(json) ?? {};
    } catch (exception) {
      console.error("[VOT] [localizationProvider]", exception);
      this.locale = {};
    }
  }

  getFromLocale(locale, key) {
    const result = key.split(".").reduce((locale, key) => {
      if (typeof locale === "object" && locale) return locale[key];
      return undefined;
    }, locale);
    if (result === undefined) {
      console.warn(
        "[VOT] [localizationProvider] locale",
        locale,
        "doesn't contain key",
        key,
      );
    }
    return result;
  }

  getDefault(key) {
    return this.getFromLocale(defaultLocale, key) ?? key;
  }

  get(key) {
    return (
      this.getFromLocale(this.locale, key) ??
      this.getFromLocale(defaultLocale, key) ??
      key
    );
  }
})();
