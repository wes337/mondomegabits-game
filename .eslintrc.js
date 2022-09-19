module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  plugins: ["solid"],
  extends: ["eslint:recommended", "plugin:solid/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
