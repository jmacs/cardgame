const webpackFinal = require('./webpack.storybook');

module.exports = {
    webpackFinal,
    framework: '@storybook/angular',
    core: {
        builder: '@storybook/builder-webpack5'
    },
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
    ],
}
