// lint.js

var gulp = require('gulp');
var helper = require('../../../helper.js');
var path = require('../../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	sasslint: require('gulp-sass-lint')
};

// Define task.
var task = function() {
	helper.watch(path.source.style + '**/*.scss', task);

	return gulp.src(path.source.style + '**/*.scss')
		.pipe($.plumber(helper.error))
		.pipe($.sasslint())
		.pipe($.sasslint.format())
		.pipe(helper.success(task.displayName));
};

task.description = 'Lint styles.';

// Export task.
module.exports = task;
