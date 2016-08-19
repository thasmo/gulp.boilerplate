// templates.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var include = require('require-dir');
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Define task.
var task = function() {
	helper.watch(path.source.template + '**/*.pug', task);

	return gulp.src(path.source.template + '*.pug')
		.pipe($.plumber(helper.error))
		.pipe($.data(function() {
			return include('../../../source/data/');
		}))
		.pipe($.pug(config.plugin.pug))
		.pipe($.htmlhint('.htmlhintrc'))
		.pipe($.htmlhint.reporter())
		.pipe($.if(helper.cli.optimize, $.htmlmin(config.plugin.htmlmin)))
		.pipe(gulp.dest(path.public.template))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'templates';
task.description = 'Compile pug templates.';

// Export task.
module.exports = task;
