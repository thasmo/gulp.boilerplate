// config.js

var path = require('./path');

module.exports = {
	task: {
		package: {
			name: 'build.zip'
		},
		watch: {
			exclude: /\.map$/
		}
	},

	plugin: {
		jade: {
			pretty: '\t'
		},

		htmlmin: {
			removeComments: true,
			removeCommentsFromCDATA: true,
			removeCDATASectionsFromCDATA: true,
			collapseWhitespace: true
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

		xo: {
			quiet: true
		},

		iconfont: {
			fontName: 'icons',
			formats: ['woff', 'woff2']
		},

		favicons: {
			files: {
				src: path.source.image + 'appearance/application.png',
				dest: path.public.static,
				iconsPath: '/static/'
			},
			settings: {
				appName: 'gulp.js Boilerplate',
				appDescription: 'Personal boilerplate for gulp.js projects.',
				background: '#f16529'
			}
		},

		server: {
			server: {
				baseDir: path.public.main
			},
			reloadDebounce: 250,
			online: true
		}
	}
};
