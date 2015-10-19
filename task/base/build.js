// build.js

var gulp = require('gulp');
var sequence = require('run-sequence');
var include = require('require-dir');

gulp.task('build', function(callback) {
	sequence('reset', 'setup', Object.keys(include('build/')), callback);
});
