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
	helper.watch(path.source.image + '**/*.{png,jpg,gif,svg}', task);

	return gulp.src(path.source.image + '**/*.{png,jpg,gif,svg}')
		.pipe($.plumber(helper.error))
		.pipe($.changed(path.public.image))
		.pipe($.if(helper.cli.optimize, $.imagemin([
			pngquant(config.plugin.pngquant),
			mozjpeg(config.plugin.mozjpeg),
			gifsicle(config.plugin.gifsicle),
			svgo(config.plugin.svgo)
		])))
		.pipe(gulp.dest(path.public.image))
		.pipe(helper.success(task.displayName));
};

task.displayName = 'images:common';
task.description = 'Process images.';

// Export task.
module.exports = task;
