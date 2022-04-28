module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
    ],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    overrides: [
        // typescript
        {
            files: ['*.ts'],
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/recommended',
            ],
            rules: {
                '@typescript-eslint/semi': ['error'],
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/quotes': ['error', 'single'],
            },
        },
        // javascript
        {
            files: ['*.js'],
            plugins: [],
            extends: ['google'],
            rules: {
                'indent': ['error', 4],
                'require-jsdoc': 'off',
                'max-len': ['error', {'code': 140}],
                'comma-dangle': 'off',
            },
        },
    ],
};
