// setup.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bower = require('bower');
var modernizr = require('modernizr');
var fs = require('fs');
var config = require('../config');
var helper = require('../helper');
var path = require('../path');

// Base
gulp.task('setup', ['setup:bower', 'setup:modernizr']);

// Bower
gulp.task('setup:bower', function() {
	helper.watch(path.setup.bower, ['setup:bower']);
	return bower.commands.install();
});

// Modernizr
gulp.task('setup:modernizr', function(callback) {
	modernizr.build(config.task.setup.modernizr, function(result) {
		fs.writeFile(path.source.script + '.tmp/modernizr.js', result, function(error) {
			!error && callback();
		});
	});
});
