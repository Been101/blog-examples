module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/standard"],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: [0],
    quotes: [0, "singlequote"],
    "space-before-function-paren": [0, "always"]
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ]
};
