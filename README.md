# Gulp Boilerplate
> Personal Gulp boilerplate for basic frontend web projects.

[![GitHub Release](https://img.shields.io/github/release/thasmo/gulp.boilerplate.svg)](https://github.com/thasmo/gulp.boilerplate/releases/latest)
[![License](https://img.shields.io/github/license/thasmo/gulp.boilerplate.svg)](https://github.com/thasmo/gulp.boilerplate/blob/develop/LICENSE.md)

---

## Project Features
- jQuery
- Modernizr
- Picturefill
- Metaquery
- Velocity

## Build-Task Features
- Sass Suport
- Pug Support
- Image Optimization
- SVG-Sprite Generation
- WebP Generation
- Bourbon Integration
- Browser-Sync Integration
- Auto-Prefixer Integration
- Source-Map Integration
- Resource Minification
- Notification Support

## Browser Compatibility
- Evergreen Browsers
- IE 10+

## Tasks

Run the `default` task by executing `gulp`. Run specific tasks by executing `gulp <task>`.

- **default**  
  Runs the `reset`, `setup`, `build` and `serve` tasks.

- **build**  
  Runs the `common`, `templates`, `styles`, `scripts`, `images` and `icons` tasks.

- **serve**  
  Starts `browser-sync` which is serving files from the public directory.

- **setup**  
  Runs `bower install` to install dependencies defined in the `bower.json` file.
  
- **reset**  
  Cleans up the public directory by deleting all generated files.

- **common**  
  Copies general files from the source directory root to the public directory.

- **template**  
  Compiles `pug` templates and writes them to the public directory.

- **style**  
  Compiles `scss` files and writes them to the public directory.

- **script**  
  Processes `javascript` files and writes them to the public directory.

- **image**  
  Reads images from the images directory and copies them to the public directory.

- **icon**  
  Reads SVG files from the icons directory and generates a sprite including a `scss` file.

- **package**  
  Creates a ZIP file from files in the public directory.

### Flags

- **watch**  
  Use the `-w` or `--watch` flag on any task to enable file-watching and automatic re-run on changes.

- **optimize**  
  Use the `-o` or `--optimize` flag on any task to enable optimizations for production output e.g. minification etc.

- **force**  
  Use the `-f` or `--force` flag on any task to force it running without using caches.

- **production**  
  Use the `-p` or `--production` flag on any task to skip tasks which are irrelevant on production environments.

---

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
