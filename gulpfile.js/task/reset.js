// reset.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var path = require('../path');

// Base
gulp.task('reset', ['reset:public']);

// Public
gulp.task('reset:public', function() {
	return del(path.public.main + '*');
});
