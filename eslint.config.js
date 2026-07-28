import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      quotes: ['error', 'single'],
      'eol-last': ['error', 'always'],
      semi: ['error', 'never'],
      'no-trailing-spaces': 'error',
      'no-console': 'error',
      'linebreak-style': ['error', 'unix'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
        },
      ],
      "array-element-newline": [
        "error",
        "always",
        {
          "minItems": 1,
        },
      ],
      "array-bracket-newline": [
        "error",
        {
          "multiline": true,
          "minItems": 1,
        },
      ],
      "newline-per-chained-call": [
        "error",
        {
          "ignoreChainWithDepth": 1,
        },
      ],
    }
  },
])
