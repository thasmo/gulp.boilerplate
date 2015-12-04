// images.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Base
gulp.task('images', ['images:common']);

// Common
gulp.task('images:common', function() {
	var name = 'Images';

	helper.watch(path.source.image + 'common/**/*.{png,jpg,gif,svg}', ['images:common']);

	return gulp.src(path.source.image + 'common/**/*.{png,jpg,gif,svg}')
		.pipe($.plumber(helper.error))
		.pipe($.changed(path.public.image))
		.pipe($.if($.util.env.optimize, $.imagemin(config.plugin.imagemin)))
		.pipe(gulp.dest(path.public.image + 'common/'))
		.pipe($.filter('*.{png,jpg,gif}'))
		.pipe($.webp())
		.pipe(gulp.dest(path.public.image + 'common/'))
		.pipe(helper.success(name));
});
