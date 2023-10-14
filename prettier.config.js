/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: false,
  tabWidth: 4,
  proseWrap: "always",
  printWidth: 80,
  trailingComma: "all",
  arrowParens: "always",
  semi: true,
  bracketSpacing: true,
};

export default config;
