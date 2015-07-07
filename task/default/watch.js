// watch.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	server = require('browser-sync'),
	config = require('../config'),
	path = require('../path');

gulp.task('watch', ['watch:tasks', 'watch:server']);

// Tasks
gulp.task('watch:tasks', function() {

	// Setup
	gulp.watch(path.setup.bower, ['setup:bower']);

	// Common
	gulp.watch(path.source.main + '*.*', ['common']);

	// Templates
	gulp.watch(path.source.template + '**', ['templates:common']);

	// Styles
	gulp.watch(path.source.style + '**', ['styles:common']);

	// Script
	gulp.watch(path.source.script + '*.js', ['scripts:common']);
	gulp.watch(path.source.script + 'vendor/**/*.js', ['scripts:vendor']);

	// Images
	gulp.watch(path.source.image + '*.{png,jpg,gif,svg}', ['images:common']);
	gulp.watch(path.source.image + 'appearance/application.png', ['images:application']);

	// Icons
	gulp.watch(path.source.image + 'icon/**/*.svg', ['icons:common']);

	// Fonts
	gulp.watch(path.source.font + '**/*.svg', ['fonts:common']);
});

// Server
gulp.task('watch:server', function() {
	server(config.plugin.server, function() {
		gulp.watch(path.public.main + '**').on('change', function(file) {
			if(!file.path.match(config.task.watch.exclude)) {
				server.reload(file.path);
			}
		});
	});
});
