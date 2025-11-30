// eslint.config.js
import eslintJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import tsEslint from 'typescript-eslint';
import vueTsConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'files-to-lint',
    files: ['**/*.{js,mjs,cjs,ts,mts,tsx,vue}'],
  },

  {
    name: 'files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // 1. JavaScript Base Rules (ESLint recommended)
  eslintJs.configs.recommended,

  // 2. Vue 3 essential rules
  ...pluginVue.configs['flat/essential'],

  // 3. TypeScript ESLint (new v7)
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,

  // 4. Vue + TypeScript integration
  ...vueTsConfig(),

  // 5. Turn off rules conflicting with Prettier
  skipFormatting,

  // Custom Rules
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
