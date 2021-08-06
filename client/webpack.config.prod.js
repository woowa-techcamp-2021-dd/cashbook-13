require('dotenv/config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
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
					MiniCssExtractPlugin.loader,
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
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: 'src/public/', to: './src/public' }],
		}),
		new webpack.EnvironmentPlugin([]),
	],
};
