/* global L -- eslint */

/**
 * @file Main code block that renders the portal details in the sidebar and
 * methods that highlight the portal in the map view.
 * @module portal_detail_display
 */

/**
 * Resets the scroll position of the sidebar when a new portal is selected.
 *
 * @function resetScrollOnNewPortal
 */
window.resetScrollOnNewPortal = function () {
  if (window.selectedPortal !== window.renderPortalDetails.lastVisible) {
    // another portal selected so scroll position become irrelevant to new portal details
    $('#sidebar').scrollTop(0); // NB: this works ONLY when #sidebar:visible
  }
};

/**
 * Generates and displays URLs related to the portal.
 * This includes a permalink for the portal, a link for Ingress Prime, and links to alternative maps.
 * Function is overwritten in `app.js`
 *
 * @function renderPortalUrl
 * @param {number} lat - The latitude of the portal.
 * @param {number} lng - The longitude of the portal.
 * @param {string} title - The title of the portal.
 * @param {string} guid - The GUID of the portal.
 */
window.renderPortalUrl = function (lat, lng, title, guid) {
  var linkDetails = $('.linkdetails');

  // a permalink for the portal
  var permaHtml = $('<a>')
    .attr({
      href: window.makePermalink([lat, lng]),
      title: 'Create a URL link to this portal',
    })
    .text('Portal link');
  linkDetails.append($('<aside>').append(permaHtml));

  var scannerLink = $('<a>')
    .attr({
      href: window.makePrimeLink(guid, lat, lng),
      title: 'Copy link to this portal for Ingress Prime',
    })
    .click(function (event) {
      navigator.clipboard.writeText(event.target.href).then();
      event.stopPropagation();
      return false;
    })
    .text('Copy scanner link');
  linkDetails.append($('<aside>').append(scannerLink));

  // and a map link popup dialog
  var mapHtml = $('<a>')
    .attr({
      title: 'Link to alternative maps (Google, etc)',
    })
    .text('Map links')
    .click(window.showPortalPosLinks.bind(this, lat, lng, title));
  linkDetails.append($('<aside>').append(mapHtml));
};

/**
 * Renders the details of a portal in the sidebar.
 *
 * @function renderPortalDetails
 * @param {string|null} guid - The globally unique identifier of the portal to display details for.
 */
