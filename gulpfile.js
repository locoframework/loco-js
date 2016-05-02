/*!
 * gulp
 * $ npm install gulp-coffee gulp-sourcemaps gulp-concat gulp-uglify gulp-notify gulp-rename del gulp-jasmine-browser --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del'),
    coffee = require('gulp-coffee'),
    sourcemaps = require('gulp-sourcemaps'),
    jasmineBrowser = require('gulp-jasmine-browser');

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
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/'));
});

// Scripts
gulp.task('scripts', ['coffee'], function() {
  var manifest = [
    './src/base/objects.js',
    './src/base/mix.js',
    './src/base/identity_map.js',
    './src/base/wire.js',
    './src/base/loco.js',
    './src/base/mixins/**/*.js',
    './src/utils/**/*.js',
    './src/validators/**/*.js',
    './src/models/**/*.js',
    './src/controllers/**/*.js',
    './src/views/**/*.js',
    './src/ui/**/*.js',
    './src/services/**/*.js',
    './src/helpers/**/*.js',
    './src/locales/**/*.js'
  ]

  return gulp.src(manifest)
    .pipe(concat('loco.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Spec

// Clean spec
gulp.task('clean_spec', function() {
  return del(['spec/*']);
});

// Coffee spec
gulp.task('coffee_spec', ['clean_spec'], function() {
  return gulp.src('./spec_coffee/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./spec/'));
});

// Copy spec helpers
gulp.task('copy_spec_helpers', ['coffee_spec'], function() {
  return gulp.src('./spec_coffee/**/*.js')
    .pipe(gulp.dest('./spec/'));
});

// Concat dummy app
gulp.task('concat_dummy_app', ['copy_spec_helpers'], function() {
  var manifest = [
    './spec/dummy/locales/base/**/*.js',
    './spec/dummy/locales/models/**/*.js',
    './spec/dummy/locales/validators/**/*.js',
    './spec/dummy/initializers/**/*.js',
    './spec/dummy/controllers/**/*.js',
    './spec/dummy/models/**/*.js',
    './spec/dummy/views/**/*.js',
    './spec/dummy/templates/**/*.js',
    './spec/dummy/validators/**/*.js'
  ]
  return gulp.src(manifest)
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./spec/dummy/'));
});

gulp.task('jasmine', ['concat_dummy_app'], function() {
  return gulp.src(['bower_components/jquery/dist/jquery.js', 'dist/loco.js', 'spec/dummy/application.js', 'spec/helpers/**/*.js', 'spec/loco/**/*.js'])
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});