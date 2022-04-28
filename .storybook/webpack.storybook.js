const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {DefinePlugin} = require('webpack');
const PACKAGE = require('../package.json');

module.exports = function(config) {
    const root = path.resolve(__dirname, '..');
    const win32 = process.platform === 'win32';

    // storybook's built-in sass rule attempts to load everything through PostCSS
    // there's some kind of package incompatibility that causes this error:
    // SassError: expected "{".
    const builtInSASSRule = config.module.rules.find((rule) => {
        const test = rule.test ? rule.test.toString() : null;
        return test === '/\\.s(c|a)ss$/';
    });
    if (builtInSASSRule) {
        builtInSASSRule.exclude = win32 ? /\\src\\/ : /\/src\//;
    }

    config.plugins = [
        ...config.plugins,
        new DefinePlugin({
            $APPLICATION: `"${PACKAGE.name}"`,
            $VERSION: `"${PACKAGE.version}"`,
            $PRODUCTION: `false`,
        }),
        new CopyPlugin({
            patterns: [
                {from: `${root}/src/assets`, to: 'assets'},
            ],
        }),
    ];

    return config;
};
