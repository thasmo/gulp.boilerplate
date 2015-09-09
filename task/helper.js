// helper.js

var $ = require('gulp-load-plugins')();

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
	}
};
