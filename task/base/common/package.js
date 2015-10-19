// package.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Base
gulp.task('package', ['build'], function() {
	var name = 'Package';

	return gulp.src(path.public.main + '/**')
		.pipe($.plumber(helper.error))
		.pipe($.zip(config.task.package.name))
		.pipe(gulp.dest('.'))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
