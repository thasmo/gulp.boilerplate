// config.js
var path = require('./path');

module.exports = {
	task: {
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

		svgsprite: {
			svg: {
				dimensionAttributes: false
			},
			shape: {
				id: {
					separator: '--'
				},
				spacing: {
					padding: 1
				}
			},
			mode: {
				view: {
					dest: '.',
					mixin: 'icon',
					prefix: '.icon-%s',
					sprite: '../image/icon.svg',
					dimensions: true,
					bust: false,
					render: {
						scss: {
							dest: '/' + path.source.style + 'tmp/_icon.scss',
							template: './task/template/icon.scss'
						}
					}
				}
			},
			variables: {
				png: function() {
					return function(sprite, render) {
						return render(sprite).split('.svg').join('.png');
					}
				}
			}
		},

		iconfont: {
			fontName: 'icons'
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
