// default.js

var gulp = require('gulp');
var util = require('gulp-util');

// Define task.
var task = gulp.series('build', 'serve');
task.displayName = 'default';
task.description = 'Run the build and serve tasks.';

// Export task.
module.exports = task;
