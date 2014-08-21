goog.require('goog.json');
goog.require('goog.net.XhrIo');
goog.require('lfl.social.SocialFeed');

goog.provide('lfl.social.YouTubeFeed');


/**
 * Instance of a YouTube feed.
 * @param {Element} content_el Element to hold content.
 * @param {String} api_key API Key to include with request.
 * @param {String} user_id User id to request content from.
 * @constructor
 */
lfl.social.YouTubeFeed = function(content_el, api_key, user_id) {
  lfl.social.SocialFeed.call(this);
  this.content_el = content_el;
  this.api_key = api_key;
  this.user_id = user_id;

  this.max_post_length = 100;

};
goog.inherits(lfl.social.YouTubeFeed, lfl.social.SocialFeed);


/**
 * {String} API Url for the YouTube feed.
 */
lfl.social.YouTubeFeed.API_URL =
    '://gdata.youtube.com/feeds/users';


/**
 * Loads the latest content from the feed.
 */
lfl.social.YouTubeFeed.prototype.loadLatest = function() {
  var r = this.createRequest('getLatest');
  this.sendRequest(r);
};


/**
 * Creates a query to send to the API.
 * @param {String} type Type of request.
 * @return {String} query.
 */
lfl.social.YouTubeFeed.prototype.createRequest = function(type) {
  var protocol;
  if (window.XDomainRequest) {
    protocol = (window.location.protocol == 'https:') ? 'https' : 'http';

  } else {
    protocol = 'https';
  }

  var base = lfl.social.YouTubeFeed.API_URL;
  var type = 'uploads';
  var user = this.user_id;
  var api = this.api_key;

  // YouTube channel GoogleCloudPlatform's unique playlist ID.
  var playlistID = 'PLIivdWyY5sqIUx6jwtbLm966RjfxuQPxC';

  switch (type) {
    case 'getLatest':
    break;
  }

  return protocol + '://gdata.youtube.com/feeds/api/playlists/' + playlistID +
      '?alt=json&key=' + api;
};


/**
 * Sends an request to the API.
 * @param {String} request API request.
 **/
lfl.social.YouTubeFeed.prototype.sendRequest = function(request) {
  var self = this;
  if (window.XDomainRequest) {
    // Use Microsoft XDR.
    var xdr = new XDomainRequest();
    xdr.open('get', request);
    xdr.onerror = function() {
      // Needs an empty handler because of IE9 issues.
      return;
    };
    xdr.onprogress = function() {
      return;
    };
    xdr.ontimeout = function() {
      return;
    };
    xdr.onload = function() {
      var response = goog.json.parse(xdr.responseText);
      self.handleXdrResponse(response);
    };
    xdr.timeout = 0;
    setTimeout(function() {
      xdr.send();
    }, 500);
  }
  else {
    goog.net.XhrIo.send(
        request,
        goog.bind(this.handleXhrResponse, this));
  }
};


/**
 * Handles a XDR response from the API.
 * @param {Object} obj - JSON response object from API.
 **/
lfl.social.YouTubeFeed.prototype.handleXdrResponse = function(obj) {
  this.handleJSONResponse(obj);
};


/**
 * Handles a XHR response from the API.
 * @param {Event} e Event.
 **/
lfl.social.YouTubeFeed.prototype.handleXhrResponse = function(e) {
  var xhr = e.target;
  var obj = xhr.getResponseJson();
  this.handleJSONResponse(obj);
};


/**
 * Handles a JSON response and appends content to the DOM.
 * @param {Object} obj - JSON response object from API.
 **/
lfl.social.YouTubeFeed.prototype.handleJSONResponse = function(obj) {
  try {

    var content =
        obj['feed']['entry'][0]['media$group']['media$title']['$t'];

    var link = obj['feed']['entry'][0]['link'][0]['href'] +
        '&list=PLIivdWyY5sqIUx6jwtbLm966RjfxuQPxC';

    var playlist_link =
        'https://www.youtube.com/user/googlecloudplatform/playlists/';

    var playlist_thumbnail_url =
        obj['feed']['entry'][0]['media$group']['media$thumbnail'][0]['url'];

    var raw_date = obj['feed']['entry'][0]['published']['$t'];
    var date = this.prettyDate(raw_date.substr(0, 19));

    var youtube_title = goog.dom.createDom('h3',
        {'class': 'social-title youtube-title'}, 'YouTube');

    var cleaned_content = this.truncateText(content, this.max_post_length);

    var thumbnail_img = goog.dom.createDom('img',
        {'src': playlist_thumbnail_url, 'class': 'post-thumbnail-img'});

    var thumbnail_el = goog.dom.createDom('a',
        {'href': link, 'target' : '_blank'}, thumbnail_img);

    var content_el = goog.dom.createDom('p',
        {'class': 'content'}, cleaned_content);

    var link_el = goog.dom.createDom('a',
        {'class': 'post-link', 'href': playlist_link, 'target' : '_blank'},
        'See more on YouTube');

    var post_header = goog.dom.createDom('div', {'class': 'post-header'});

    var post_header_contents = goog.dom.createDom('div',
        {'class': 'post-header-contents'});

    var post_date = goog.dom.createDom('div', {'class': 'date'},
        document.createTextNode(date));

    var cleaned_content_el = goog.dom.createDom('div',
        {'class': 'post-details'}, cleaned_content);

    var content_dom = goog.dom.createDom(
        'div', null,
        post_header,
        post_header_contents,
        youtube_title,
        post_date,
        thumbnail_el,
        content_el,
        link_el
        );
    goog.dom.removeChildren(this.content_el);
    goog.dom.append(this.content_el, content_dom);

  } catch (err) {
    return;
  }
};


/**
 * Truncate a string to the given length, breaking at word
 * boundaries and adding an elipsis.
 * @param {String} content to be truncated.
 * @param {Integer} length of the string.
 * @return {String} truncted text.
 */
lfl.social.YouTubeFeed.prototype.truncateText = function(content, length) {
  return goog.base(this, 'truncateText', content, length);
};


/**
 * Takes an ISO time and returns a string representing how
 * long ago the date represents.
 * @param {String} time ISO Time to convert.
 * @return {String} simplified date for display.
 */
lfl.social.YouTubeFeed.prototype.prettyDate = function(time) {
  return goog.base(this, 'prettyDate', time);
};
