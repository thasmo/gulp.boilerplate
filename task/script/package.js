// package.js

var gulp = require('gulp');
var config = require('../config.js');
var utility = require('../utility.js');
var path = require('../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	zip: require('gulp-zip')
};

// Define task.
var task = function() {
	return gulp.src(path.public.main + '/**')
		.pipe($.plumber(utility.error))
		.pipe($.zip(config.task.package.name))
		.pipe(gulp.dest('.'));
};

task.description = 'Package public files.';

// Export task.
module.exports = task;
