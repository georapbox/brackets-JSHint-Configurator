JSHint Configurator
===================

[Brackets](http://brackets.io/) extension that enables configuration of [JSHint](http://www.jshint.com/) options.

**NOTE:** This extensions assumes you have a JSHint plugin installed.

#####Suggested JSHint plugins:
- @cfjedimaster's [brackets-jshint](https://github.com/cfjedimaster/brackets-jshint)
- @manchagnu's [Brackets-InteractiveLinter](https://github.com/MiguelCastillo/Brackets-InteractiveLinter)

## Installation

#### Git Clone
1. Under main menu select **Help > Show Extensions Folder**
2. Git clone this repository inside the folder user.

#### Extension Manager
1. Under main menu select **File > Extension Manager...**
2. Search for "JSHint Configurator"
3. Click "Install"


## How to use

Under main menu select **Edit > JSHint Configurator** or use the shortcut **"CTRL+ALT+Shift+J"** to open the JSHint Configurator dialog.

![Screenshot 1](https://github.com/georapbox/brackets-JSHint-Configurator/blob/master/screenshots/screen-1.png)

Check the desired options, click the **'Insert directive to document'** button... and Voila!

![Screenshot 2](https://github.com/georapbox/brackets-JSHint-Configurator/blob/master/screenshots/screen-2.png)

**Hint:** The configurator always inserts the JSHint directive in the first line of the document. Therefore, every time the dialog opens, it checks if the first line of the document has a JSHint directive and populates the appropriate options.

##Changelog

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