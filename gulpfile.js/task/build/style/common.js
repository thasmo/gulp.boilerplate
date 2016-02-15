// common.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../../config');
var helper = require('../../../helper');
var path = require('../../../path');

// Define task.
var task = function() {
	helper.watch(path.source.style + '**/*.scss', task);

	return gulp.src(path.source.style + '*.scss')
		.pipe($.plumber(helper.error))
		.pipe($.sourcemaps.init())
			.pipe($.include())
			.pipe($.sass())
			.pipe($.autoprefixer())
			.pipe($.if(helper.cli.optimize, $.cssnano()))
		.pipe($.sourcemaps.write('.', config.plugin.sourcemaps.write))
		.pipe(gulp.dest(path.public.style))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'styles:common';
task.description = 'Compile styles.';

// Export task.
module.exports = task;
