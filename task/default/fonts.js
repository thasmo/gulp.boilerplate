// fonts.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	config = require('../config'),
	helper = require('../helper'),
	path = require('../path');

// Base
gulp.task('fonts', ['fonts:common']);

// Common
gulp.task('fonts:common', function() {
	var name = 'Fonts';

	return gulp.src(path.source.font + '**/*.svg')
		.pipe($.plumber(helper.error))
		.pipe($.iconfont(config.plugin.iconfont))
		.pipe(gulp.dest(path.public.font))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
