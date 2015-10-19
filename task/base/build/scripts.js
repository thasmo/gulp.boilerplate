// scripts.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Base
gulp.task('scripts', ['scripts:lint', 'scripts:common', 'scripts:vendor']);

// Lint
gulp.task('scripts:lint', function() {
	var name = 'Lint Scripts';

	if($.util.env.watch) {
		gulp.watch([path.source.script + '**/*.js', '!' + path.source.script + 'vendor/**'], ['scripts:lint']);
	}

	return gulp.src([path.source.script + '**/*.js', '!' + path.source.script + 'vendor/**'])
		.pipe($.plumber(helper.error))
		.pipe($.xo(config.plugin.xo))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});

// Common
gulp.task('scripts:common', function() {
	var name = 'Common Scripts';

	if($.util.env.watch) {
		gulp.watch(path.source.script + '**/*.js', ['scripts:common']);
	}

	return gulp.src(path.source.script + '*.js')
		.pipe($.plumber(helper.error))
		.pipe($.sourcemaps.init())
		.pipe($.include())
		.pipe($.jsvalidate())
		.pipe($.if($.util.env.optimize, $.uglify()))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(path.public.script))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});

// Vendor
gulp.task('scripts:vendor', function() {
	var name = 'Vendor Scripts';

	if($.util.env.watch) {
		gulp.watch(path.source.script + 'vendor/*.js', ['scripts:vendor']);
	}

	return gulp.src(path.source.script + 'vendor/*.js')
		.pipe($.plumber(helper.error))
		.pipe($.include())
		.pipe($.if($.util.env.optimize, $.uglify()))
		.pipe(gulp.dest(path.public.script + 'vendor/'))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
