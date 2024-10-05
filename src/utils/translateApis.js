import {
  translateUrls,
  detectUrls,
  defaultDetectService,
  defaultTranslationService,
} from "../config/config.js";
import { votStorage } from "./storage.js";
import { GM_fetch } from "./utils.js";

const YandexTranslateAPI = {
  async translate(text, lang) {
    // Limit: 10k symbols
    //
    // Lang examples:
    // en-ru, uk-ru, ru-en...
    // ru, en (instead of auto-ru, auto-en)

    try {
      const response = await GM_fetch(
        `${translateUrls.yandex}?${new URLSearchParams({
          text,
          lang,
        })}`,
        { timeout: 3000 },
      );

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();

      if (content.code !== 200) {
        throw content.message;
      }

      return content.text[0];
    } catch (error) {
      console.error("Error translating text:", error);
      return text;
    }
  },

  async detect(text) {
    // Limit: 10k symbols
    try {
      const response = await GM_fetch(
        `${detectUrls.yandex}?${new URLSearchParams({
          text,
        })}`,
        { timeout: 3000 },
      );

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();
      if (content.code !== 200) {
        throw content.message;
      }

      return content.lang ?? "en";
    } catch (error) {
      console.error("Error getting lang from text:", error);
      return "en";
    }
  },
};

const RustServerAPI = {
  async detect(text) {
    try {
      const response = await GM_fetch(
        detectUrls.rustServer,
        {
          method: "POST",
          body: text,
        },
        { timeout: 3000 },
      );

      if (response instanceof Error) {
        throw response;
      }

      return await response.text();
    } catch (error) {
      console.error("Error getting lang from text:", error);
      return "en";
    }
  },
};

const DeeplServerAPI = {
  async translate(text, fromLang = "auto", toLang = "ru") {
    try {
      const response = await GM_fetch(
        translateUrls.deepl,
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            text,
            source_lang: fromLang,
            target_lang: toLang,
          }),
        },
        { timeout: 3000 },
      );

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();

      if (content.code !== 200) {
        throw content.message;
      }

      return content.data;
    } catch (error) {
      console.error("Error translating text:", error);
      return text;
    }
  },
};

async function translate(text, fromLang = "", toLang = "ru") {
  const service = await votStorage.get(
    "translationService",
    defaultTranslationService,
  );
  switch (service) {
    case "yandex": {
      const langPair = fromLang && toLang ? `${fromLang}-${toLang}` : toLang;
      return await YandexTranslateAPI.translate(text, langPair);
    }
    case "deepl": {
      return await DeeplServerAPI.translate(text, fromLang, toLang);
    }
    default:
      return text;
  }
}

async function detect(text) {
  const service = await votStorage.get("detectService", defaultDetectService);
  switch (service) {
    case "yandex":
      return await YandexTranslateAPI.detect(text);
    case "rust-server":
      return await RustServerAPI.detect(text);
    default:
      return "en";
  }
}

const translateServices = Object.keys(translateUrls);
const detectServices = Object.keys(detectUrls).map((k) =>
  k === "rustServer" ? "rust-server" : k,
);

export { translate, detect, translateServices, detectServices };
