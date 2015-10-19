// build.js

var gulp = require('gulp');
var sequence = require('run-sequence');
var include = require('require-dir');

gulp.task('build', ['setup'], function(callback) {
	sequence(Object.keys(include('build/')), callback);
});
