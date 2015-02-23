/*jshint browser: true, devel: true, jquery: true, node: true*/
/*global brackets, define*/
define(function (require, exports, module) {
    'use strict';

    var DocumentManager = brackets.getModule('document/DocumentManager'),
        ProjectManager = brackets.getModule('project/ProjectManager'),
		FileSystem = brackets.getModule('filesystem/FileSystem');

    /**
     * Reads ".jshintrc" config file.
     * Traverses the project's directory tree trying to find the config file.
     * If found, reads the contents of the file, generates the directive string and returns a promise.
     * The serach for the config file will continue until we reach the project's root.
     */
    function readConfig() {
		var deferred = new $.Deferred(),
            activeDocument = DocumentManager.getCurrentDocument(),
			currentPath = activeDocument.file._parentPath,
        	activeDocumentDir = FileSystem.getDirectoryForPath(currentPath),
			rootDir = ProjectManager.getProjectRoot(),

			filesArr = [],          // Holds the files names as we loop through.
			newPath,                // Holds the path to which we look up for the config file.
			jshintContent,          // Holds the contents of the ".jshintrc" file.
			directiveFromConfig;    // Holds the final directive string.

        /**
         * Loops through files of a directory looking for ".jshintrc" file.
         * @param dir {Object} The directory to loop through its contents.
         * @param callback {Function} A callback function to execute when finished.
         */
		function loopFiles(dir, callback) {
            // Loop dir's diles until we reach the project's root.
			if (dir._path !== rootDir._parentPath) {
                dir._contents.forEach(function (f) {
                    // Store files names in array for later use.
					filesArr.push(f._name);

                    // If filename is ".jshintrc", store its contents
                    // in a variable for later use.
					if (f._name === '.jshintrc') {
						jshintContent = f._contents;
					}
				});

                // Execute the callback function.
                if (typeof callback === 'function' && typeof callback !== 'undefined') {
				    callback(dir, callback);
                }
			}
		}

        // Loop through files beginning from the current document's
        // directory until we find ".jshintrc" configuration file.
		loopFiles(activeDocumentDir, function (dir, callback) {
			if (filesArr.indexOf('.jshintrc') === -1) {
				// File is not found, so continue lookup.
                filesArr = [];
				newPath = dir._parentPath;
				loopFiles(FileSystem.getDirectoryForPath(newPath), callback);
			} else {
                // File is found, so read its contents,
                // generate the JSHint directive
                // and return a promise.
				jshintContent = $.parseJSON(jshintContent);

				var directive = '/*jshint ';

				for (var prop in jshintContent) {
					if (jshintContent.hasOwnProperty(prop)) {
						directive += prop + ': ' + jshintContent[prop] + ', ';
					}
				}

				directive = directive.substring(0, directive.length - 2);
				directive += '*/';

				directiveFromConfig = directive;
                deferred.resolve(directiveFromConfig);
			}
		});

        return deferred.promise();
    }

    exports.getDirective = readConfig;
});