// icon.js

var gulp = require('gulp');
var svgo = require('imagemin-svgo');
var config = require('../../config.js');
var helper = require('../../helper.js');
var path = require('../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	if: require('gulp-if'),
	imagemin: require('gulp-imagemin'),
	svgstore: require('gulp-svgstore')
};

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

task.description = 'Generate an icon-sprite.';

// Export task.
module.exports = task;
