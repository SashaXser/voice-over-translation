import js from "@eslint/js";
import globals from "globals";
import oxlint from "eslint-plugin-oxlint";
import sonarjs from "eslint-plugin-sonarjs";
// import github from "eslint-plugin-github";

export default [
  {
    ignores: ["dist/*"],
  },
  js.configs.recommended,
  sonarjs.configs.recommended,
  {
    // plugins: {
    //   github: github,
    // },
    rules: {
      "no-control-regex": 0,
      "no-async-promise-executor": 0,
      "sonarjs/max-switch-cases": 0,
      "sonarjs/prefer-for-of": 0,
      "sonarjs/new-cap": 0,
      "sonarjs/todo-tag": "warn",
      "sonarjs/no-commented-code": 0,
      "sonarjs/no-nested-assignment": 0,
      "sonarjs/cognitive-complexity": "warn",
      "sonarjs/slow-regex": 0,
      // sonarjs/sonar-no-fallthrough crashed in 2.0.1
      "sonarjs/sonar-no-fallthrough": 0,
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
