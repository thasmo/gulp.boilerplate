// bower.js

var bower = require('bower');
var helper = require('../../helper.js');
var path = require('../../path.js');

// Define task.
var task = function(callback) {
	helper.watch(path.setup.bower, task);

	var options = {
		production: !!helper.cli.production,
		force: !!helper.cli.force
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

// Export task.
module.exports = task;
