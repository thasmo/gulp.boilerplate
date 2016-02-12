// bower.js

var bower = require('bower');
var helper = require('../../helper');
var path = require('../../path');

// Define task.
var task = function(callback) {
	helper.watch(path.setup.bower, task);

	bower.commands.install().on('end', function() {
		bower.commands.update().on('end', function() {
			callback();
		});
	});
};

task.displayName = 'setup:bower';
task.description = 'Install Bower dependencies.';

// Export task.
module.exports = task;
