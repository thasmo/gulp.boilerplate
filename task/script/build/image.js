// image.js

var gulp = require('gulp');
var utility = require('../../utility.js');

// Define task.
var task = gulp.parallel(utility.register(['image:common', 'image:convert']));
task.description = 'Run image-related tasks.';

// Export task.
module.exports = task;
