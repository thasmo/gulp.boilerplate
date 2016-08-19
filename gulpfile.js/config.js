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

		pngquant: {
			quality: '50-80',
			speed: 1
		},

		mozjpeg: {
			quality: 80,
			progressive: true
		},

		webp: {
			quality: 80
		},

		gifsicle: {},

		svgo: {
			plugins: [
				{removeDoctype: false},
				{removeXMLProcInst: false}
			]
		},

		xo: {
			quiet: true
		},

		modernizr: {
			'classPrefix': 'has-',
			'options': [
				'setClasses'
			],
			'feature-detects': []
		},

		sourcemaps: {
			write: {
				sourceRoot: null
			}
		},

		server: {
			server: {
				baseDir: path.public.main
			},
			reloadDebounce: 250,
			online: true,
			logFileChanges: false
		}
	}
};
