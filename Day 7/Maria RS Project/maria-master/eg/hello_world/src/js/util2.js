hello_world.trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');

};

hello_world.escapeHTML = function(str) {
    return str.replace('&', '&amp;').replace('<', '&lt;');
};