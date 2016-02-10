// build.js

var gulp = require('gulp');

// Define task.
var task = gulp.series('reset', 'setup', gulp.parallel('fonts', 'icons', 'images', 'scripts', 'styles', 'templates'));
task.displayName = 'build';
task.description = 'Run all build tasks.';

// Export task.
module.exports = task;