window.renderPortalDetails = function (guid) {
  window.selectPortal(window.portals[guid] ? guid : null);
  if ($('#sidebar').is(':visible')) {
    window.resetScrollOnNewPortal();
    window.renderPortalDetails.lastVisible = guid;
  }

  if (guid && !window.portalDetail.isFresh(guid)) {
    window.portalDetail.request(guid);
  }

  // TODO? handle the case where we request data for a particular portal GUID, but it *isn't* in
  // window.portals....

  if (!window.portals[guid]) {
    window.urlPortal = guid;
    $('#portaldetails').html('');
    if (window.isSmartphone()) {
      $('.fullimg').remove();
      $('#mobileinfo').html('<div style="text-align: center"><b>tap here for info screen</b></div>');
    }
    return;
  }

  var portal = window.portals[guid];
  var data = portal.options.data;
  var details = window.portalDetail.get(guid);
  var historyDetails = window.getPortalHistoryDetails(data);

  // details and data can get out of sync. if we have details, construct a matching 'data'
  if (details) {
    data = window.getPortalSummaryData(details);
  }

  var modDetails = details ? '<div class="mods">' + window.getModDetails(details) + '</div>' : '';
  var miscDetails = details ? window.getPortalMiscDetails(guid, details) : '';
  var resoDetails = details ? window.getResonatorDetails(details) : '';

  // TODO? other status details...
  var statusDetails = details ? '' : '<div id="portalStatus">Loading details...</div>';

  var img = window.fixPortalImageUrl(details ? details.image : data.image);
  var title = (details && details.title) || (data && data.title) || 'null';

  var lat = data.latE6 / 1e6;
  var lng = data.lngE6 / 1e6;

  var imgTitle = title + '\n\nClick to show full image.';

  // portal level. start with basic data - then extend with fractional info in tooltip if available
  var levelInt = window.teamStringToId(data.team) === window.TEAM_NONE ? 0 : data.level;
  var levelDetails = levelInt;
  if (details) {
    levelDetails = window.getPortalLevel(details);
    if (levelDetails !== 8) {
      if (levelDetails === Math.ceil(levelDetails)) levelDetails += '\n8';
      else levelDetails += '\n' + (Math.ceil(levelDetails) - levelDetails) * 8;
      levelDetails += ' resonator level(s) needed for next portal level';
    } else {
      levelDetails += '\nfully upgraded';
    }
  }
  levelDetails = 'Level ' + levelDetails;

  $('#portaldetails')
    .html('') // to ensure it's clear
    .attr('class', window.TEAM_TO_CSS[window.teamStringToId(data.team)])
    .append(
      $('<h3>', { class: 'title' })
        .text(title)
        .prepend(
          $('<svg><use xlink:href="#ic_place_24px"/><title>Click to move to portal</title></svg>')
            .attr({
              class: 'material-icons icon-button',
              style: 'float: left',
            })
            .click(function () {
              window.zoomToAndShowPortal(guid, [data.latE6 / 1e6, data.lngE6 / 1e6]);
              if (window.isSmartphone()) {
                window.show('map');
              }
            })
        ),

      $('<span>')
        .attr({
          class: 'close',
          title: 'Close [w]',
          accesskey: 'w',
        })
        .text('X')
        .click(function () {
          window.renderPortalDetails(null);
          if (window.isSmartphone()) {
            window.show('map');
          }
        }),

      // help cursor via ".imgpreview img"
      $('<div>')
        .attr({
          class: 'imgpreview',
          title: imgTitle,
          style: 'background-image: url("' + img + '")',
        })
        .append($('<span>', { id: 'level', title: levelDetails }).text(levelInt), $('<img>', { class: 'hide', src: img })),

      modDetails,
      miscDetails,
      resoDetails,
      statusDetails,
      $('<div>', { class: 'linkdetails' }),
      historyDetails
    );

  window.renderPortalUrl(lat, lng, title, guid);

  // only run the hooks when we have a portalDetails object - most plugins rely on the extended data
  // TODO? another hook to call always, for any plugins that can work with less data?
  if (details) {
    window.runHooks('portalDetailsUpdated', { guid: guid, portal: portal, portalDetails: details, portalData: data });
  }
};

/**
 * Gets miscellaneous details for a specified portal.
 *
 * @function getPortalMiscDetails
 * @param {string} guid - The GUID of the portal.
 * @param {Object} d - The portal detail object containing various properties of the portal.
 * @returns {string} HTML string representing the miscellaneous details of the portal.
 */
