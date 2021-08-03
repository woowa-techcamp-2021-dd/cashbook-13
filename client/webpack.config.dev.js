require('dotenv/config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							additionalData: `@import "${path.resolve(
								__dirname,
								'src/config/globalStyle.scss'
							)}";`,
						},
					},
					'sass-loader',
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jp(e*)g)$/,
				loader: 'url-loader',
				options: {
					limit: 8000,
					name: 'images/[hash]-[name].[ext]',
				},
			},
			{
				test: /\.svg$/,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
		}),
		new webpack.EnvironmentPlugin([]),
	],
};
