'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});
gulp.task('sass', function () {
  return gulp.src('scss/gallery/gallery.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles1'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/style.scss', gulp.parallel(['sass']));
  gulp.watch('scss/base/reset.scss', gulp.parallel(['sass']));
});