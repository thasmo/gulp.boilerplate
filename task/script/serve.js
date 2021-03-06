// serve.js

var gulp = require('gulp');
var server = require('browser-sync');
var config = require('../config.js');
var path = require('../path.js');
var utility = require('../utility.js');

// Define task.
var task = function(callback) {
	server(config.plugin.server, function() {
		if(utility.cli.watch) {
			gulp.watch(path.public.main + '**').on('change', function(path) {
				if(!path.match(config.task.watch.exclude)) {
					server.reload(path);
				}
			});
		}

		callback();
	});
};

task.description = 'Launch a local web-server for development.';

// Export task.
module.exports = task;
