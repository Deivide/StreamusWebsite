﻿const gulp = require('gulp');
const minifyHtml = require('gulp-minify-html');
const useref = require('gulp-useref');
const runSequence = require('run-sequence');
const Builder = require('systemjs-builder');
const util = require('gulp-util');
const del = require('del');
const packageConfig = require('../../package.json');
const paths = require('../paths.js');

// Create a bundled distribution from the compiled directory and put it into the dist directory.
// Ensure the dist directory is emptied before bundling to ensure no previous build artifacts remain.
// Ensure compiled files are up-to-date from the src directory before generating a build from them.
gulp.task('build', (done) => {
  runSequence(
    // Cleaning and compilation can run in parallel.
    ['build:cleanDist', 'compile'],
    // Compile html before js to ensure minified templates are inlined into js files.
    'build:transformHtml',
    'build:transformJs',
    // All other files can be copied in parallel
    ['build:copyImages', 'build:copyFonts', 'build:copyAssets'],
    'connect',
    done);
});

// Delete the contents of build location to ensure no build artifacts remain.
gulp.task('build:cleanDist', () => {
  return del(paths.dist);
});

// Move html from src to dest while transforming for production.
gulp.task('build:transformHtml', () => {
  return gulp.src(paths.compiledHtml)
    // Replace js references with a single reference to bundled js.
    .pipe(useref())
    .pipe(minifyHtml())
    .pipe(gulp.dest(paths.dist));
});

// Use jspm's builder to create a self-executing bundle of files.
// Written to a destination directory and ready for production use.
gulp.task('build:transformJs', (done) => {
  // By default, the config file can be found in the root directory. If defaults have been
  // changed then jspm's entry in packageConfig will know the correct value.
  const builder = new Builder(paths.compiled, packageConfig.jspm.configFile || 'config.js');
  const options = {
    runtime: false,
    // TODO: What are sourcemaps exactly?
    sourceMaps: false,
    minify: true
  };

  builder.buildStatic('main.js', `${paths.dist}main.js`, options)
    .then(() => {
      util.log(util.colors.green(`Built successfully to ${paths.dist}`));
    })
    .catch((errorMessage) => {
      util.log(util.colors.red(errorMessage));
    })
    .finally(done);
});

gulp.task('build:copyImages', () => {
  return gulp.src(paths.compiledImg)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build:copyFonts', () => {
  return gulp.src(paths.compiledFont)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build:copyAssets', () => {
  return gulp.src(paths.compiledAssets, { dot: true })
    .pipe(gulp.dest(paths.dist));
});