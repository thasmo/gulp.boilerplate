// images.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	favicons = require('favicons'),
	config = require('../config'),
	helper = require('../helper'),
	path = require('../path');

// Base
gulp.task('images', ['images:common', 'images:application']);

// Common
gulp.task('images:common', function() {
	var name = 'Common Images';

	return gulp.src(path.source.image + '*.{png,jpg,gif,svg}')
		.pipe($.plumber(helper.error))
		.pipe($.changed(path.public.image))
		.pipe($.util.env.production ? $.imagemin(config.plugin.imagemin) : $.util.noop())
		.pipe(gulp.dest(path.public.image))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});

// Application
gulp.task('images:application', function(callback) {
	favicons(config.plugin.favicons, function() {
		callback();
	});
});
