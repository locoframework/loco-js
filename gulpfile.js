/*
  $ gulp         - start jasmine & watch tasks
  $ gulp watch   - watch .coffee files for changes
  $ gulp build   - build
  $ gulp jasmine - run jasmine server
*/

// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del'),
    coffee = require('gulp-coffee'),
    jasmineBrowser = require('gulp-jasmine-browser'),
    watch = require('gulp-watch');

// Default task
gulp.task('default', ['build'], function() {
  gulp.start('watch');
  gulp.start('jasmine');
});

// Build task
gulp.task('build', function() {
  gulp.start('scripts');
});

// Watch
gulp.task('watch', function() {
  gulp.watch(['./src_coffee/**/*.coffee'], ['scripts']);
  gulp.watch(['./spec_coffee/loco/**/*.coffee'], ['build_specs']);
});

// Clean
gulp.task('clean', function() {
  return del(['src/*', 'dist/*']);
});

// Coffee
gulp.task('coffee', ['clean'], function() {
  return gulp.src('./src_coffee/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./src/'));
});

// Scripts
gulp.task('scripts', ['coffee'], function() {
  var manifest = [
    './src/base/objects.js',
    './src/base/mix.js',
    './src/base/wire.js',
    './src/base/line.js',
    './src/base/loco.js',
    './src/base/mixins/**/*.js',
    './src/utils/**/*.js',
    './src/controllers/**/*.js',
    './src/views/**/*.js',
    './src/ui/**/*.js',
    './src/services/**/*.js',
    './src/helpers/**/*.js',
    './src/locales/**/*.js'
  ];
  return gulp.src(manifest)
    .pipe(concat('loco.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Spec

gulp.task('clean_specs', function() {
  return del(['spec/loco/*']);
});

gulp.task('build_specs', ['clean_specs'], function() {
  return gulp.src('./spec_coffee/loco/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./spec/loco/'))
    .pipe(notify({ message: 'Specs are prepared' }));
});

// Clean spec
gulp.task('clean_spec_dir', function() {
  return del(['spec/*']);
});

// Coffee spec
gulp.task('coffee_spec', ['clean_spec_dir'], function() {
  return gulp.src('./spec_coffee/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./spec/'));
});

// Copy JS spec files
gulp.task('copy_js_spec_files', ['coffee_spec'], function() {
  return gulp.src('./spec_coffee/**/*.js')
    .pipe(gulp.dest('./spec/'));
});

// Concat dummy app
gulp.task('concat_dummy_app', ['copy_js_spec_files'], function() {
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
  ];
  return gulp.src(manifest)
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./spec/dummy/'));
});

gulp.task('jasmine', ['concat_dummy_app'], function() {
  var filesForTest = [
    'spec/helpers/**/*.js',
    'spec/loco/**/*.js',
    'node_modules/loco-js-model/dist/loco-model.js',
    'dist/loco.beta.js',
    'spec/dummy/application.js'
  ];
  return gulp.src(filesForTest)
    .pipe(watch(filesForTest))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});
