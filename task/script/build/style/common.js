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
	sass: require('gulp-sass'),
	autoprefixer: require('gulp-autoprefixer'),
	cssnano: require('gulp-cssnano')
};

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

task.description = 'Compile styles.';

// Export task.
module.exports = task;
