// style.js

var gulp = require('gulp');
var helper = require('../../helper.js');

// Define task.
var task = gulp.parallel(helper.register(['style:common', 'style:lint']));
task.description = 'Run style-related tasks.';

// Export task.
module.exports = task;
