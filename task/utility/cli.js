// cli.js

var cli = require('commander');

// Set up CLI options.
module.exports = cli
	.option('-w, --watch', 'Watch files for changes and re-run tasks automatically.')
	.option('-o, --optimize', 'Optimize file-sizes by compressing/minifying output.')
	.option('-p, --production', 'Skip tasks which are irrelevant on production environments.')
	.option('-f, --force', 'Clean up everything before running tasks and disable all caches.')
	.parse(process.argv);
