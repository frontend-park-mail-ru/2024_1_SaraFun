const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/index.ts'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
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
				  'style-loader', 
				  'css-loader',   
				  'sass-loader'  
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][ext]', 
				},
		  
			},
			{
				test: /.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
				  filename: 'fonts/[name][ext]', 
				},
			},
		
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.pug$/,
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
	]
};