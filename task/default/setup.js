// setup.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

// Base
gulp.task('setup', ['setup:bower']);

// Bower
gulp.task('setup:bower', function() {
	return $.bower();
});
