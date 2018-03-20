'use strict';
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssMin = require('gulp-css');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');

gulp.task('imagemin', (done) => 
    gulp.src('./_assets/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);

gulp.task('sass', () =>
    gulp.src('./_sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_assets/styles'))
);

gulp.task('styles', function (done) {
    gulp.src([
        './_assets/styles/**/*.css',
        './_sass/prism.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./dist/styles'));
    done();
});

gulp.task('scripts', function (done) {
    gulp.src([

        './_scripts/jquery-2.2.4.js',
        './_scripts/bootstrap.min.js',
        './_scripts/angular.js',
        './_scripts/angular-cookies.js',
        './node_modules/sw-toolbox/sw-toolbox.js',        

    ]).pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));

    gulp.src([

        './_scripts/app.js',
        './_scripts/blog.js',
        './_scripts/contact.js',
        './_scripts/repos.js',
        './_scripts/prism.js'

    ]).pipe(babel({
        presets: ['es2015']
    })).pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));

    gulp.src('./node_modules/sw-toolbox/sw-toolbox.js')
        .pipe(concat('sw-toolbox.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));

    done();
});
gulp.task('default',
    gulp.series(
        'sass',
        'styles',
        gulp.parallel('scripts', 'imagemin')
    )
);