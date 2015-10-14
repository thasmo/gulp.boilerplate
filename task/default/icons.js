// icons.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	config = require('../config'),
	helper = require('../helper'),
	path = require('../path');

// Base
gulp.task('icons', ['icons:common']);

// Common
gulp.task('icons:common', function() {
	var name = 'Icons';

	if($.util.env.watch) {
		gulp.watch(path.source.image + 'icon/**/*.svg', ['icons:common']);
	}

	return gulp.src(path.source.image + 'icon/**/*.svg')
		.pipe($.plumber(helper.error))
		.pipe($.if($.util.env.production, $.imagemin(config.plugin.imagemin)))
		.pipe($.svgSprite(config.plugin.svgsprite))
		.pipe(gulp.dest(path.public.image))
		.pipe($.filter('*.svg'))
		.pipe($.svg2png())
		.pipe($.if($.util.env.production, $.imagemin(config.plugin.imagemin)))
		.pipe(gulp.dest(path.public.image))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
