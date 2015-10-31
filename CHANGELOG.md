# Change Log

## [next]

### Added
- Add packaging task.
- Add reset task to the build queue.

### Changed
- Update sanitize.css.
- Restructure task files.
- Use native bower object in the setup task.
- Use gulp-svgstore instead of gulp-svg-sprite.
- Update Modernizr to version 3.2.
- Make watching files more robust.

### Removed
- Remove SVG to PNG generation.
- Remove favicon generation.
- Remove coffeescript support.

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
