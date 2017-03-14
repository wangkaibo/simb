
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var inject = require('gulp-inject');

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});

gulp.task('stylus', function () {
    return gulp.src('./app/views/stylus/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./public/build/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('./public/build/css'));
});

gulp.task('insert-js-css', ['stylus'], function () {
    var target = gulp.src('./app/views/index.blade.php');
    var sources = gulp.src(['./public/build/js/*.js', './public/build/**/*.min.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./app/views'));
});

gulp.task('default', ['stylus', 'insert-js-css']);