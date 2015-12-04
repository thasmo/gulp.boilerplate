// optimize.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
//var critical = require('critical');
var config = require('../../config');
var helper = require('../../helper');
var path = require('../../path');

// Base
//gulp.task('optimize', function() {
//	return critical.generate({
//		base: path.public.main,
//		src: 'http://localhost:' + config.server.port || 3000,
//		dest: path.public.main + config.server.server.index,
//		inline: true,
//		width: 1920,
//		height: 1080
//	});
//});
