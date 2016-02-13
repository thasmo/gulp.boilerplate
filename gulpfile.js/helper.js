// helper.js

var gulp = require('gulp');
var notify = require('gulp-notify');
var env = require('minimist')(process.argv.slice(2));
var logger = require('gulplog');
var chalk = require('chalk');

module.exports = {
	env: env,
	logger: logger,
	notify: notify,

	error: notify.onError({
		title: '<%= error.plugin %>',
		message: '<%= error.message %>'
	}),

	success: function(task, message) {
		notify.logLevel(1);

		return notify({
			title: task,
			message: message || 'Task finished.',
			onLast: true
		});
	},

	watch: function(glob, task) {
		if(!env.watch && !env.w || gulp.lastRun(task)) {
			return;
		}

		gulp.watch(glob, task);

		logger.info(
			'Watching \'%s\' for \'%s\' ...',
			chalk.cyan(glob),
			chalk.cyan(task.name || task.displayName)
		);
	},

	values: function values(object) {
		return Object.keys(object).map(function(key) {
			return object[key];
		});
	}
};
