/* global log -- eslint */

/**
 * @file Decode the on-network array entity format into an object format closer to that used before
 * makes much more sense as an object, means that existing code didn't need to change, and it's what the
 * stock intel site does internally too (the array format is only on the network)
 *
 * @module entity_decode
 */

/**
 * @namespace window.decodeArray
 */
window.decodeArray = function () {};

/**
 * Parses a mod array into an object.
 *
 * @function parseMod
 * @param {Array} arr - The mod array.
 * @returns {Object|null} Parsed mod object or null if the input is falsy.
 */
function parseMod(arr) {
  if (!arr) {
    return null;
  }
  return {
    owner: arr[0],
    name: arr[1],
    rarity: arr[2],
    stats: arr[3],
  };
}

/**
 * Parses a resonator array into an object.
 *
 * @function parseResonator
 * @param {Array} arr - The resonator array.
 * @returns {Object|null} Parsed resonator object or null if the input is falsy.
 */
function parseResonator(arr) {
  if (!arr) {
    return null;
  }
  return {
    owner: arr[0],
    level: arr[1],
    energy: arr[2],
  };
}

/**
 * Parses an artifact brief array into an object.
 * @function parseArtifactBrief
 * @param {Array} arr - The artifact brief array.
 * @returns {Object|null} Parsed artifact brief object or null if the input is falsy.
 */
function parseArtifactBrief(arr) {
  if (!arr) {
    return null;
  }

  // array index 0 is for fragments at the portal. index 1 is for target portals
  // each of those is two dimensional - not sure why. part of this is to allow for multiple types of artifacts,
  // with their own targets, active at once - but one level for the array is enough for that

  // making a guess - first level is for different artifact types, second index would allow for
  // extra data for that artifact type

  function decodeArtifactArray(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
      // we'll use the type as the key - and store any additional array values as the value
      // that will be an empty array for now, so only object keys are useful data
      result[arr[i][0]] = arr[i].slice(1);
    }
    return result;
  }

  return {
    fragment: decodeArtifactArray(arr[0]),
    target: decodeArtifactArray(arr[1]),
  };
}

/**
 * Parses an artifact detail array into an object.
 *
 * @function parseArtifactDetail
 * @param {Array} arr - The artifact detail array.
 * @returns {Object|null} Parsed artifact detail object or null if the input is falsy.
 */
function parseArtifactDetail(arr) {
  if (!arr) {
    return null;
  }
  // empty artifact data is pointless - ignore it
  if (arr.length === 3 && arr[0] === '' && arr[1] === '' && arr[2].length === 0) {
    return null;
  }
  return {
    type: arr[0],
    displayName: arr[1],
    fragments: arr[2],
  };
}

/**
 * Parses a history detail bit array into an object.
 *
 * @function parseHistoryDetail
 * @param {number} bitarray - The history detail bit array.
 * @returns {Object} Parsed history detail object.
 */
function parseHistoryDetail(bitarray) {
  return {
    _raw: bitarray,
    visited: !!(bitarray & 1),
    captured: !!(bitarray & 2),
    scoutControlled: !!(bitarray & 4),
  };
}

// there's also a 'placeholder' portal - generated from the data in links/fields. only has team/lat/lng

var CORE_PORTAL_DATA_LENGTH = 4;

/**
 * Parses the core portal data from an array.
 *
 * @function corePortalData
 * @param {Array} a - The portal data array.
 * @returns {Object} An object containing the core data of a portal.
 */
function corePortalData(a) {
  return {
    // a[0] == type (always 'p')
    team: a[1],
    latE6: a[2],
    lngE6: a[3],
  };
}

var SUMMARY_PORTAL_DATA_LENGTH = 14;
var DETAILED_PORTAL_DATA_LENGTH = SUMMARY_PORTAL_DATA_LENGTH + 4;
var EXTENDED_PORTAL_DATA_LENGTH = DETAILED_PORTAL_DATA_LENGTH + 1;

