import eslintJs from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import turbo from 'eslint-config-turbo/flat';
import importPlugin from 'eslint-plugin-import-x';
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';
import { typescriptConfig } from './typescript.js';
import tseslint from 'typescript-eslint';

const commonConfig = [
  globalIgnores(['**/node_modules/', '**/dist/', '**/coverage/', '**/public/', '**/storybook-static/']),
  ...turbo,
  prettier,
  eslintJs.configs.recommended,
  {
    name: 'Global',
    plugins: { import: importPlugin, 'prefer-arrow': preferArrowPlugin },
    rules: {
      eqeqeq: ['error', 'always'],
      'no-console': ['error'],
      'no-dupe-args': ['error'],
      'no-duplicate-case': ['error'],
      'no-extra-boolean-cast': ['error'],
      'no-magic-numbers': ['error', { ignoreArrayIndexes: true, ignore: [0, 1, 2, 3, 4, 5, 6, -1] }],
      'no-unneeded-ternary': ['error'],
      'no-unreachable': ['error'],
      'prefer-arrow-callback': ['error'],
      'prefer-const': ['error'],
      'require-await': ['error'],

      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'object', 'type', 'parent', 'sibling', 'index', 'internal'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@starter-kit/css**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          warnOnUnassignedImports: true,
          'newlines-between': 'never',
        },
      ],

      'prefer-arrow/prefer-arrow-functions': [
        'warn',
        {
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
    },
  },
  {
    name: 'Barrel Files',
    files: ['index.ts'],
    rules: {
      'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
    },
  },
];

export { commonConfig, typescriptConfig, tseslint };
