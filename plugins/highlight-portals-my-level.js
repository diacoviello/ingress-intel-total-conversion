// @author         vita10gy
// @name           Highlight portals by my level
// @category       Highlighter
// @version        0.2.3
// @description    Use the portal fill color to denote if the portal is either at and above, or at and below your level.

/* exported setup, changelog --eslint */

var changelog = [
  {
    version: '0.2.3',
    changes: ['Refactoring: fix eslint'],
  },
  {
    version: '0.2.2',
    changes: ['Version upgrade due to a change in the wrapper: plugin icons are now vectorized'],
  },
  {
    version: '0.2.1',
    changes: ['Version upgrade due to a change in the wrapper: added plugin icon'],
  },
];

function belowMyLevel(data) {
  colorLevel(true, data);
}

function aboveMyLevel(data) {
  colorLevel(false, data);
}

function colorLevel(below, data) {
  var portal_level = data.portal.options.level;

  // as portal levels can never be higher than L8, clamp the player level to this for highlight purposes
  var player_level = Math.min(window.PLAYER.level, 8);

  var opacity = 0.6;
  if ((below && portal_level <= player_level) || (!below && portal_level >= player_level)) {
    data.portal.setStyle({ fillColor: 'red', fillOpacity: opacity });
  }
}

function setup() {
  window.addPortalHighlighter('Below My Level', belowMyLevel);
  window.addPortalHighlighter('Above My Level', aboveMyLevel);
}
