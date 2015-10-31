// fonts.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Base
gulp.task('fonts', ['fonts:common']);

// Common
gulp.task('fonts:common', function() {
	var name = 'Fonts';

	gulp.watch(path.source.font + '**/*.svg', ['fonts:common']);

	return gulp.src(path.source.font + '**/*.svg')
		.pipe($.plumber(helper.error))
		.pipe($.iconfont(config.plugin.iconfont))
		.on('glyphs', function(glyphs) {
			gulp.src('task/template/font.scss')
				.pipe($.consolidate('lodash', {
					glyphs: glyphs,
					path: '../font/'
				}))
				.pipe(gulp.dest(path.source.style + '.tmp/'));
		})
		.pipe(gulp.dest(path.public.font))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
