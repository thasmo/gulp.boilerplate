# Gulp Boilerplate

Personal Gulp boilerplate for basic frontend web projects.

## Features
* SASS Support
* Jade Support
* Image Optimization
* SVG-Sprite Generation
* WebP Generation
* Icon-Font Generation
* Browser-Sync Integration
* Auto-Prefixer Integration
* Metaquery Integration
* Picturefill Integration
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
  Runs the `build` and the `watch` task.

- **build**  
  Runs the `common`, `templates`, `styles`, `scripts`, `images`, `icons` and `fonts` task.

- **setup**  
  Currently it only runs `bower install` to install dependencies defined in the `bower.json` file.
  
- **common**  
  Copies general files from within the root source directory to the public directory.

- **templates**  
  Compiles `jade` templates and writes them to the public template directory.

- **styles**  
  Compiles `scss` files and writes them to the public styles directory.

- **scripts**  
  Compiles `coffeescript` files and writes them to the public scripts directory.

- **images**  
  Reads images from the images directory and copies them to the public images directory.

- **icons**  
  Reads SVG files from the icons directory and generates a sprite including a `scss` file.

- **fonts**  
  Reads SVG files from the icons directory and generates an icon-font.

- **watch**  
  Starts `browser-sync` which is serving the public directory and it re-runs tasks when source files change.

### Flags

- **production**  
  Use `--production` with any task to enable optimizations for production output e.g. minification etc.
