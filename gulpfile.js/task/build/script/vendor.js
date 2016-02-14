// vendor.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var helper = require('../../../helper');
var path = require('../../../path');
var config = require('../../../config');

// Define task.
var task = function() {
	helper.watch(path.source.script + 'vendor.js', task);

	return gulp.src(path.source.script + 'vendor.js')
		.pipe($.plumber(helper.error))
		.pipe($.include())
		.pipe($.thasmo.modernizr(config.plugin.modernizr))
		.pipe($.concat('vendor.js'))
		.pipe($.if(helper.cli.optimize, $.uglify()))
		.pipe(gulp.dest(path.public.script))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'scripts:vendor';
task.description = 'Process vendor scripts.';

// Export task.
module.exports = task;
