// serve.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	server = require('browser-sync'),
	config = require('../config'),
	path = require('../path');

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
