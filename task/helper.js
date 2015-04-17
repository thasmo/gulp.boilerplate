// helper.js

var $ = require('gulp-load-plugins')();

module.exports = {
	error: $.notify.onError({
		title: '<%= error.plugin %>',
		message: '<%= error.message %>'
	}),

	success: function (task, message) {
		return $.notify({
			title: task,
			message: message || 'Task finished.',
			onLast: true
		});
	}
};
