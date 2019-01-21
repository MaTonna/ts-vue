const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/app.ts',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.ts']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			// {
			// 	test: /\.ts$/,
			// 	exclude: /node_modules/,
			// 	enforce: 'pre',
			// 	loader: 'tslint-loader'
			// },
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			}
		]
	},
	plugins: [new VueLoaderPlugin()]
};
