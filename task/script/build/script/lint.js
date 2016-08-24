// lint.js

var gulp = require('gulp');
var config = require('../../../config.js');
var helper = require('../../../helper.js');
var path = require('../../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	xo: require('gulp-xo')
};

// Define task.
var task = function() {
	helper.watch(path.source.script + '**/*.js', task);

	return gulp.src(path.source.script + '**/*.js')
		.pipe($.plumber(helper.error))
		.pipe($.xo(config.plugin.xo))
		.pipe(helper.success(task.displayName));
};

task.description = 'Lint common scripts.';

// Export task.
module.exports = task;
