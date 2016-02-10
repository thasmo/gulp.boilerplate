// scripts.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var helper = require('../../../helper');
var path = require('../../../path');

// Define task.
var task = function() {

	helper.watch(
		path.source.script + 'vendor/*.js',
		gulp.task('scripts:vendor')
	);

	return gulp.src(path.source.script + 'vendor/*.js')
		.pipe($.plumber(helper.error))
		.pipe($.include())
		.pipe($.if($.util.env.optimize, $.uglify()))
		.pipe(gulp.dest(path.public.script + 'vendor/'))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'scripts:vendor';
task.description = 'Process vendor scripts.';

// Export task.
module.exports = task;
