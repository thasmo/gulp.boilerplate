// common.js

var gulp = require('gulp');
var include = require('require-dir');
var config = require('../../../config.js');
var utility = require('../../../utility.js');
var path = require('../../../path.js');
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
	return gulp.src(path.source.template + '*.pug')
		.pipe($.plumber(utility.error))
		.pipe($.data(function() {
			return include('../../../../source/data/');
		}))
		.pipe($.pug(config.plugin.pug))
		.pipe($.htmlhint('.htmlhintrc'))
		.pipe($.htmlhint.reporter())
		.pipe($.if(utility.cli.optimize, $.htmlmin(config.plugin.htmlmin)))
		.pipe(gulp.dest(path.public.template));
};

task.description = 'Compile pug templates.';
task.watch = path.source.template + '**/*.pug';

// Export task.
module.exports = task;
