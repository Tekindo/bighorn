var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');

// Webpack
gulp.task("webpack", function(callback) {
    webpack(
        require('./webpack.config.js'),
        function(err, stats) {
            if(err) throw new gutil.PluginError("webpack", err);
                
            //gutil.log("[webpack]", stats.toString({}));
        }
    );
});

gulp.task('default', ['webpack']);