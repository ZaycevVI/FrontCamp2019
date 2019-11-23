const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const globImporter = require('node-sass-glob-importer');

module.exports = (env, options) => {
    const mode = options.mode || 'development';
    const settingsFile = require(`./settings/settings.${mode}`);

    return {
        mode: 'development',
        entry: ['./src/extension/array-polyfill.js', 'babel-polyfill', './src/index.js'],
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: './dist',
            overlay: true
        },
        devtool: 'eval-sourcemap',
        module: {
            rules: [
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options:{
                                sassOptions: {
                                  importer: globImporter()
                                }
                              }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            "cacheDirectory": true
                        }
                    }
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.(jpg|svg|png|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './',
                                useRelativePath: true
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 70
                                }
                            }
                        }
                    ]
                }
            ],
        },
        plugins: [
            new webpack.DefinePlugin({ 'environment': JSON.stringify(settingsFile) }),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css"
            }),
            new CleanWebpackPlugin(),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
            })
        ]
    }
}