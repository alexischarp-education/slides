import tseslint from 'typescript-eslint';

export const typescriptConfig = [
  ...tseslint.configs.strictTypeChecked,
  {
    name: 'Global TypeScript',
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-exports': ['error'],
      '@typescript-eslint/consistent-type-imports': ['error'],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'function',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-explicit-any': ['error'],
      '@typescript-eslint/no-unnecessary-condition': ['error'],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-redundant-type-constituents': ['warn'],
      '@typescript-eslint/no-import-type-side-effects': ['warn'],
      '@typescript-eslint/sort-type-constituents': ['warn'],
      '@typescript-eslint/no-unsafe-assignment': ['warn'],
      '@typescript-eslint/no-unsafe-call': ['warn'],
      '@typescript-eslint/no-unsafe-return': ['warn'],
      '@typescript-eslint/restrict-template-expressions': ['off'],
    },
  },
];
