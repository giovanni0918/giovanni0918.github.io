'use strict';
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () => console.log('default gulp task'));
gulp.task('imagemin', () =>
    gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);
