// setup.js

var gulp = require('gulp');
var include = require('require-dir');
var helper = require('../helper');

// Define task.
var task = gulp.parallel(helper.values(include('setup/')));
task.displayName = 'setup';
task.description = 'Install dependencies.';

// Export task.
module.exports = task;
