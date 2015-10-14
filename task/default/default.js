// default.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var sequence = require('run-sequence');

gulp.task('default', function(callback) {
	$.util.env.watch = true;
	sequence(['build', 'serve'], callback);
});
