// template.js

var gulp = require('gulp');
var include = require('require-dir');
var config = require('../../config.js');
var helper = require('../../helper.js');
var path = require('../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	if: require('gulp-if'),
	data: require('gulp-data'),
	pug: require('gulp-pug'),
	htmlhint: require('gulp-htmlhint'),
	htmlmin: require('gulp-htmlmin')
};

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

task.description = 'Compile pug templates.';

// Export task.
module.exports = task;
