// build.js

var gulp = require('gulp');
var include = require('require-dir');
var helper = require('../helper');

// Define task.
var task = gulp.series('reset', 'setup', gulp.parallel(helper.values(include('build/'))));
task.displayName = 'build';
task.description = 'Run all build tasks.';

// Export task.
module.exports = task;
