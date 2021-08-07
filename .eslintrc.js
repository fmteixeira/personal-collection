module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.composition.tsx", "*.spec.tsx"], // Your TypeScript files extension
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
  ignorePatterns: ["src/react-app-env.d.ts"],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["**/*.module.css", "**/*.css", "**/*.scss"],
            message: "Please apply css with tailwindcss.",
          },
        ],
      },
    ],
  },
};
