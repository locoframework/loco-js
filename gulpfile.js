/*!
 * gulp
 * $ npm install gulp-coffee gulp-sourcemaps gulp-concat gulp-uglify gulp-notify gulp-rename del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del'),
    coffee = require('gulp-coffee'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps');

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('scripts');
});

// Clean
gulp.task('clean', function() {
  return del(['src/*', 'dist/*']);
});

// Coffee
gulp.task('coffee', function() {
  return gulp.src('./src_coffee/**/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/'));
});

// Scripts
gulp.task('scripts', ['coffee'], function() {
  return gulp.src('src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});