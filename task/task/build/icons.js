// icons.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var svgo = require('imagemin-svgo');
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Define task.
var task = function() {
	helper.watch(path.source.image + 'icon/**/*.svg', task);

	return gulp.src(path.source.image + 'icon/**/*.svg')
		.pipe($.plumber(helper.error))
		.pipe($.if(helper.cli.optimize, $.imagemin([svgo(config.plugin.svgo)])))
		.pipe($.svgstore())
		.pipe(gulp.dest(path.public.image))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'icons';
task.description = 'Generate an icon-sprite.';

// Export task.
module.exports = task;
