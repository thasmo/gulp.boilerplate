// build.js

var gulp = require('gulp');
var include = require('require-dir');
var helper = require('../helper');

// Register task.
var task = gulp.parallel(helper.values(include('build/')));
task.displayName = 'build';
task.description = 'Run all build tasks.';

// Export task.
module.exports = task;
