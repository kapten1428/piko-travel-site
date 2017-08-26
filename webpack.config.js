module.exports = {
	entry : __dirname + '/App/assets/scripts/App.js',
	output : {
		filename : 'App.js',
		path : __dirname + '/App/temp/scripts'
	},
	module : {
		loaders : [
			{
				loader : 'babel-loader',
				query : {
					presets : ['es2015']
				},
				test : /\.js$/,
				exclude : /node_modules/
			}
		]
	}
}