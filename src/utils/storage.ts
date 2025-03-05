import debug from "./debug";

export async function convertData(
  data: Record<string, unknown>,
  option: string,
  oldValue: unknown,
  newValue: string | number | boolean,
  optionValue: string | number | boolean | undefined = undefined,
) {
  const optionVal = optionValue ?? data[option];
  if (optionVal !== oldValue) {
    return;
  }

  data[option] = newValue;
  await votStorage.set(option, newValue);
  console.log(`[VOT] Old ${option} converted to new ${newValue}`);
}

export const votStorage = new (class {
  gmSupport: boolean;
  constructor() {
    this.gmSupport = typeof GM_getValue === "function";
    debug.log(`GM Storage Status: ${this.gmSupport}`);
  }

  syncGet(name: string, def: unknown = undefined) {
    if (this.gmSupport) {
      return GM_getValue(name, def);
    }

    const toNumber = typeof def === "number";
    let val = window.localStorage.getItem(name);

    const result = val ?? def;
    return toNumber ? Number(result) : result;
  }

  async get(name: string, def: unknown = undefined) {
    if (this.gmSupport) {
      return await GM_getValue(name, def);
    }

    return Promise.resolve(this.syncGet(name, def));
  }

  syncSet(name: string, value: string | boolean | number | undefined) {
    if (this.gmSupport) {
      return GM_setValue(name, value);
    }

    return window.localStorage.setItem(name, value as string);
  }

  async set(name: string, value: string | boolean | number | undefined) {
    if (this.gmSupport) {
      return await GM_setValue(name, value);
    }

    return Promise.resolve(this.syncSet(name, value));
  }

  syncDelete(name: string) {
    if (this.gmSupport) {
      return GM_deleteValue(name);
    }

    return window.localStorage.removeItem(name);
  }

  async delete(name: string) {
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
