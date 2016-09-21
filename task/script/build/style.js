// style.js

var gulp = require('gulp');
var utility = require('../../utility.js');

// Define task.
var task = (function() {
	var tasks = ['style:common'];

	// Skip linting on production.
	if (!utility.cli.production) {
		tasks.push('style:lint');
	}

	return gulp.parallel(utility.register(tasks));
})();

task.description = 'Run style-related tasks.';

// Export task.
module.exports = task;
