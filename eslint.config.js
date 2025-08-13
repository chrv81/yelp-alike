import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly'
      }
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/order': 'warn',
      'no-undef': 'error',
      'no-unused-vars': 'warn'
    }
  }
];
