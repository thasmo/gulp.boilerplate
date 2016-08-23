// script.js

var gulp = require('gulp');
var helper = require('../../helper');

// Define task.
var task = gulp.parallel(helper.register(['script:common', 'script:lint', 'script:vendor']));
task.description = 'Run script-related tasks.';

// Export task.
module.exports = task;
