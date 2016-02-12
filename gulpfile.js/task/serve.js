// serve.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var server = require('browser-sync');
var config = require('../config');
var path = require('../path');
var helper = require('../helper');

// Define task.
var task = function(callback) {
	server(config.plugin.server, function() {

		if(helper.env.watch || helper.env.w) {
			gulp.watch(path.public.main + '**').on('change', function(path) {
				if(!path.match(config.task.watch.exclude)) {
					server.reload(path);
				}
			});
		}

		callback();
	});
};

task.displayName = 'serve';
task.description = 'Launch a local web-server for development.';

// Export task.
module.exports = task;
