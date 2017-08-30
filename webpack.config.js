module.exports = {
	entry : {
		App : __dirname + '/App/assets/scripts/App.js',
		Vendor : __dirname + '/App/assets/scripts/Vendor.js'
	},
	output : {
		filename : '[name].js',
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