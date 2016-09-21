// convert.js

var gulp = require('gulp');
var config = require('../../../config.js');
var utility = require('../../../utility.js');
var path = require('../../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	changed: require('gulp-changed'),
	webp: require('gulp-webp')
};

// Define task.
var task = function() {
	return gulp.src(path.source.image + '**/*.{png,jpg,gif}')
		.pipe($.plumber(utility.error))
		.pipe($.changed(path.public.image))
		.pipe($.webp(config.plugin.webp))
		.pipe(gulp.dest(path.public.image));
};

task.description = 'Convert images to WebP.';
task.watch = path.source.image + '**/*.{png,jpg,gif}';

// Export task.
module.exports = task;
