define(function (require, exports, module) {
    'use strict';
    
    var DocumentManager = brackets.getModule('document/DocumentManager'),
        FileUtils = brackets.getModule('file/FileUtils');
    
    /**    
     * Gets the file extension for the current document.    
     * @returns {String} fileExtension
     */
    function getFileExtension() {
        var activeDocument = DocumentManager.getCurrentDocument(),
            fileExtension = activeDocument ? FileUtils.getFileExtension(activeDocument.file.fullPath).toLowerCase() : '';
        
        return fileExtension;
    }
    
    exports.get = getFileExtension;
});