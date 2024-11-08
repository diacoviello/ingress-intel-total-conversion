// @author         jonatkins
// @name           Cache viewed portals on map
// @category       Cache
// @version        0.1.3
// @description    Cache the details of recently viewed portals and use this to populate the map when possible

/* exported setup, changelog --eslint */

var changelog = [
  {
    version: '0.1.3',
    changes: ['Refactoring: fix eslint'],
  },
  {
    version: '0.1.2',
    changes: ['Version upgrade due to a change in the wrapper: plugin icons are now vectorized'],
  },
  {
    version: '0.1.1',
    changes: ['Version upgrade due to a change in the wrapper: added plugin icon'],
  },
];

// use own namespace for plugin
window.plugin.cachePortalDetailsOnMap = function () {};

window.plugin.cachePortalDetailsOnMap.MAX_AGE = 12 * 60 * 60; // 12 hours max age for cached data

window.plugin.cachePortalDetailsOnMap.portalDetailLoaded = function (data) {
  if (data.success) {
    window.plugin.cachePortalDetailsOnMap.cache[data.guid] = { loadtime: Date.now(), ent: data.ent };
  }
};

window.plugin.cachePortalDetailsOnMap.entityInject = function (data) {
  var maxAge = Date.now() - window.plugin.cachePortalDetailsOnMap.MAX_AGE * 1000;

  var ents = [];
  for (var guid in window.plugin.cachePortalDetailsOnMap.cache) {
    if (window.plugin.cachePortalDetailsOnMap.cache[guid].loadtime < maxAge) {
      delete window.plugin.cachePortalDetailsOnMap.cache[guid];
    } else {
      ents.push(window.plugin.cachePortalDetailsOnMap.cache[guid].ent);
    }
  }
  data.callback(ents, 'detailed');
};

window.plugin.cachePortalDetailsOnMap.setup = function () {
  window.plugin.cachePortalDetailsOnMap.cache = {};

  window.addHook('portalDetailLoaded', window.plugin.cachePortalDetailsOnMap.portalDetailLoaded);
  window.addHook('mapDataEntityInject', window.plugin.cachePortalDetailsOnMap.entityInject);
};

var setup = window.plugin.cachePortalDetailsOnMap.setup;
