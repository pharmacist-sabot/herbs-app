// eslint.config.mjs
import antfu from '@antfu/eslint-config';

export default antfu({
  type: 'app',
  typescript: true,
  vue: true,
  formatters: true,

  stylistic: {
    indent: 2,
    semi: true,
    quotes: 'single',
  },

  ignores: [
    '**/dist/**',
    'public/**',
    'src/vite-env.d.ts',
    'README.md',
  ],
}, {
  rules: {
    // --- TypeScript ---
    'ts/no-redeclare': 'off',
    // ยอมรับการเปลี่ยน interface เป็น type
    'ts/consistent-type-definitions': ['error', 'type'],

    // --- General ---
    'no-console': ['warn'],
    'antfu/no-top-level-await': ['off'],

    // --- Node / Env ---
    'node/prefer-global/process': ['off'],
    'node/no-process-env': ['error'],

    // --- Perfectionist (Sorting) ---
    'perfectionist/sort-imports': ['error', {
      tsconfigRootDir: '.',
    }],

    // --- Filename Casing ---
    // อนุญาตให้ Vue Component เป็น PascalCase ได้
    'unicorn/filename-case': ['error', {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
    }],

    // --- Vue Specifics ---
    // กฎนี้บังคับชื่อ Component ต้องมี 2 คำ (เช่น TodoItem)
    'vue/multi-word-component-names': 'off',
  },
});
