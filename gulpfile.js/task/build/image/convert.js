// convert.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../../config');
var helper = require('../../../helper');
var path = require('../../../path');

// Define task.
var task = function() {
	helper.watch(path.source.image + 'common/**/*.{png,jpg,gif}', task);

	return gulp.src(path.source.image + 'common/**/*.{png,jpg,gif}')
		.pipe($.plumber(helper.error))
		.pipe($.changed(path.public.image))
		.pipe($.webp())
		.pipe(gulp.dest(path.public.image + 'common/'))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'images:convert';
task.description = 'Convert images to WebP.';

// Export task.
module.exports = task;
