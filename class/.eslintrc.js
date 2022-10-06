module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: "./class/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react/display-name": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
  },
};
