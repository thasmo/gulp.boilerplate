// vendor.js

var gulp = require('gulp');
var utility = require('../../../utility.js');
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
	return gulp.src(path.source.script + 'vendor.js')
		.pipe($.plumber(utility.error))
		.pipe($.sourcemaps.init())
			.pipe($.include())
			.pipe($.modernizr(config.plugin.modernizr))
			.pipe($.concat('vendor.js'))
			.pipe($.if(utility.cli.optimize, $.uglify()))
		.pipe($.sourcemaps.write('.', config.plugin.sourcemaps.write))
		.pipe(gulp.dest(path.public.script));
};

task.description = 'Process vendor scripts.';
task.watch = path.source.script + 'vendor.js';

// Export task.
module.exports = task;
