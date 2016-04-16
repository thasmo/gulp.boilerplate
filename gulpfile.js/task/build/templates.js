// templates.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var include = require('require-dir');
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Define task.
var task = function() {
	helper.watch(path.source.template + '**/*.jade', task);

	return gulp.src(path.source.template + '*.jade')
		.pipe($.plumber(helper.error))
		.pipe($.data(function() {
			return include('../../../source/data/');
		}))
		.pipe($.jade(config.plugin.jade))
		.pipe($.if(helper.cli.optimize, $.htmlmin(config.plugin.htmlmin)))
		.pipe(gulp.dest(path.public.template))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'templates';
task.description = 'Compile jade templates.';

// Export task.
module.exports = task;
