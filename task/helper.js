// helper.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var watch = {};

module.exports = {
	error: $.notify.onError({
		title: '<%= error.plugin %>',
		message: '<%= error.message %>'
	}),

	success: function (task, message) {
		$.notify.logLevel(1);

		return $.notify({
			title: task,
			message: message || 'Task finished.',
			onLast: true
		});
	},

	watch: function(glob, tasks) {
		if(!$.util.env.watch && !$.util.env.w || watch[glob]) {
			return;
		}

		watch[glob] = true;
		gulp.watch(glob, tasks);
	}
};
