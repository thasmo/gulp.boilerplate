// build.js

var gulp = require('gulp');

gulp.task('build', [
	'common',
	'templates',
	'styles',
	'scripts',
	'images',
	'icons',
	'fonts'
]);
