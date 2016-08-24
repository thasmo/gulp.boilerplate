// reset.js

var del = require('del');
var path = require('../path.js');

// Define task.
var task = function() {
	return del(path.public.main + '*');
};

task.description = 'Delete all generated files.';

// Export task.
module.exports = task;
