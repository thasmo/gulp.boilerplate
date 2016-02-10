// common.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var helper = require('../../helper');
var path = require('../../path');

// Define task.
var task = function() {
	var name = 'Common';

	helper.watch(path.source.main + '*.*', ['common']);

	return gulp.src(path.source.main + '*.*')
		.pipe($.plumber(helper.error))
		.pipe(gulp.dest(path.public.main))
		.pipe(helper.success(name));
};

task.displayName = 'common';
task.description = 'Process common files.';

// Export task.
module.exports = task;
