import debug from "./debug.js";

export const votStorage = new (class {
  constructor() {
    this.gmSupport = typeof GM_getValue === "function";
    debug.log(`GM Storage Status: ${this.gmSupport}`);
  }

  syncGet(name, def = undefined) {
    if (this.gmSupport) {
      return GM_getValue(name, def);
    }

    const toNumber = typeof def === "number";
    let val = window.localStorage.getItem(name);

    const result = val ?? def;
    return toNumber ? Number(result) : result;
  }

  async get(name, def = undefined) {
    if (this.gmSupport) {
      return await GM_getValue(name, def);
    }

    const toNumber = typeof def === "number";
    return Promise.resolve(this.syncGet(name, def, toNumber));
  }

  syncSet(name, value) {
    if (this.gmSupport) {
      return GM_setValue(name, value);
    }

    return window.localStorage.setItem(name, value);
  }

  async set(name, value) {
    if (this.gmSupport) {
      return await GM_setValue(name, value);
    }

    return Promise.resolve(this.syncSet(name, value));
  }

  syncDelete(name) {
    if (this.gmSupport) {
      return GM_deleteValue(name);
    }

    return window.localStorage.removeItem(name);
  }

  async delete(name) {
    if (this.gmSupport) {
      return await GM_deleteValue(name);
    }

    return Promise.resolve(this.syncDelete(name));
  }

  syncList() {
    if (this.gmSupport) {
      return GM_listValues();
    }

    return [
      "autoTranslate",
      "dontTranslateLanguage",
      "dontTranslateYourLang",
      "autoSetVolumeYandexStyle",
      "autoVolume",
      "buttonPos",
      "showVideoSlider",
      "syncVolume",
      "subtitlesMaxLength",
      "highlightWords",
      "responseLanguage",
      "defaultVolume",
      "audioProxy",
      "showPiPButton",
      "translateAPIErrors",
      "translationService",
      "detectService",
      "m3u8ProxyHost",
      "translateProxyEnabled",
      "hotkeyButton",
      "proxyWorkerHost",
      "audioBooster",
      "locale-version",
      "locale-lang",
      "locale-phrases",
    ];
  }

  async list() {
    if (this.gmSupport) {
      return await GM_listValues();
    }

    return Promise.resolve(this.syncList());
  }
})();
