// package.js

var gulp = require('gulp');
var config = require('../config.js');
var helper = require('../helper.js');
var path = require('../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	zip: require('gulp-zip')
};

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
