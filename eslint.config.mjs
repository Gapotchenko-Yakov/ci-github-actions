import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'webpack.config.js'
    ],
  },
  {
    files: ["**/*.js"],
    rules: {
      "prefer-const": "error",
    },
    languageOptions: { sourceType: "module" },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.es2021,
      },
    },
  },
  pluginJs.configs.recommended,
];
