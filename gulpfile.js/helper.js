// helper.js

var gulp = require('gulp');
var util = require('gulp-util');
var notify = require('gulp-notify');
var env = require('minimist')(process.argv.slice(2));
var logger = require('gulplog');

module.exports = {
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
			'Watching',
			'\'' + util.colors.cyan(glob) + '\'',
			'...'
		);
	}
};
