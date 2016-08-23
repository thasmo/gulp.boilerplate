// images.js

var gulp = require('gulp');
var include = require('require-dir');
var helper = require('../../helper');

// Define task.
var task = gulp.parallel(helper.values(include('image/')));
task.displayName = 'images';
task.description = 'Run image-related tasks.';

// Export task.
module.exports = task;
