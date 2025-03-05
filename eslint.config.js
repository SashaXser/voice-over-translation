import js from "@eslint/js";
import globals from "globals";
import oxlint from "eslint-plugin-oxlint";
// import github from "eslint-plugin-github";

export default [
  {
    ignores: ["dist/*"],
  },
  js.configs.recommended,
  {
    // plugins: {
    //   github: github,
    // },
    rules: {
      "no-control-regex": 0,
      "no-async-promise-executor": 0,
      // return after update github eslint plugin to full support eslint 9
      // "github/no-innerText": "error",
      // "github/no-inner-html": "error",
      // "github/no-useless-passive": "error",
      // "github/prefer-observers": "error",
      // "github/require-passive-events": "error",
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.greasemonkey,
        // IMPORTED SCRIPTS
        protobuf: "readonly",
        Hls: "readonly",
        anime: "readonly",
        // WEBPACK ENVIRONMENT
        DEBUG_MODE: "readonly",
        AVAILABLE_LOCALES: "readonly",
        IS_BETA_VERSION: "readonly",
        __MK_GLOBAL__: "readonly",
        // YOUTUBE PAGE API
        ytplayer: "readonly",
      },
    },
  },
  oxlint.configs["flat/recommended"], // oxlint should be the last one
];
