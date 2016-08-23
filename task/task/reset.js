// reset.js

var gulp = require('gulp');
var del = require('del');
var path = require('../path');

// Define task.
var task = function() {
	return del(path.public.main + '*');
};

task.displayName = 'reset';
task.description = 'Delete all generated files.';

// Export task.
module.exports = task;
