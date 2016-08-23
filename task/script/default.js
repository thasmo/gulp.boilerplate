// default.js

var gulp = require('gulp');
var helper = require('../helper.js');

// Define task.
var task = gulp.series(helper.register(['reset', 'setup', 'build', 'serve']));
task.description = 'Run the build task.';

// Export task.
module.exports = task;
