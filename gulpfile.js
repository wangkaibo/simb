
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var del = require("del");
var plumber = require('gulp-plumber');

gulp.task('stylus', function () {
    del([
        './public/dist/css/*.css',
        '!./public/dist/css/normalize.css'
    ]);
    return gulp.src('./app/views/stylus/*.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('./public/dist/css'))
        .pipe(gulp.dest('./public/dist/css'))
});

gulp.task('minCss', ['stylus'], function() {
    return gulp.src('./public/dist/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('./public/dist/css'))
});

gulp.task('default', ['stylus', 'minCss']);

gulp.watch('app/views/stylus/*.styl', ['stylus', 'minCss']);
