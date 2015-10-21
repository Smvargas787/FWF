//Create a checkit/src/js/util.js file where we’ll add utility
// functions that we’ll write as we find needs for them.

hello_world.trim = function(str) {
    return str.replace(/^\s+|\s+$/g, '');
};

hello_world.escapeHTML = function(str) {
    return str.replace('&', '&amp;').replace('<', '&lt;');
};