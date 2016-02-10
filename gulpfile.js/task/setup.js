// setup.js

var gulp = require('gulp');

// Define task.
var task = gulp.parallel('setup:bower', 'setup:modernizr');
task.displayName = 'setup';
task.description = 'Install dependencies.';

// Export task.
module.exports = task;
