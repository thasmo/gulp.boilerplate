// build.js

var gulp = require('gulp');
var utility = require('../utility.js');

// Register task.
var task = gulp.parallel(utility.register([
	'common',
	'template',
	'style',
	'script',
	'image',
	'icon'
]));

task.description = 'Run all build tasks.';

// Export task.
module.exports = task;
