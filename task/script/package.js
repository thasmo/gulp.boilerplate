// package.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');
var helper = require('../helper');
var path = require('../path');

// Define task.
var task = function() {
	return gulp.src(path.public.main + '/**')
		.pipe($.plumber(helper.error))
		.pipe($.zip(config.task.package.name))
		.pipe(gulp.dest('.'))
		.pipe(helper.success(task.displayName));
};

task.description = 'Package public files.';

// Export task.
module.exports = task;
