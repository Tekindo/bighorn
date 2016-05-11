var gulp = require('gulp');
var serve = require('gulp-serve');
var gulpWebpack = require('webpack-stream');
var webpack_config =require('./webpack.config.js');


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

gulp.task('watch', function() {
    gulp.watch(['src/**/*.scss', 'src/**/*.js'], ['webpack']);
});

gulp.task('dev-server', serve({
    root: ['www'],
    port: 8000
}));

gulp.task('default', ['dev-server', 'watch' ]);