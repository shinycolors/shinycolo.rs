module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "typescript-eslint-parser"
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "typescript",
    "prettier"
  ],
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
