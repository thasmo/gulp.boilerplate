// common.js

var gulp = require('gulp');
var utility = require('../../utility.js');
var path = require('../../path.js');
var $ = {
	plumber: require('gulp-plumber')
};

// Define task.
var task = function() {
	return gulp.src(path.source.main + '*.*')
		.pipe($.plumber(utility.error))
		.pipe(gulp.dest(path.public.main));
};

task.description = 'Process common files.';
task.watch = path.source.main + '*.*';

// Export task.
module.exports = task;
