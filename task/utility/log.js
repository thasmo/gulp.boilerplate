// log.js

var log = require('gulplog');
var chalk = require('chalk');

module.exports = {
	watcher: function (name, glob) {
		log.info(
			'Watching \'%s\' for \'%s\'...',
			chalk.cyan(glob),
			chalk.cyan(name)
		);
	},
	error: function (error) {
		console.log(error);
		log.error(
			"'%s' in '%s' on line %s.",
			chalk.red(error.messageOriginal),
			chalk.red(error.relativePath),
			chalk.red(error.line)
		);
	}
};
