/**
 * @fileoverview Social feeds for Cloud website.
 * @author UpperQuad agency (http://upperquad.com/)
 */
goog.provide('cloud.ui.Social');

goog.require('goog.date.relative');
goog.require('goog.net.Jsonp');


/**
 * Fetches latest entry from Google, YouTube or Blogger.
 * @param {string} id  The id of the element.
 * @param {string} url The url to the data.
 * @constructor
 */
cloud.ui.Social = function(id, url) {
  this.el = goog.dom.getElement(id);
  this.textEls = goog.dom.getElementsByClass('text', this.el);
  this.excerptEls = goog.dom.getElementsByClass('excerpt', this.el);

  this.url = url;
  var jsonp = new goog.net.Jsonp(url);
  jsonp.send(null, this.success_.bind(this));
};

/**
 * Parse and display result.
 * @param {Object} data The result.
 * @private
 */
cloud.ui.Social.prototype.success_ = function(data) {
  var result, len = this.textEls.length;

  if (data.length) {
    for (var i = 0; i < len; i++) {
      this.textEls[i].appendChild(document.createTextNode(data[i].title));
      this.textEls[i].href = data[i].url;
      if (this.excerptEls.length) {
        var node = document.createTextNode(data[i].content);
        this.excerptEls[i].appendChild(node);
      }
    }
    goog.dom.classes.remove(this.el, 'cp-hide');
  } else {
    this.fail_();
  }
};

/**
 * Show a failure message.
 * @private
 */
cloud.ui.Social.prototype.fail_ = function() {
  // Do nothing, keep existing html.
  // Daily API quota could be reached.
};

goog.exportSymbol('cloud.ui.Social', cloud.ui.Social);