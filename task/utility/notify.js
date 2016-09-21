// notify.js

var notifier = require('node-notifier');

module.exports = {
	success: function (title, message) {
		notifier.notify({
			title: title,
			message: message
		});
	},
	error: function (title, message) {
		notifier.notify({
			title: title,
			message: message
		});
	}
};
