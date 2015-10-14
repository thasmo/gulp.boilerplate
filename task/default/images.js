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
	var name = 'Common Images',
		filter = $.filter('*.svg', {
			restore: true
		});

	if($.util.env.watch) {
		gulp.watch(path.source.image + 'common/**/*.{png,jpg,gif,svg}', ['images:common']);
	}

	return gulp.src(path.source.image + 'common/**/*.{png,jpg,gif,svg}')
		.pipe($.plumber(helper.error))
		.pipe($.changed(path.public.image))
		.pipe($.util.env.production ? $.imagemin(config.plugin.imagemin) : $.util.noop())
		.pipe(gulp.dest(path.public.image + 'common/'))
		.pipe(filter)
		.pipe($.svg2png())
		.pipe(gulp.dest(path.public.image + 'common/'))
		.pipe(filter.restore)
		.pipe($.webp())
		.pipe(gulp.dest(path.public.image + 'common/'))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});

// Application
gulp.task('images:application', function(callback) {

	if($.util.env.watch) {
		gulp.watch(path.source.image + 'appearance/application.png', ['images:application']);
	}

	favicons(config.plugin.favicons, function() {
		callback();
	});
});
