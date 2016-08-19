# Change Log

## [next]

### Added
- Add packaging task.
- Add reset task to the build queue.
- Log file-watching to the console.
- Add data-sources for use in templates.
- Add source-map generation for vendor scripts.

### Changed
- Update to Gulp 4.
- Update sanitize.css.
- Update jQuery.
- Restructure task files.
- Use native bower object in the setup task.
- Use gulp-svgstore instead of gulp-svg-sprite.
- Refactor Modernizr integration to support custom builds.
- Make watching files more robust.
- Refactor and enhance image-optimization task.
- Enhance CLI argument usage.

### Removed
- Remove SVG to PNG conversion.
- Remove favicon generation.
- Remove coffeescript support.
- Remove the gulp-duration plugin.
- Remove html5shiv support.
- Remove icon-font generation.

## [0.2.1] - 2015-10-14

### Fixed
- Fixed var declaration in the build task.

## [0.2.0] - 2015-10-14

### Added
- Support for webp images.
- Integrate metaquery.
- Integrate picturefill.
- Integrate eslint via XO.

### Changed
- Swap csso for cssnano.
- Don't log notify success messages.
- Optimize gulp task run order.
- Use the `watch` flag instead of a separate task.
- Rename `production` flag to `optimize`.

### Fixed
- Include vendor.js file.
- Use correct bower task name.

## 0.1.0 - 2015-04-17

### Added
- Lots of good stuff.

[next]: https://github.com/thasmo/gulp.boilerplate/compare/v0.2.1...HEAD
[0.2.1]: https://github.com/thasmo/gulp.boilerplate/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/thasmo/gulp.boilerplate/compare/v0.1.0...v0.2.0
