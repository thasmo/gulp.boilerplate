// icons.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

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
		.pipe($.if($.util.env.optimize, $.imagemin(config.plugin.imagemin)))
		.pipe($.svgstore())
		.pipe(gulp.dest(path.public.image))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
