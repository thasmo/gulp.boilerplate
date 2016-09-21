// register.js

var gulp = require('gulp');
var exists = require('file-exists');
var watch = require('../utility/watch.js');
var cli = require('../utility/cli.js');
var notify = require('../utility/notify.js');

module.exports = function (tasks) {
	var root = '../script/';

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

		if (exists(path, {root: __dirname})) {
			var task = require(path);
			task.displayName = name;

			var note = function() {
				if (cli.args.indexOf(name) == -1) {
					return;
				}

				notify.success(name, 'finished');
			};

			gulp.task(name, function(callback) {

				// Run actual task.
				var result = task(function() {
					note();
					callback();
				});

				// Create notification.
				if(result) {
					if (result.constructor.name == 'DestroyableTransform') {
						result.on('end', note);
					} else if (result.constructor.name == 'Promise') {
						result.then(note);
					}
				}

				// Register watcher.
				if (cli.watch) {
					watch(task);
				}

				return result;
			});
		}
	});

	return tasks;
};
