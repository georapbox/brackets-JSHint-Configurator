#Changelog

### 1.1.6
- Japanese translation by [Norihito Nishioka](https://github.com/nishioka).

### 1.1.4
- UI updates to conform with Brackets v1.2.

### 1.1.3
- Support more robust JSHint inline options parsing. Credits to [Marko Dumic](https://github.com/mdumic).
- Fix styling issues.

### 1.1.2
- Add more options based on newest version of JSHint.

### 1.1.1
- Always display the icon in toolbar no matter file extension.
- Update toolbar icon.

### 1.1.0
- Add support to read from <code>.jshintrc</code> configuration file.

If there is a JSHint configuration file in project, the extension will read from it and populate the appropriate options.
If more than one configuration files, the extension will look up until it finds the first one, as it traverses the project's tree, from the directory of the current document until it reaches project's root.

**NOTE:** If directive is inserted in first line of current document, it will take precedence against the global options defined in <code>.jshintrc</code> configuration file.

### 1.0.2
- Fix "Extract to file" functionality due to deprecated method calls.

### 1.0.1
- Fix bug while loading external stylesheet.

### 1.0.0
- Initial release.