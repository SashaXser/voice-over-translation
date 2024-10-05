// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const m3u8ProxyHost = "media-proxy.toil.cc/v1/proxy/m3u8"; // used for streaming
const proxyWorkerHost = "vot-worker.toil.cc";
const votBackendUrl = "https://vot.toil.cc/v1";
const contentUrl =
  "https://raw.githubusercontent.com/ilyhalight/voice-over-translation";
const repositoryUrl = "https://github.com/ilyhalight/voice-over-translation";

const defaultAutoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation
const maxAudioVolume = 900;
const defaultTranslationService = "yandex";
const defaultDetectService = "yandex";

const detectUrls = {
  yandex: "https://translate.toil.cc/detect",
  rustServer: "https://rust-server-531j.onrender.com/detect",
};

const translateUrls = {
  yandex: "https://translate.toil.cc/translate",
  deepl: "https://translate-deepl.toil.cc/translate",
};

export {
  workerHost,
  m3u8ProxyHost,
  proxyWorkerHost,
  detectUrls,
  votBackendUrl,
  contentUrl,
  repositoryUrl,
  translateUrls,
  defaultTranslationService,
  defaultDetectService,
  defaultAutoVolume,
  maxAudioVolume,
};
