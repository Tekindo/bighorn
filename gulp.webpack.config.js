var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin("./styles/app-ui.css");

module.exports = {
    output: {
        filename: "./js/bundle.js"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss?$/,
                exclude: /(node_modules|bower_components)/,
                loader: extractCSS.extract(["css", "sass"])
            }
        ]
    },
    plugins: [
		extractCSS
	]
};