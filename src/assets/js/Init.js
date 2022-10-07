// urlParams is null when used for embedding
window.urlParams = window.urlParams || {};

// isLocalStorage controls access to local storage
window.isLocalStorage = window.isLocalStorage || false;

// Public global variables
window.DOM_PURIFY_CONFIG = window.DOM_PURIFY_CONFIG ||
{
    ADD_TAGS: ['use'], FORBID_TAGS: ['form'],
    ALLOWED_URI_REGEXP: /^((?!javascript:).)*$/i,
    ADD_ATTR: ['target', 'content']
};

// Public global variables
window.MAX_REQUEST_SIZE = window.MAX_REQUEST_SIZE || 10485760;
window.MAX_AREA = window.MAX_AREA || 15000 * 15000;

// URLs for save and export
window.EXPORT_URL = window.EXPORT_URL || '/export';
window.SAVE_URL = window.SAVE_URL || '/save';
window.OPEN_URL = window.OPEN_URL || '/assets/open';
window.RESOURCES_PATH = window.RESOURCES_PATH || '/assets/resources';
window.RESOURCE_BASE = window.RESOURCE_BASE || window.RESOURCES_PATH + '/grapheditor';
window.STENCIL_PATH = window.STENCIL_PATH || '/assets/stencils';
window.IMAGE_PATH = window.IMAGE_PATH || '/assets/images';
window.STYLE_PATH = window.STYLE_PATH || '/assets/styles';
window.CSS_PATH = window.CSS_PATH || '/assets/styles';
window.OPEN_FORM = window.OPEN_FORM || '/assets/open.html';

// Sets the base path, the UI language via URL param and configures the
// supported languages to avoid 404s. The loading of all core language
// resources is disabled as all required resources are in grapheditor.
// properties. Note that in this example the loading of two resource
// files (the special bundle and the default bundle) is disabled to
// save a GET request. This requires that all resources be present in
// each properties file since only one file is loaded.


window.mxBasePath = window.mxBasePath || '/assets/mxgraph';
window.mxLanguage = window.mxLanguage || urlParams['lang'];
window.mxLanguages = window.mxLanguages || ['de'];

/**
 * Returns the global UI setting before running static draw.io code
 */
window.uiTheme = window.uiTheme || (function () {
    var ui = urlParams['ui'];

    //Use Sketch theme for MS Teams (and any future extAuth) by default
    if (urlParams['extAuth'] == '1') {
        ui = 'sketch';
    }

    // Known issue: No JSON object at this point in quirks in IE8
    if (ui == null && isLocalStorage && typeof JSON !== 'undefined' && urlParams['lightbox'] != '1') {
        try {
            var value = localStorage.getItem('.drawio-config');

            if (value != null) {
                ui = JSON.parse(value).ui || null;
            }
        }
        catch (e) {
            // cookies are disabled, attempts to use local storage will cause
            // a DOM error at a minimum on Chrome
            isLocalStorage = false;
        }
    }

    // Uses minimal theme on small screens
    try {
        if (ui == null) {
            var iw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            if (iw <= 768) {
                if (urlParams['pages'] == null) {
                    urlParams['pages'] = '1';
                }

                ui = 'sketch';
            }
        }
    }
    catch (e) {
        // ignore
    }

    // Redirects sketch UI to min UI with sketch URL parameter
    if (ui == 'sketch') {
        urlParams['sketch'] = '1';
        ui = 'min';
    }
    else if (urlParams['dark'] == '1' && (ui == '' || ui == 'kennedy')) {
        ui = 'dark';
    }

    return ui;
})();
