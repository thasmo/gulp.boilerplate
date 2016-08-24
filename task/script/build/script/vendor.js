// vendor.js

var gulp = require('gulp');
var helper = require('../../../helper.js');
var path = require('../../../path.js');
var config = require('../../../config.js');
var $ = {
	plumber: require('gulp-plumber'),
	if: require('gulp-if'),
	include: require('gulp-include'),
	sourcemaps: require('gulp-sourcemaps'),
	concat: require('gulp-concat'),
	uglify: require('gulp-uglify'),
	modernizr: require('@thasmo/gulp-modernizr')
};

// Define task.
var task = function() {
	helper.watch(path.source.script + 'vendor.js', task);

	return gulp.src(path.source.script + 'vendor.js')
		.pipe($.plumber(helper.error))
		.pipe($.sourcemaps.init())
			.pipe($.include())
			.pipe($.modernizr(config.plugin.modernizr))
			.pipe($.concat('vendor.js'))
			.pipe($.if(helper.cli.optimize, $.uglify()))
		.pipe($.sourcemaps.write('.', config.plugin.sourcemaps.write))
		.pipe(gulp.dest(path.public.script))
		.pipe(helper.success(task.displayName));
};

task.description = 'Process vendor scripts.';

// Export task.
module.exports = task;
