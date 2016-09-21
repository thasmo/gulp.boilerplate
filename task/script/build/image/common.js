// common.js

var gulp = require('gulp');
var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg');
var gifsicle = require('imagemin-gifsicle');
var svgo = require('imagemin-svgo');
var config = require('../../../config.js');
var utility = require('../../../utility.js');
var path = require('../../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	if: require('gulp-if'),
	changed: require('gulp-changed'),
	imagemin: require('gulp-imagemin')
};

// Define task.
var task = function() {
	return gulp.src(path.source.image + '**/*.{png,jpg,gif,svg}')
		.pipe($.plumber(utility.error))
		.pipe($.changed(path.public.image))
		.pipe($.if(utility.cli.optimize, $.imagemin([
			pngquant(config.plugin.pngquant),
			mozjpeg(config.plugin.mozjpeg),
			gifsicle(config.plugin.gifsicle),
			svgo(config.plugin.svgo)
		])))
		.pipe(gulp.dest(path.public.image));
};

task.description = 'Process images.';
task.watch = path.source.image + '**/*.{png,jpg,gif,svg}';

// Export task.
module.exports = task;
