// template.js

var gulp = require('gulp');
var utility = require('../../utility.js');

// Define task.
var task = (function() {
	var tasks = ['template:common'];

	// Skip linting on production.
	if (!utility.cli.production) {
		tasks.push('template:lint');
	}

	return gulp.parallel(utility.register(tasks));
})();

task.description = 'Run template-related tasks.';

// Export task.
module.exports = task;
