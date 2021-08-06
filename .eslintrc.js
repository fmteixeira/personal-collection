module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: ["plugin:react/recommended", "airbnb-typescript", "prettier"],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      parserOptions: {
        project: ["./tsconfig.eslint.json"], // Specify it only for TypeScript files
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  // plugins: ["react", "@typescript-eslint", "prettier"],
  plugins: ["@typescript-eslint", "prettier"],
};
