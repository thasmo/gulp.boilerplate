// common.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg');
var gifsicle = require('imagemin-gifsicle');
var svgo = require('imagemin-svgo');
var config = require('../../../config');
var helper = require('../../../helper');
var path = require('../../../path');

// Define task.
var task = function() {
	helper.watch(path.source.image + 'common/**/*.{png,jpg,gif,svg}', task);

	return gulp.src(path.source.image + 'common/**/*.{png,jpg,gif,svg}')
		.pipe($.plumber(helper.error))
		.pipe($.changed(path.public.image))
		.pipe($.if(helper.cli.optimize, pngquant(config.plugin.pngquant)()))
		.pipe($.if(helper.cli.optimize, mozjpeg(config.plugin.mozjpeg)()))
		.pipe($.if(helper.cli.optimize, gifsicle(config.plugin.gifsicle)()))
		.pipe($.if(helper.cli.optimize, svgo(config.plugin.svgo)()))
		.pipe(gulp.dest(path.public.image + 'common/'))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'images:common';
task.description = 'Process images.';

// Export task.
module.exports = task;
