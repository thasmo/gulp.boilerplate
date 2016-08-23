// gulpfile.js

var gulp = require('gulp');
var include = require('require-dir');
var flatten = require('flat');
var forward = require('undertaker-forward-reference');

// Configure gulp.
gulp.registry(forward());

// Load tasks.
var tasks = flatten(include('task/task/', {
	recurse: true,
	duplicates: true
}));

// Register tasks.
Object.keys(tasks).map(function(key) {
	gulp.task(tasks[key]);
});
