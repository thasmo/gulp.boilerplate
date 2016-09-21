// lint.js

var gulp = require('gulp');
var utility = require('../../../utility.js');
var path = require('../../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	puglint: require('gulp-pug-lint')
};

// Define task.
var task = function() {
	return gulp.src(path.source.template + '**/*.pug')
		.pipe($.plumber(utility.error))
		.pipe($.puglint())
};

task.description = 'Lint templates.';
task.watch = path.source.template + '**/*.pug';

// Export task.
module.exports = task;
