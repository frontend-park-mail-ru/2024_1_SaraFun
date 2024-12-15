const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin'); 

module.exports = {
    mode: 'development', 
    entry: {
        bundle: path.resolve(__dirname, 'src/index.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 4000,
        open: {
            app: {
                name: 'Google Chrome',
            },
        },
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 65,
                                progressive: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /.pug$/,
                loader: 'pug-loader',
            },
        ],
    },
    resolve: {
        alias: {
            '@img': path.resolve(__dirname, 'src/shared/assets/img')
        },
        extensions:['.tsx', '.ts', '.js', '.pug', '.svg'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'SparkIt',
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'sw.js', to: 'sw.js' },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', 
        }),
        new CompressionPlugin({
            algorithm: 'gzip', // Изменено на gzip
            test: /.(js|css|html|svg|png|jpg|jpeg|gif)$/i, 
            threshold: 10240, 
            minRatio: 0.8, 
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(), 
            new CssMinimizerPlugin(), 
        ],
    },
};