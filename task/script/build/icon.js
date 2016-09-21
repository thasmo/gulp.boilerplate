// icon.js

var gulp = require('gulp');
var svgo = require('imagemin-svgo');
var config = require('../../config.js');
var utility = require('../../utility.js');
var path = require('../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	if: require('gulp-if'),
	imagemin: require('gulp-imagemin'),
	svgstore: require('gulp-svgstore')
};

// Define task.
var task = function() {
	return gulp.src(path.source.image + 'icon/**/*.svg')
		.pipe($.plumber(utility.error))
		.pipe($.if(utility.cli.optimize, $.imagemin([svgo(config.plugin.svgo)])))
		.pipe($.svgstore())
		.pipe(gulp.dest(path.public.image));
};

task.description = 'Generate an icon-sprite.';
task.watch = path.source.image + 'icon/**/*.svg';

// Export task.
module.exports = task;
