
// DEBUGGING TOOLS ///////////////////////////////////////////////////
// to be removed, currently preserving interface


window.debug = function() {}

var noop = function() {};
window.debug.renderDetails = noop;
window.debug.printStackTrace = noop;

window.debug.console = function() {}
window.debug.console.show = noop;
window.debug.console.create = noop;
window.debug.console.renderLine = noop;
window.debug.console.log = noop;
window.debug.console.warn = noop;
window.debug.console.error = noop;

window.debug.console.overwriteNative = noop;
window.debug.console.overwriteNativeIfRequired = noop;
