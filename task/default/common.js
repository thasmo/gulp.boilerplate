// common.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	helper = require('../helper'),
	path = require('../path');

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
