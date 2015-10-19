// build.js

var gulp = require('gulp');
var sequence = require('run-sequence');
var include = require('require-dir');

// Base
gulp.task('build', ['build:prepare'], function() {
	return gulp.start('build:tasks');
});

// Prepare
gulp.task('build:prepare', function(callback) {
	sequence('reset', 'setup', callback);
});

// Tasks
gulp.task('build:tasks', function(callback) {
	sequence(Object.keys(include('build/')), callback);
});
