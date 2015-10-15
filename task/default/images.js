// images.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');
var helper = require('../helper');
var path = require('../path');

// Base
gulp.task('images', ['images:common']);

// Common
gulp.task('images:common', function() {
	var name = 'Common Images';

	if($.util.env.watch) {
		gulp.watch(path.source.image + 'common/**/*.{png,jpg,gif,svg}', ['images:common']);
	}

	return gulp.src(path.source.image + 'common/**/*.{png,jpg,gif,svg}')
		.pipe($.plumber(helper.error))
		.pipe($.changed(path.public.image))
		.pipe($.util.env.optimize ? $.imagemin(config.plugin.imagemin) : $.util.noop())
		.pipe(gulp.dest(path.public.image + 'common/'))
		.pipe($.filter('*.{png,jpg,gif}'))
		.pipe($.webp())
		.pipe(gulp.dest(path.public.image + 'common/'))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
