/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:prettier/recommended",
    "plugin:eslint/recommended"
  ],
  rules: {
    // These opinionated rules are enabled in stylistic-type-checked above.
    // Feel free to reconfigure them to your own preference.
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",

    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    semi: "error",
    curly: ["error", "all"],
    "semi-spacing": "error",
    "semi-style": ["error", "last"],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
      },
    ],
    "space-before-blocks": ["error", "always"],
    /** @see https://eslint.org/docs/latest/rules/padding-line-between-statements#rule-details */
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: ["case", "default"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "if",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "if",
      },
    ],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "rest-spread-spacing": ["error", "never"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
  },
};

module.exports = config;
