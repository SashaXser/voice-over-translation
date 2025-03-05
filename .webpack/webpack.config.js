import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import webpack from "webpack";

import { monkey } from "webpack-monkey";
import { styleLoaderInsertStyleElement } from "webpack-monkey/lib/client/css.js";
import ESLintPlugin from "eslint-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

import {
  sitesInvidious,
  sitesPiped,
  sitesProxiTok,
  sitesPeertube,
  sitesPoketube,
  sitesCoursehunterLike,
} from "@vot.js/shared/alternativeUrls";
import configShared from "./config.shared.js";

import { repositoryUrl, contentUrl } from "../src/config/config.js";

const dev = process.env.NODE_ENV === "development";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "..");
const localesDir = path.resolve(__dirname, "src", "localization", "locales");
const priorityLocales = ["auto", "en", "ru"];

let isBeta = getHeaders().version.includes("beta");
const availableLocales = getAvailableLocales();

console.log("development mode: ", dev);

function getHeaders(lang) {
  const headersPath = lang
    ? path.resolve(localesDir, "headers", lang)
    : path.resolve(__dirname, "src", "headers.json");
  return JSON.parse(fs.readFileSync(headersPath).toString());
}

function getAvailableLocales() {
  const files = fs.readdirSync(localesDir);
  const locales = files.reduce((result, file) => {
    if (!file.endsWith(".json")) {
      return result;
    }

    const locale = file.replace(".json", "");
    if (priorityLocales.includes(locale)) {
      return result;
    }

    result.push(locale);
    return result;
  }, []);

  return [...priorityLocales, ...locales];
}

export default (env) => {
  const build_type = env.build_type;
  console.log("build type: ", build_type);

  function getFilename() {
    let name = "vot";
    if (build_type === "minify") {
      name += "-min";
    }

    return name + ".user.js";
  }

  function altUrlsToMatch() {
    // autogenerating match list by alternative urls sites
    return [
      sitesInvidious,
      sitesPiped,
      sitesProxiTok,
      sitesPeertube,
      sitesPoketube,
      sitesCoursehunterLike,
    ]
      .map((sites) =>
        sites.map((site) => {
          const isSubdomain = site.match(/\./g)?.length > 1;
          return `*://${isSubdomain ? "" : "*."}${site}/*`;
        }),
      )
      .flat();
  }

  return monkey({
    mode: dev ? "development" : "production",
    ...configShared,
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      ...(!dev ? { filename: getFilename() } : {}),
    },
    monkey: {
      debug: dev,
      meta: {
        resolve: path.resolve(__dirname, "src", "headers.json"),
        transform({ meta }) {
          const extFileName = getFilename().slice(0, -8);
          const finalURL = `${contentUrl}/${
            isBeta ? "dev" : "master"
          }/dist/${extFileName}.user.js`;

          meta.namespace = extFileName;
          meta.homepageURL = repositoryUrl;
          meta.updateURL = meta.downloadURL = finalURL;
          meta.supportURL = `${repositoryUrl}/issues`;

          const files = fs.readdirSync(path.resolve(localesDir, "headers"));
          meta = {
            ...meta,
            name: {
              default: meta.name,
            },
            description: {
              default: meta.description,
            },
            match: Array.from(new Set([...meta.match, ...altUrlsToMatch()])),
          };

          for (const file of files) {
            const localeHeaders = getHeaders(file);
            const lang = file.substring(0, 2);

            meta.name[lang] = localeHeaders.name;
            meta.description[lang] = localeHeaders.description;
          }

          return meta;
        },
      },
    },
    plugins: [
      new ESLintPlugin({
        configType: "flat",
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new webpack.DefinePlugin({
        DEBUG_MODE: dev,
        // DEBUG_MODE: true,
        IS_BETA_VERSION: isBeta,
        AVAILABLE_LOCALES: JSON.stringify(availableLocales),
        ...(() => {
          if (!dev) {
            return {
              __MK_GLOBAL__: {
                styleLoaderInsertStyleElement,
              },
            };
          }
        })(),
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^node:crypto$/,
      }),
    ],
    optimization: {
      emitOnErrors: true,
      moduleIds: "named",
      minimize: build_type === "minify",
      minimizer: [new TerserPlugin()],
    },
  });
};
