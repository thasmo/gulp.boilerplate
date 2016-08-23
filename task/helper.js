// helper.js

var gulp = require('gulp');
var notify = require('gulp-notify');
var cli = require('commander');
var logger = require('gulplog');
var chalk = require('chalk');
var exists = require('file-exists');

// Set up CLI options.
cli
	.option('-w, --watch', 'Watch files for changes and re-run tasks automatically.')
	.option('-o, --optimize', 'Optimize file-sizes by compressing/minifying output.')
	.option('-p, --production', 'Skip tasks which are irrelevant on production environments.')
	.option('-f, --force', 'Clean up everything before running tasks and disable all caches.')
	.parse(process.argv);

module.exports = {
	cli: cli,
	logger: logger,
	notify: notify,

	register: function (tasks) {
		var root = './script/';

		// Determine tasks to run.
		tasks = tasks || cli.args;
		tasks = (tasks.length) ? tasks : ['default'];

		// Process tasks.
		tasks.forEach(function (name) {
			var parts = name.split(':');
			var path = '';

			if (parts.length == 1) {
				path = root + parts[0] + '.js';

				if (!exists(path, {root: __dirname})) {
					path = root + 'build/' + parts[0] + '.js';
				}
			} else {
				path = root + parts[0] + '/' + parts[1] + '.js';

				if (!exists(path, {root: __dirname})) {
					path = root + 'build/' + parts[0] + '/' + parts[1] + '.js';
				}
			}

			var task = require(path);
			task.displayName = name;
			gulp.task(name, task);
		});

		return tasks;
	},

	error: notify.onError({
		title: '<%= error.plugin %>',
		message: '<%= error.message %>'
	}),

	success: function (task, message) {
		notify.logLevel(1);

		return notify({
			title: task,
			message: message || 'Task finished.',
			onLast: true
		});
	},

	watch: function (glob, task) {
		if (!cli.watch || gulp.lastRun(task)) {
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
		return Object.keys(object).map(function (key) {
			return object[key];
		});
	}
};