window.getPortalMiscDetails = function (guid, d) {
  var randDetails;

  if (d) {
    // collect some random data that’s not worth to put in an own method
    var linkInfo = window.getPortalLinks(guid);
    var maxOutgoing = window.getMaxOutgoingLinks(d);
    var linkCount = linkInfo.in.length + linkInfo.out.length;
    var links = { incoming: linkInfo.in.length, outgoing: linkInfo.out.length };

    var title =
      `at most ${maxOutgoing} outgoing links\n` +
      `${links.outgoing} links out\n` +
      `${links.incoming} links in\n` +
      `(${links.outgoing + links.incoming} total)`;
    var linksText = ['links', links.outgoing + ' out / ' + links.incoming + ' in', title];

    var player = d.owner ? '<span class="nickname">' + d.owner + '</span>' : '-';
    var playerText = ['owner', player];

    var fieldCount = window.getPortalFieldsCount(guid);

    var fieldsText = ['fields', fieldCount];

    var apGainText = window.getAttackApGainText(d, fieldCount, linkCount);

    var attackValues = window.getPortalAttackValues(d);

    // collect and html-ify random data

    var randDetailsData = [
      // these pieces of data are only relevant when the portal is captured
      // maybe check if portal is captured and remove?
      // But this makes the info panel look rather empty for unclaimed portals
      playerText,
      window.getRangeText(d),
      linksText,
      fieldsText,
      window.getMitigationText(d, linkCount),
      window.getEnergyText(d),
      // and these have some use, even for uncaptured portals
      apGainText,
      window.getHackDetailsText(d),
    ];

    if (attackValues.attack_frequency !== 0) {
      randDetailsData.push(['<span title="attack frequency" class="text-overflow-ellipsis">attack frequency</span>', '×' + attackValues.attack_frequency]);
    }
    if (attackValues.hit_bonus !== 0) {
      randDetailsData.push(['hit bonus', attackValues.hit_bonus + '%']);
    }
    if (attackValues.force_amplifier !== 0) {
      randDetailsData.push(['<span title="force amplifier" class="text-overflow-ellipsis">force amplifier</span>', '×' + attackValues.force_amplifier]);
    }

    randDetails = '<table id="randdetails">' + window.genFourColumnTable(randDetailsData) + '</table>';

    // artifacts - tacked on after (but not as part of) the 'randdetails' table
    // instead of using the existing columns....

    if (d.artifactBrief && d.artifactBrief.target && Object.keys(d.artifactBrief.target).length > 0) {
      var targets = Object.keys(d.artifactBrief.target);
      // currently (2015-07-10) we no longer know the team each target portal is for - so we'll just show the artifact type(s)
      randDetails +=
        '<div id="artifact_target">Target portal: ' +
        targets
          .map(function (x) {
            return x.capitalize();
          })
          .join(', ') +
        '</div>';
    }

    // shards - taken directly from the portal details
    if (d.artifactDetail) {
      randDetails += '<div id="artifact_fragments">Shards: ' + d.artifactDetail.displayName + ' #' + d.artifactDetail.fragments.join(', ') + '</div>';
    }
  }

  return randDetails;
};

/**
 * The function adds circles indicating the hack range and link range of the portal.
 * If the portal object are null, the indicators are removed.
 *
 * @function setPortalIndicators
 * @param {Object} p - The portal object for which to set the indicators.
 */
window.setPortalIndicators = function (p) {
  if (window.portalRangeIndicator) window.map.removeLayer(window.portalRangeIndicator);
  window.portalRangeIndicator = null;
  if (window.portalAccessIndicator) window.map.removeLayer(window.portalAccessIndicator);
  window.portalAccessIndicator = null;

  // if we have a portal...

  if (p) {
    var coord = p.getLatLng();

    // range is only known for sure if we have portal details
    // TODO? render a min range guess until details are loaded..?

    var d = window.portalDetail.get(p.options.guid);
    if (d) {
      var range = window.getPortalRange(d);
      window.portalRangeIndicator = (
        range.range > 0
          ? L.geodesicCircle(coord, range.range, {
              fill: false,
              color: window.RANGE_INDICATOR_COLOR,
              weight: 3,
              dashArray: range.isLinkable ? undefined : '10,10',
              interactive: false,
            })
          : L.circle(coord, range.range, { fill: false, stroke: false, interactive: false })
      ).addTo(window.map);
    }

    window.portalAccessIndicator = L.circle(coord, window.HACK_RANGE, {
      fill: false,
      color: window.ACCESS_INDICATOR_COLOR,
      weight: 2,
      interactive: false,
    }).addTo(window.map);
  }
};

/**
 * Highlights the selected portal on the map and clears the highlight from the previously selected portal.
 *
 * @function selectPortal
 * @param {string} guid - The GUID of the portal to select.
 * @returns {boolean} True if the same portal is re-selected (just an update), false if a different portal is selected.
 */
window.selectPortal = function (guid) {
  var update = window.selectedPortal === guid;
  var oldPortalGuid = window.selectedPortal;
  window.selectedPortal = guid;

  var oldPortal = window.portals[oldPortalGuid];
  var newPortal = window.portals[guid];

  // Restore style of unselected portal
  if (!update && oldPortal) window.setMarkerStyle(oldPortal, false);

  // Change style of selected portal
  if (newPortal) {
    window.setMarkerStyle(newPortal, true);

    if (window.map.hasLayer(newPortal)) {
      newPortal.bringToFront();
    }
  }

  window.setPortalIndicators(newPortal);

  window.runHooks('portalSelected', { selectedPortalGuid: guid, unselectedPortalGuid: oldPortalGuid });
  return update;
};
