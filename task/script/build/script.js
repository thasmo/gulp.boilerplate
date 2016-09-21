// script.js

var gulp = require('gulp');
var utility = require('../../utility.js');

// Define task.
var task = (function() {
	var tasks = ['script:common', 'script:vendor'];

	// Skip linting on production.
	if (!utility.cli.production) {
		tasks.push('script:lint');
	}

	return gulp.parallel(utility.register(tasks));
})();

task.description = 'Run script-related tasks.';

// Export task.
module.exports = task;
