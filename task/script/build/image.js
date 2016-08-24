// image.js

var gulp = require('gulp');
var helper = require('../../helper.js');

// Define task.
var task = gulp.parallel(helper.register(['image:common', 'image:convert']));
task.description = 'Run image-related tasks.';

// Export task.
module.exports = task;
