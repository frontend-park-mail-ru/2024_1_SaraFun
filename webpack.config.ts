import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'production' | 'development';

interface EnvVariables {
    mode : Mode;
    port: number;
}

export default (env: EnvVariables) => {

    const isDev = env.mode === 'development';

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
        ],
        module: {
            rules: [
                {
                    test: /.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /.(woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            historyApiFallback: true,
            port: env.port ?? 3000,
        } : undefined,
    }
    return config;
}