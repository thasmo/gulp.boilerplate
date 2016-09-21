// bower.js

var bower = require('bower');
var utility = require('../../utility.js');
var path = require('../../path.js');

// Define task.
var task = function(callback) {
	var options = {
		production: !!utility.cli.production,
		force: !!utility.cli.force
	};

	bower.commands.prune().on('end', function() {
		bower.commands.install(null, null, options).on('end', function() {
			bower.commands.update(null, null, options).on('end', function() {
				callback();
			});
		});
	});
};

task.description = 'Install Bower dependencies.';
task.watch = path.setup.bower;

// Export task.
module.exports = task;
