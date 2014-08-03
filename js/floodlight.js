/**
 * Functions for working with DoubleClick floodlight tags.
 * DoubleClick floodlight documentation:
 * http://support.google.com/dfa/partner/answer/134533?hl=en
 */

var floodlight = floodlight || {};

/**
 * Calls a floodlight tag on click without opening a new tab.
 * This appends an iframe which fires a call to the DoubleClick server.
 *
 * @param {string} source The floodlight tag source parameter.
 * @param {string} type The floodlight tag type parameter.
 * @param {string} cat The floodlight tag cat parameter.
 */
floodlight.callFloodlight_same = function(source, type, cat) {
  var tag_url = 'https://fls.doubleclick.net/activityi;src=' +
      source + ';type=' + type + ';cat=' + cat + ';ord=' +
      Math.floor(Math.random() * 999999) + '?';

  if (document.getElementById('DCLK_FLDiv')) {
    var flDiv = document.getElementById('DCLK_FLDiv');
  } else {
    var flDiv = document.body.appendChild(document.createElement('div'));
    flDiv.id = 'DCLK_FLDiv';
    flDiv.style.display = 'none';
  }

  var DCLK_FLIframe = document.createElement('iframe');
  DCLK_FLIframe.id = 'DCLK_FLIframe_' + Math.floor(Math.random() * 999999);
  DCLK_FLIframe.src = tag_url;
  flDiv.appendChild(DCLK_FLIframe);
  var timeoutFunction = 'window.location.href' +
      ' = "https://console.developers.google.com?getstarted="' +
      ' + window.location.href;';
  setTimeout(timeoutFunction, 1000);
};
