define(function (require, exports, module) {
    'use strict';
    
    var AppInit = brackets.getModule('utils/AppInit'),
        DocumentManager = brackets.getModule('document/DocumentManager'),
        CommandManager = brackets.getModule('command/CommandManager'),
        Menus = brackets.getModule('command/Menus'),
        ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        Strings = require('strings'),
        JSHINT_CMD_ID = 'georapbox.jshint.configurator',
        toolbarIcon = $('<a title="' + Strings.DIALOG_TITLE + '" id="georapbox-jshint-config-icon"></a>'),
        OptionsDialog = require('services/options'),
        FileExtension = require('services/file_extension');

	/**
	 * Toggles visibility of toobar icon depending on
	 * the current file's extension.
	 */
	function toggleIconVisibility() {
        if (FileExtension.get() === 'js') {
			toolbarIcon.show();
		} else {
			toolbarIcon.hide();
		}
	}

    // App Ready
    AppInit.appReady(function () {
        // Load external stylesheets.
        ExtensionUtils.loadStyleSheet(module, 'css/georapbox-jshint.css');

        var editMenu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
        
        CommandManager.register(Strings.COMMAND_NAME, JSHINT_CMD_ID, OptionsDialog.show);
        editMenu.addMenuItem(JSHINT_CMD_ID, 'Ctrl-Alt-Shift-J');

        toolbarIcon.on('click', OptionsDialog.show).
            appendTo('#main-toolbar .buttons');

        toggleIconVisibility();

        $(DocumentManager).on('currentDocumentChange', toggleIconVisibility);
    });
});
