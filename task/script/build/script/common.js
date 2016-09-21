// common.js

var gulp = require('gulp');
var config = require('../../../config.js');
var utility = require('../../../utility.js');
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
	return gulp.src([path.source.script + '*.js', '!' + path.source.script + 'vendor.js'])
		.pipe($.plumber(utility.error))
		.pipe($.sourcemaps.init())
			.pipe($.include())
			.pipe($.if(utility.cli.optimize, $.uglify()))
		.pipe($.sourcemaps.write('.', config.plugin.sourcemaps.write))
		.pipe(gulp.dest(path.public.script));
};

task.description = 'Process common scripts.';
task.watch = [path.source.script + '**/*.js', '!' + path.source.script + 'vendor.js'];

// Export task.
module.exports = task;
