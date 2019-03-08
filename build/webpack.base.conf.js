const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/' 
}

module.exports = {

	externals: {
		paths: PATHS
	},
	entry: {
		app: PATHS.src
	},
	output: {
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
		publicPath: ''
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}, {
			test: /\.pug$/,
			loader: 'pug-loader',
			options: {
				pretty: true
			}
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			exclude: [/fonts/],
			options: {
				name: '[name].[ext]'
			}
		}, {
			test: /\.(eot|woff|ttf|svg)$/,
			loader: 'file-loader',
			exclude: [/img/],
			options: {
				publicPath: '../fonts/',
				name: '[name].[ext]',
				outputPath: `${PATHS.assets}fonts`
			}
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {sourceMap: true}
				}, {
					loader: 'postcss-loader',
					options: {sourceMap: true, config: { path: "src/js/postcss.config.js"}}
				}
			]
		}, {
			test: /\.scss$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {sourceMap: true}
				},{
					loader: 'postcss-loader',
					options: {sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js`}}
				}, {
					loader: 'sass-loader',
					options: {sourceMap: true}
				}
			]
		}]
	},
	plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new HtmlWebpackPlugin ({
    	hash: false,
    	template: `${PATHS.src}/index.pug`,
    	filename: './index.html'
    }),
    new CopyWebpackPlugin([
    	{ from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
    	{ from: `${PATHS.src}/static`, to: ''}
    ]), 
  ]
}