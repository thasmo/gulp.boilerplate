// setup.js

var gulp = require('gulp');
var helper = require('../helper.js');

// Define task.
var task = gulp.parallel(helper.register(['setup:bower']));
task.description = 'Install dependencies.';

// Export task.
module.exports = task;
