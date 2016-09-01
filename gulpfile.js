'use strict';
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssMin = require('gulp-css');
const imagemin = require('gulp-imagemin');

gulp.task('default', ['css', 'imagemin', 'scripts']);

gulp.task('imagemin', () =>
    gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('css', function() {
    gulp.src([
            './css/main.css',
            './css/blog.css',
            './css/contact.css',
        ])
        .pipe(concat('styles.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function() {
    gulp.src([
            './js/jquery-2.2.4.js',
            './js/bootstrap.min.js',
            './js/angular.js',
            './js/angular-cookies.js',
            './node_modules/sw-toolbox/sw-toolbox.js'
        ])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));

    gulp.src([
            './js/app.js',
            './js/blog.js',
            './js/contact.js'
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));

    gulp.src('./js/blog.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist'));

    gulp.src('./node_modules/sw-toolbox/sw-toolbox.js')
        .pipe(concat('sw-toolbox.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});