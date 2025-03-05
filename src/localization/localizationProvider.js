import defaultLocale from "./locales/en.json";

import debug from "../utils/debug.ts";
import { contentUrl } from "../config/config.js";
import { votStorage } from "../utils/storage.ts";
import { getTimestamp, GM_fetch, lang } from "../utils/utils.js";

const localeCacheTTL = 7200;
const localizationUrl = `${contentUrl}/${
  DEBUG_MODE || IS_BETA_VERSION ? "dev" : "master"
}/src/localization`;

// TODO: add get from hashes.json or use DEFAULT_LOCALES
export const availableLocales = AVAILABLE_LOCALES;

class LocalizationProvider {
  constructor() {
    this.gmValues = [
      "locale-phrases",
      "locale-lang",
      "locale-hash",
      "locale-updated-at",
      "locale-lang-override",
    ];
    this.lang = this.getLang();
    this.locale = {};
    this.setLocaleFromJsonString(votStorage.syncGet("locale-phrases", ""));
  }

  getLang() {
    const langOverride = votStorage.syncGet("locale-lang-override", "auto");
    return langOverride !== "auto" ? langOverride : lang;
  }

  reset() {
    for (const key of this.gmValues) {
      votStorage.syncDelete(key);
    }
  }

  async checkUpdates(force = false) {
    debug.log("Check locale updates...");
    try {
      const res = await GM_fetch(
        `${localizationUrl}/hashes.json${force ? `?timestamp=${getTimestamp()}` : ""}`,
      );
      if (!res.ok) throw res.status;
      const hashes = await res.json();
      return (await votStorage.get("locale-hash")) !== hashes[this.lang]
        ? hashes[this.lang]
        : false;
    } catch (err) {
      console.error(
        "[VOT] [localizationProvider] Failed to get locales hash:",
        err,
      );
      return false;
    }
  }

  async update(force = false) {
    const localeUpdatedAt = await votStorage.get("locale-updated-at", 0);
    if (
      !force &&
      localeUpdatedAt + localeCacheTTL > getTimestamp() &&
      (await votStorage.get("locale-lang")) === this.lang
    )
      return;

    const hash = await this.checkUpdates(force);
    await votStorage.set("locale-updated-at", getTimestamp());
    if (!hash) return;

    debug.log("Updating locale...");
    try {
      const res = await GM_fetch(
        `${localizationUrl}/locales/${this.lang}.json${force ? `?timestamp=${getTimestamp()}` : ""}`,
      );
      if (!res.ok) throw res.status;
      // We use it .text() in order for there to be a single logic for GM_Storage and localStorage
      const text = await res.text();
      await votStorage.set("locale-phrases", text);
      await votStorage.set("locale-hash", hash);
      await votStorage.set("locale-lang", this.lang);
      this.setLocaleFromJsonString(text);
    } catch (err) {
      console.error("[VOT] [localizationProvider] Failed to get locale:", err);
      this.setLocaleFromJsonString(await votStorage.get("locale-phrases", ""));
    }
  }

  setLocaleFromJsonString(json) {
    try {
      this.locale = JSON.parse(json) || {};
    } catch (err) {
      console.error("[VOT] [localizationProvider]", err);
      this.locale = {};
    }
  }

  getFromLocale(locale, key) {
    return (
      key.split(".").reduce((acc, k) => acc?.[k], locale) ??
      this.warnMissingKey(locale, key)
    );
  }

  warnMissingKey(locale, key) {
    console.warn(
      "[VOT] [localizationProvider] locale",
      locale,
      "doesn't contain key",
      key,
    );
    return undefined;
  }

  getDefault(key) {
    return this.getFromLocale(defaultLocale, key) ?? key;
  }

  get(key) {
    return this.getFromLocale(this.locale, key) ?? this.getDefault(key);
  }
}

export const localizationProvider = new LocalizationProvider();
