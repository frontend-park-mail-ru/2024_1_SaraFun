const path = require('path');
const fs = require('fs');
const { readdirSync } = require('fs');
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
		port: 3000,
		open: false,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: 'asset/resource',
				
				
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /.pug$/,
				use: [
				  {
						loader: 'pug-loader',
						options: {
					  pretty: true 
						}
				  }
				]
			},
		
		],
	},
	resolve: {
		extensions:['.tsx', '.ts', '.js', '.pug'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'SparkIt',
			filename: 'index.html',
			template: 'src/index.html',
		}),
	]
};

const PATH_OUT = './src/templates/';
const PATHS = [
	'./src/components/SwipeCard/',
	'./src/pages/login/',
	'./src/pages/signup/',
	'./src/pages/feed/'
];
  
const generateTemplates = () => {
	for (const dir of PATHS) {
		const files = readdirSync(dir);
		for (const file of files) {
			if (file.endsWith('.pug')) {
				const name = file.replace('.pug', '');
				const templatePath = path.resolve(dir, file);
				const outputPath = path.resolve(PATH_OUT, `${name}.js`);
				
				const templateFunction = `import template from '${templatePath}'; export default template;`;
				
				fs.writeFileSync(outputPath, templateFunction);
			}
		}
	}
};
  
generateTemplates();