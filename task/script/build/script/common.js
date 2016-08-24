// common.js

var gulp = require('gulp');
var config = require('../../../config.js');
var helper = require('../../../helper.js');
var path = require('../../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	if: require('gulp-if'),
	include: require('gulp-include'),
	sourcemaps: require('gulp-sourcemaps'),
	uglify: require('gulp-uglify')
};

// Define task.
var task = function() {
	helper.watch([path.source.script + '**/*.js', '!' + path.source.script + 'vendor.js'], task);

	return gulp.src([path.source.script + '*.js', '!' + path.source.script + 'vendor.js'])
		.pipe($.plumber(helper.error))
		.pipe($.sourcemaps.init())
			.pipe($.include())
			.pipe($.if(helper.cli.optimize, $.uglify()))
		.pipe($.sourcemaps.write('.', config.plugin.sourcemaps.write))
		.pipe(gulp.dest(path.public.script))
		.pipe(helper.success(task.displayName));
};

task.description = 'Process common scripts.';

// Export task.
module.exports = task;
