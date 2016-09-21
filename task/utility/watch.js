// watch.js

var gulp = require('gulp');
var log = require('./log.js');

module.exports = function (task) {
	var glob = task.watch;
	var name = task.name || task.displayName;

	// Skip if no glob was defined.
	if (!glob) {
		return;
	}

	// Add Gulp watcher.
	var watcher = gulp.watch(glob, task);

	// Log to console.
	log.watcher(name, glob);

	// Return watcher.
	return watcher;
};
