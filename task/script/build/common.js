// common.js

var gulp = require('gulp');
var helper = require('../../helper.js');
var path = require('../../path.js');
var $ = {
	plumber: require('gulp-plumber')
};

// Define task.
var task = function() {
	helper.watch(path.source.main + '*.*', task);

	return gulp.src(path.source.main + '*.*')
		.pipe($.plumber(helper.error))
		.pipe(gulp.dest(path.public.main))
		.pipe(helper.success(task.displayName));
};

task.description = 'Process common files.';

// Export task.
module.exports = task;
