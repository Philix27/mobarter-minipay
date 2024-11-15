/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@repo/eslint-config/next.js',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    'react/function-component-definition': 'off',
    // '@typescript-eslint/ban-ts-comment': ['off'],
    // '@typescript-eslint/explicit-module-boundary-types': ['off'],
    // '@typescript-eslint/no-explicit-any': ['off'],
    // '@typescript-eslint/no-floating-promises': ['error'],
    // '@typescript-eslint/no-non-null-assertion': ['off'],
    // '@typescript-eslint/no-require-imports': ['warn'],
    // '@typescript-eslint/no-unused-vars': ['error'],
    // 'import/no-self-import': ['error'],
    // 'import/no-duplicates': ['error'],
    // 'jsx-a11y/alt-text': ['off'],
    // 'no-console': ['warn'],
    // 'no-eval': ['error'],
    // 'no-ex-assign': ['error'],
    // 'no-constant-condition': ['off'],
  },
};
