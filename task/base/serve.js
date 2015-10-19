// serve.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var server = require('browser-sync');
var config = require('../config');
var path = require('../path');

gulp.task('serve', ['serve:common']);

// Common
gulp.task('serve:common', function(callback) {
	server(config.plugin.server, function() {

		if($.util.env.watch) {
			gulp.watch(path.public.main + '**').on('change', function(file) {
				if(!file.path.match(config.task.watch.exclude)) {
					server.reload(file.path);
				}
			});
		}

		callback();
	});
});
