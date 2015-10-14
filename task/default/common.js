// common.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var helper = require('../helper');
var path = require('../path');

// Base
gulp.task('common', function() {
	var name = 'Common';

	if($.util.env.watch) {
		gulp.watch(path.source.main + '*.*', ['common']);
	}

	return gulp.src(path.source.main + '*.*')
		.pipe($.plumber(helper.error))
		.pipe(gulp.dest(path.public.main))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
