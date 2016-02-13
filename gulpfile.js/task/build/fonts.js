// fonts.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Define task.
var task = function() {
	helper.watch(path.source.font + '**/*.svg', task);

	return gulp.src(path.source.font + '**/*.svg')
		.pipe($.plumber(helper.error))
		.pipe($.iconfont(config.plugin.iconfont))
		.on('glyphs', function(glyphs) {
			gulp.src('gulpfile.js/template/font.scss')
				.pipe($.consolidate('lodash', {
					glyphs: glyphs,
					path: '../font/'
				}))
				.pipe(gulp.dest(path.source.style + '.tmp/'));
		})
		.pipe(gulp.dest(path.public.font))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'fonts';
task.description = 'Generate web-fonts.';

// Export task.
module.exports = task;
