// setup.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('../path');

// Base
gulp.task('setup', ['setup:bower']);

// Bower
gulp.task('setup:bower', function() {

	if($.util.env.watch) {
		gulp.watch(path.setup.bower, ['setup:bower']);
	}

	return $.bower();
});
