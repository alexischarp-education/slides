import { defineConfig } from 'eslint/config';
import { commonConfig, typescriptConfig, tseslint } from 'eslint-config-custom';

export default defineConfig({ ignores: ['eslint.config.js'] }, ...commonConfig, ...typescriptConfig, {
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
