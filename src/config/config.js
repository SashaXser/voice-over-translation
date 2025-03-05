// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
/**
 * used for streaming
 */
const m3u8ProxyHost = "media-proxy.toil.cc/v1/proxy/m3u8";
const proxyWorkerHost = "vot-worker.toil.cc";
const votBackendUrl = "https://vot.toil.cc/v1";
const contentUrl =
  "https://raw.githubusercontent.com/ilyhalight/voice-over-translation";
const repositoryUrl = "https://github.com/ilyhalight/voice-over-translation";

/**
 * 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation
 */
const defaultAutoVolume = 0.15;
const maxAudioVolume = 900;
/**
 * The number of repeated responses after which the message turns into "translation is delayed, please wait"
 */
const minLongWaitingCount = 5;
const defaultTranslationService = "yandexbrowser";
const defaultDetectService = "yandexbrowser";

const foswlyTranslateUrl = "https://translate.toil.cc/v2";
const detectRustServerUrl = "https://rust-server-531j.onrender.com/detect";

const proxyOnlyExtensions = [
  "FireMonkey",
  "Greasemonkey",
  "AdGuard",
  "OrangeMonkey",
  "Userscripts",
  "Other (Polyfill)",
];

const proxyOnlyCountries = ["UA", "LV", "LT"];

export {
  workerHost,
  m3u8ProxyHost,
  proxyWorkerHost,
  detectRustServerUrl,
  votBackendUrl,
  contentUrl,
  repositoryUrl,
  foswlyTranslateUrl,
  defaultTranslationService,
  defaultDetectService,
  defaultAutoVolume,
  maxAudioVolume,
  minLongWaitingCount,
  proxyOnlyExtensions,
  proxyOnlyCountries,
};
