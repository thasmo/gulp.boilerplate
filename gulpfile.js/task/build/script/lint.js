// scripts.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../../config');
var helper = require('../../../helper');
var path = require('../../../path');

// Define task.
var task = function() {
	helper.watch([path.source.script + '**/*.js', '!' + path.source.script + 'vendor/**'], task);

	return gulp.src([path.source.script + '**/*.js', '!' + path.source.script + 'vendor/**'])
		.pipe($.plumber(helper.error))
		.pipe($.xo(config.plugin.xo))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'scripts:lint';
task.description = 'Lint common scripts.';

// Export task.
module.exports = task;
