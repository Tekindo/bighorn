var gulp = require('gulp');
var serve = require('gulp-serve');
var gulpWebpack = require('webpack-stream');
var webpack_config =require('./gulp.webpack.config.js');
var WebpackDevServer = require("webpack-dev-server");


gulp.task('webpack', function() {
    return gulp.src('./src/js/app.js')
        .pipe(gulpWebpack(webpack_config))
        .pipe(gulp.dest('./www'));
});

gulp.task('mobile', function() {
    return gulp.src('./src/js/app.js')
        .pipe(gulpWebpack(webpack_config))
        .pipe(gulp.dest('./mobile-app/www'));
});
gulp.task('dev-server', serve({
    root: ['www'],
    port: 8000
}));

gulp.task('default', ['webpack', 'dev-server']);