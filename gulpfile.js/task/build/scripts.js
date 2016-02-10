// scripts.js

var gulp = require('gulp');

// Define task.
var task = gulp.parallel('scripts:lint', 'scripts:common', 'scripts:vendor');
task.displayName = 'scripts';
task.description = 'Run script-related tasks.';

// Export task.
module.exports = task;
