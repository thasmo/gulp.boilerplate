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
	sass: require('gulp-sass'),
	autoprefixer: require('gulp-autoprefixer'),
	cssnano: require('gulp-cssnano')
};

// Define task.
var task = function() {
	return gulp.src(path.source.style + '*.scss')
		.pipe($.plumber(utility.error))
		.pipe($.sourcemaps.init())
			.pipe($.include())
			.pipe($.sass())
			.pipe($.autoprefixer())
			.pipe($.if(utility.cli.optimize, $.cssnano()))
		.pipe($.sourcemaps.write('.', config.plugin.sourcemaps.write))
		.pipe(gulp.dest(path.public.style));
};

task.description = 'Compile styles.';
task.watch = path.source.style + '**/*.scss';

// Export task.
module.exports = task;
