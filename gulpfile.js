//////////////////////////////////////////////////

// Gulp
var gulp = require('gulp');

// Plugins
var $ = require('gulp-load-plugins')();

// Helpers
var stream = require('event-stream');

// CONFIGURATION /////////////////////////////////

var config = {
	plugin: {
		plumber: {
			errorHandler: error
		},
		recess: {
			strictPropertyOrder: false,
			prefixWhitespace: false
		},
		jshint: {

		},
		imagemin: {
			optimizationLevel: 7,
			progressive: true,
			interlaced: true,
			svgoPlugins: [
				{removeDoctype: false},
				{removeXMLProcInst: false}
			]
		},
		svgsprites: {
			className: '.icon-%f',
			cssFile: '../../style/sprite.css',
			svgPath: '../image/sprite/%f',
			pngPath: '../image/sprite/%f',
			svg: {
				sprite: 'sprite.svg',
				defs: 'sprite.svg'
			},
			padding: 1
		},
		bump: {
			type: ($.util.env.major && 'major') || ($.util.env.minor && 'minor') || 'patch'
		}
	}
};

// FUNCTIONS /////////////////////////////////////

// Error handler
function error(error) {
	console.log(error.toString());
	this.emit('end');
}

// TASKS /////////////////////////////////////////

// Styles
gulp.task('styles', function() {
	return gulp.src('application/static/style/*.scss')
		.pipe($.plumber(config.plugin.plumber))
		.pipe($.include())
		.pipe($.sass())
		.pipe($.util.env.production ? $.csso() : $.util.noop())
		.pipe(gulp.dest('public/static/style/'));
});

// Scripts
gulp.task('scripts', function() {
	var common = gulp.src('application/static/script/*.js')
		.pipe($.plumber(config.plugin.plumber))
		.pipe($.include())
		.pipe($.util.env.production ? $.uglify() : $.util.noop())
		.pipe(gulp.dest('public/static/script/'));

	var vendor = gulp.src('application/static/script/vendor/**/*.js')
		.pipe($.plumber(config.plugin.plumber))
		.pipe($.include())
		.pipe($.util.env.production ? $.uglify() : $.util.noop())
		.pipe(gulp.dest('public/static/script/vendor/'));

	return stream.merge(common, vendor);
});

// Images
gulp.task('images', function() {
	var common = gulp.src('application/static/image/common/**/*.{png,jpg,gif,svg}')
		.pipe($.plumber(config.plugin.plumber))
		.pipe($.changed('public/static/image/common/'))
		.pipe($.util.env.production ? $.imagemin(config.plugin.imagemin) : $.util.noop())
		.pipe(gulp.dest('public/static/image/common/'));

	var sprites = gulp.src('application/static/image/sprite/**/*.svg')
		.pipe($.plumber(config.plugin.plumber))
		.pipe($.util.env.production ? $.imagemin(config.plugin.imagemin) : $.util.noop())
		.pipe($.svgSprites.svg(config.plugin.svgsprites))
		.pipe(gulp.dest('public/static/image/sprite/'))
		.pipe($.svgSprites.png());

	return stream.merge(common, sprites);
});

// Fonts
gulp.task('fonts', function () {
	return gulp.src('application/static/font/**/*.{eot,ttf,woff,svg}')
		.pipe($.plumber(config.plugin.plumber))
		.pipe(gulp.dest('public/static/font/'));
});

// MAIN //////////////////////////////////////////

// Default
gulp.task('default', ['install', 'watch'], function() {
	return gulp.start('build');
});

// Install
gulp.task('install', function() {
	return $.bower();
});

// Build
gulp.task('build', ['styles', 'scripts', 'images', 'fonts']);

// Watch
gulp.task('watch', function() {
	var server = $.livereload();

	// Reload browser
	gulp.watch('public/static/**').on('change', function(file) {
		server.changed(file.path);
	});

	// Watch styles
	gulp.watch('application/static/style/**', ['styles']);

	// Watch scripts
	gulp.watch('application/static/script/**', ['scripts']);

	// Watch images
	gulp.watch('application/static/image/**', ['images']);

	// Watch fonts
	gulp.watch('application/static/font/**', ['fonts']);
});

// Release
gulp.task('release', ['clean'], function() {

	$.util.env.production = true;

	gulp.start('build', function(error) {
		if(!error) {
			gulp.src(['bower.json', 'package.json'])
				.pipe($.bump(config.plugin.bump))
				.pipe(gulp.dest('.'));
		}
	});
});

// Clean
gulp.task('clean', function() {
	return gulp.src('public/static/', {read: false})
		.pipe($.clean());
});
