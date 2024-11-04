import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
    eslint.configs.recommended,
    jsxA11y.flatConfigs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            quotes: ['error', 'single'],
        },
    }
);
