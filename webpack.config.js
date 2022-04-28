const path = require('path');
const {BannerPlugin, DefinePlugin} = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PACKAGE = require('./package.json');

module.exports = function(env, argv) {
    const root = path.resolve(__dirname);
    const production = argv && argv.mode === 'production';
    const timestamp = new Date().toISOString();
    const banner = `${PACKAGE.name} v${PACKAGE.version} ${timestamp} production=${production}`;

    console.log(banner, '\n');

    return {
        mode: production ? 'production' : 'development',
        devtool: production ? false : 'inline-cheap-module-source-map',
        entry: {
            polyfills: './src/polyfills.ts',
            app: './src/main.ts',
        },
        output: {
            path: `${root}/dist`,
            publicPath: '/',
            filename: production ? '[name]_[contenthash].bundle.js' : '[name].bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(html|svg)$/,
                    loader: 'raw-loader',
                },
                {
                    test: /\.[s]?css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new BannerPlugin(banner),
            new DefinePlugin({
                $APPLICATION: `"${PACKAGE.name}"`,
                $VERSION: `"${PACKAGE.version}"`,
                $PRODUCTION: `${production}`,
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                inject: 'body',
                scriptLoading: 'blocking',
            }),
            new MiniCssExtractPlugin({
                filename: production ? 'styles_[contenthash].css' : 'styles.bundle.css'
            }),
            new CopyPlugin({
                patterns: [
                    {from: `${root}/src/assets`, to: 'assets'},
                    {from: `${root}/src/favicon.ico`, to: 'favicon.ico'},
                ],
            }),
        ],
        optimization: {
            minimizer: [
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                name: 'vendors',
                chunks: 'all',
            },
        },
        devServer: {
            historyApiFallback: true,
            compress: true,
            port: 9000,
        },
    };
};
