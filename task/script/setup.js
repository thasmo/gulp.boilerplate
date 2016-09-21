// setup.js

var gulp = require('gulp');
var utility = require('../utility.js');

// Define task.
var task = gulp.parallel(utility.register(['setup:bower']));
task.description = 'Install dependencies.';

// Export task.
module.exports = task;
