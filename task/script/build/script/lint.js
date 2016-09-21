// lint.js

var gulp = require('gulp');
var config = require('../../../config.js');
var utility = require('../../../utility.js');
var path = require('../../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	xo: require('gulp-xo')
};

// Define task.
var task = function() {
	return gulp.src(path.source.script + '**/*.js')
		.pipe($.plumber(utility.error))
		.pipe($.xo(config.plugin.xo));
};

task.description = 'Lint common scripts.';
task.watch = path.source.script + '**/*.js';

// Export task.
module.exports = task;
