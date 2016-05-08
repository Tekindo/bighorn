module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: "./www/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react','es2015']
      }
    }
        ]
    }
};