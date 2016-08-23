// scripts.js

var gulp = require('gulp');
var include = require('require-dir');
var helper = require('../../helper');

// Define task.
var task = gulp.parallel(helper.values(include('script/')));
task.displayName = 'scripts';
task.description = 'Run script-related tasks.';

// Export task.
module.exports = task;
