// scripts.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	config = require('../config'),
	helper = require('../helper'),
	path = require('../path');

// Base
gulp.task('scripts', ['scripts:lint', 'scripts:common', 'scripts:vendor']);

// Lint
gulp.task('scripts:lint', function() {
	var name = 'Lint Scripts';

	return gulp.src([path.source.script + '**/*.js', '!' + path.source.script + 'vendor/**'])
		.pipe($.plumber(helper.error))
		.pipe($.xo(config.plugin.xo))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});

// Common
gulp.task('scripts:common', function() {
	var name = 'Common Scripts';

	return gulp.src(path.source.script + '*.{js,coffee}')
		.pipe($.plumber(helper.error))
		.pipe($.sourcemaps.init())
		.pipe($.include())
		.pipe($.if(/\.coffee$/, $.coffee()))
		.pipe($.jsvalidate())
		.pipe($.if($.util.env.production, $.uglify()))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(path.public.script))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});

// Vendor
gulp.task('scripts:vendor', function() {
	var name = 'Vendor Scripts';

	return gulp.src(path.source.script + 'vendor/**/*.js')
		.pipe($.plumber(helper.error))
		.pipe($.include())
		.pipe($.if($.util.env.production, $.uglify()))
		.pipe(gulp.dest(path.public.script + 'vendor/'))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
