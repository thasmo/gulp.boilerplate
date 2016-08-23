// styles.js

var gulp = require('gulp');
var include = require('require-dir');
var helper = require('../../helper');

// Define task.
var task = gulp.parallel(helper.values(include('style/')));
task.displayName = 'styles';
task.description = 'Run style-related tasks.';

// Export task.
module.exports = task;
