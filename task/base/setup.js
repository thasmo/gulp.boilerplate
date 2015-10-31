// setup.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bower = require('bower');
var path = require('../path');

// Base
gulp.task('setup', ['setup:bower']);

// Bower
gulp.task('setup:bower', function() {
	helper.watch(path.setup.bower, ['setup:bower']);
	return bower.commands.install();
});
