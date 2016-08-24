// convert.js

var gulp = require('gulp');
var config = require('../../../config.js');
var helper = require('../../../helper.js');
var path = require('../../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	changed: require('gulp-changed'),
	webp: require('gulp-webp')
};

// Define task.
var task = function() {
	helper.watch(path.source.image + '**/*.{png,jpg,gif}', task);

	return gulp.src(path.source.image + '**/*.{png,jpg,gif}')
		.pipe($.plumber(helper.error))
		.pipe($.changed(path.public.image))
		.pipe($.webp(config.plugin.webp))
		.pipe(gulp.dest(path.public.image))
		.pipe(helper.success(task.displayName));
};

task.description = 'Convert images to WebP.';

// Export task.
module.exports = task;
