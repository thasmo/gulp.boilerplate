// modernizr.js

var modernizr = require('modernizr');
var fs = require('fs');
var config = require('../../config');
var path = require('../../path');

// Define task.
var task = function(callback) {
	modernizr.build(config.task.setup.modernizr, function(result) {
		fs.writeFile(path.source.script + '.tmp/modernizr.js', result, function(error) {
			!error && callback();
		});
	});
};

task.displayName = 'setup:modernizr';
task.description = 'SETUP:MODERNIZR';

// Export task.
module.exports = task;
