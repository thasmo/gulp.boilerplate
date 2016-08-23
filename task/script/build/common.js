// common.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var helper = require('../../helper');
var path = require('../../path');

// Define task.
var task = function() {
	helper.watch(path.source.main + '*.*', task);

	return gulp.src(path.source.main + '*.*')
		.pipe($.plumber(helper.error))
		.pipe(gulp.dest(path.public.main))
		.pipe(helper.success(task.displayName));
};

task.description = 'Process common files.';

// Export task.
module.exports = task;
