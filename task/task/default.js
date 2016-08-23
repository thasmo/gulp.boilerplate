// default.js

var gulp = require('gulp');

// Define task.
var task = gulp.series('reset', 'setup', 'build', 'serve');
task.displayName = 'default';
task.description = 'Run the build task.';

// Export task.
module.exports = task;
