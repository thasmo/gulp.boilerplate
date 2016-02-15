// package.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Define task.
var task = gulp.series('build', function() {
	return gulp.src(path.public.main + '/**')
		.pipe($.plumber(helper.error))
		.pipe($.zip(config.task.package.name))
		.pipe(gulp.dest('.'))
		.pipe(helper.success(task.displayName));
});

task.displayName = 'package';
task.description = 'Process common files.';

// Export task.
module.exports = task;
