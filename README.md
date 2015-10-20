# Gulp Boilerplate
> Personal gulp boilerplate for basic frontend web projects.

## Project Features
* jQuery
* Modernizr
* Picturefill
* Metaquery
* Velocity

## Build-Task Features
* Sass Suport
* Jade Support
* Image Optimization
* SVG-Sprite Generation
* WebP Generation
* Icon-Font Generation
* Bourbon Integration
* Browser-Sync Integration
* Auto-Prefixer Integration
* Source-Map Integration
* Resource Minification
* Notification Support

## Requirements
* node.js
* Python 2.7

## Browser Compatibility
* Evergreen Browsers
* IE 10+

## Tasks

Run the `default` task by executing `gulp`. Run specific tasks by executing `gulp <task>`.

- **default**  
  Runs the `build` and `serve` tasks and watches file changes by default.

- **build**  
  Runs the `reset` and `setup` tasks followed by the `common`, `templates`, `styles`, `scripts`, `images`, `icons` and `fonts` tasks.

- **serve**  
  Starts `browser-sync` which is serving files from the public directory.

- **setup**  
  Runs `bower install` to install dependencies defined in the `bower.json` file.
  
- **reset**  
  Cleans up the public directory by deleting all generated files.

- **common**  
  Copies general files from the source directory root to the public directory.

- **templates**  
  Compiles `jade` templates and writes them to the public directory.

- **styles**  
  Compiles `scss` files and writes them to the public directory.

- **scripts**  
  Processes `javascript` files and writes them to the public directory.

- **images**  
  Reads images from the images directory and copies them to the public directory.

- **icons**  
  Reads SVG files from the icons directory and generates a sprite including a `scss` file.

- **fonts**  
  Reads SVG files from the icons directory and generates an icon-font.
  
- **package**  
  Creates a ZIP file from files in the public directory.

- **optimize**  
  Creates critical CSS and injects it into the templates.

### Flags

- **watch**  
  Use the `--watch` flag on any task to enable file-watching and automatic re-run on changes.

- **optimize**  
  Use the `--optimize` flag on any task to enable optimizations for production output e.g. minification etc.

## License
[MIT License][license]

[license]: http://opensource.org/licenses/MIT
