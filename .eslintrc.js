module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
  ],
  rules: {
    curly: ["error", "all"],
    "no-unused-vars": ["error", { args: "none" }],
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "prefer-destructuring": "off",
    "import/no-commonjs": "error",
  },
};
