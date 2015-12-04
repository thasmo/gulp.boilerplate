// templates.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Base
gulp.task('templates', ['templates:common']);

// Common
gulp.task('templates:common', function() {
	var name = 'Templates';

	helper.watch(path.source.template + '**/*.jade', ['templates:common']);

	return gulp.src(path.source.template + '*.jade')
		.pipe($.plumber(helper.error))
		.pipe($.jade(config.plugin.jade))
		.pipe($.if($.util.env.optimize, $.htmlmin(config.plugin.htmlmin)))
		.pipe(gulp.dest(path.public.template))
		.pipe(helper.success(name));
});
