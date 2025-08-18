const js = require("@eslint/js");
const globals = require("globals");
const pluginPrettier = require("eslint-plugin-prettier");
const prettier = require("eslint-config-prettier");

module.exports = [
  {
    ignores: ["dist/", "node_modules/"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  prettier,
];
