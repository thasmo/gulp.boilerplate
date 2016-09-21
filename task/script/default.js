// default.js

var gulp = require('gulp');
var utility = require('../utility.js');

// Define task.
var task = gulp.series(utility.register(['reset', 'setup', 'build', 'serve']));
task.description = 'Run the build task.';

// Export task.
module.exports = task;
