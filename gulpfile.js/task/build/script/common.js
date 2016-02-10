// scripts.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../../config');
var helper = require('../../../helper');
var path = require('../../../path');

// Define task.
var task = function() {

	helper.watch(
		path.source.script + '**/*.js',
		gulp.task('scripts:common')
	);

	return gulp.src(path.source.script + '*.js')
		.pipe($.plumber(helper.error))
		.pipe($.sourcemaps.init())
		.pipe($.include())
		.pipe($.jsvalidate())
		.pipe($.if($.util.env.optimize, $.uglify()))
		.pipe($.sourcemaps.write('.', config.plugin.sourcemaps.write))
		.pipe(gulp.dest(path.public.script))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'scripts:common';
task.description = 'Process common scripts.';

// Export task.
module.exports = task;
