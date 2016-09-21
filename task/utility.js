// utility.js

var cli = require('./utility/cli.js');
var notify = require('./utility/notify.js');
var log = require('./utility/log.js');
var register = require('./utility/register.js');

module.exports = {
	cli: cli,
	log: log,
	notify: notify,
	register: register,
	error: function(error) {
		log.error(error);
		notify.error('error', 'Error');
		this.emit && this.emit('end');
	}
};
