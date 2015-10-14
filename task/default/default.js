// default.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	sequence = require('run-sequence');

gulp.task('default', function(callback) {
	$.util.env.watch = true;
	sequence(['build', 'serve'], callback);
});