/**
 * Parses the summary portal data from an array.
 *
 * @function summaryPortalData
 * @param {Array} a - The portal data array.
 * @returns {Object} An object containing the summary data of a portal.
 */
function summaryPortalData(a) {
  return {
    level: a[4],
    health: a[5],
    resCount: a[6],
    image: a[7],
    title: a[8],
    ornaments: a[9],
    mission: a[10],
    mission50plus: a[11],
    artifactBrief: parseArtifactBrief(a[12]),
    timestamp: a[13],
  };
}

/**
 * Parses the detailed portal data from an array.
 *
 * @function detailsPortalData
 * @param {Array} a - The portal data array.
 * @returns {Object} An object containing the detailed data of a portal.
 */
function detailsPortalData(a) {
  return {
    mods: a[SUMMARY_PORTAL_DATA_LENGTH].map(parseMod),
    resonators: a[SUMMARY_PORTAL_DATA_LENGTH + 1].map(parseResonator),
    owner: a[SUMMARY_PORTAL_DATA_LENGTH + 2],
    artifactDetail: parseArtifactDetail(a[SUMMARY_PORTAL_DATA_LENGTH + 3]),
  };
}

/**
 * Parses the extended portal data from an array.
 * @function extendedPortalData
 * @param {Array} a - The portal data array.
 * @returns {Object} An object containing the extended data of a portal.
 */
function extendedPortalData(a) {
  return {
    history: parseHistoryDetail(a[DETAILED_PORTAL_DATA_LENGTH] || 0),
  };
}

window.decodeArray.dataLen = {
  core: [CORE_PORTAL_DATA_LENGTH],
  summary: [SUMMARY_PORTAL_DATA_LENGTH],
  detailed: [EXTENDED_PORTAL_DATA_LENGTH, DETAILED_PORTAL_DATA_LENGTH],
  extended: [EXTENDED_PORTAL_DATA_LENGTH, SUMMARY_PORTAL_DATA_LENGTH],
  anyknown: [CORE_PORTAL_DATA_LENGTH, SUMMARY_PORTAL_DATA_LENGTH, DETAILED_PORTAL_DATA_LENGTH, EXTENDED_PORTAL_DATA_LENGTH],
};

/**
 * Decodes an array of portal data into a more detailed object format.
 *
 * @function window.decodeArray.portal
 * @param {Array} a - Array containing portal data.
 * @param {string} [details='anyknown'] - The level of detail to decode.
 *                                        Can be 'core', 'summary', 'detailed', 'extended', or 'anyknown'.
 * @returns {Object} An object containing decoded portal data.
 */
window.decodeArray.portal = function (a, details) {
  if (!a) {
    log.warn('Argument not specified');
    return;
  }

  if (a[0] !== 'p') {
    throw new Error('decodeArray.portal: not a portal');
  }

  details = details || 'anyknown';
  var expected = window.decodeArray.dataLen[details];
  if (expected.indexOf(a.length) === -1) {
    log.warn('Unexpected portal data length: ' + a.length + ' (' + details + ')');
  }

  var data = corePortalData(a);

  if (a.length >= SUMMARY_PORTAL_DATA_LENGTH) {
    $.extend(data, summaryPortalData(a));
  }

  if (a.length >= DETAILED_PORTAL_DATA_LENGTH) {
    if (a[SUMMARY_PORTAL_DATA_LENGTH]) {
      $.extend(data, detailsPortalData(a));
    } else if (details === 'detailed') {
      log.warn('Portal details missing');
    }
  }

  if (a.length >= EXTENDED_PORTAL_DATA_LENGTH || details === 'extended' || details === 'detailed') {
    $.extend(data, extendedPortalData(a));
    if (data.history && data.history.captured && !data.history.visited) {
      log.warn('Inconsistent history data found in portal "' + data.title + '"');
    }
  }

  return data;
};

window.decodeArray.portalSummary = function (a) {
  // deprecated!!
  return window.decodeArray.portal(a, 'summary');
};

window.decodeArray.portalDetail = function (a) {
  // deprecated!!
  return window.decodeArray.portal(a, 'detailed');
};
