// templates.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	config = require('../config'),
	helper = require('../helper'),
	path = require('../path');

// Base
gulp.task('templates', ['templates:common']);

// Common
gulp.task('templates:common', function() {
	var name = 'Templates';

	return gulp.src(path.source.template + '*.jade')
		.pipe($.plumber(helper.error))
		.pipe($.jade(config.plugin.jade))
		.pipe($.if($.util.env.production, $.htmlmin(config.plugin.htmlmin)))
		.pipe(gulp.dest(path.public.template))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
