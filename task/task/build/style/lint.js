// lint.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../../config');
var helper = require('../../../helper');
var path = require('../../../path');

// Define task.
var task = function() {
	helper.watch(path.source.style + '**/*.scss', task);

	return gulp.src(path.source.style + '**/*.scss')
		.pipe($.plumber(helper.error))
		.pipe($.sassLint())
		.pipe($.sassLint.format())
		.pipe(helper.success(task.displayName));
};

task.displayName = 'styles:lint';
task.description = 'Lint styles.';

// Export task.
module.exports = task;
