/**
 * @fileoverview Carousels lib for Cloud website.
 * @author UpperQuad agency (http://upperquad.com/)
 */

(function($) {
  // Gives video link a lightbox if page is wider than 600px;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width > 600) {
    var videoOverlay = new gweb.ui.LightBox();
    videoOverlay.init();
  }

  // Set the carousels on the page
  // Use transform if available, otherwise just change left position.
  var translateX = Modernizr.csstransitions ?
    function(el, x) {
      el.css(Modernizr.prefixed('transform'), 'translateX(' + x + 'px)');
    } :
    function(el, x) { el.css('left', x + 'px'); };

  // Carousel navigation
  $(document).delegate('.gc-carousel-nav a', 'click', function(event) {
    // Find section width
    var el = $(this),
      carousel = el.closest('.gc-carousel'),
      target = $(el.attr('href'));

    if (target.length) {
      // Override default behavior
      event.preventDefault();

      // Calculate new position
      var item = el.closest('li'),
        width = carousel.outerWidth();
        index = target.index(),
        offset = (index * width * -1);

      // Set active class
      item.addClass('active')
        .siblings().removeClass('active');

      // Change slide
      translateX(carousel.find('.gc-carousel-content'), offset);

      // Change indicator
      offset = item.position().left +
        (item.outerWidth() / 2) - /* element center */
        6 + /* indicator center */
        parseInt(item.css('margin-left'), 10); /* item left margin */

      translateX(carousel.find('.gc-carousel-indicator'), offset);
    }
  });

  // Fix location of active slide on resize.
  $(window).bind('resize', function() {
    $('.gc-carousel-nav').find('.active a:first').trigger('click');
  });

  $(function() {
    // Initialize indicators
    $(window).trigger('resize');

    // Render any carousels on the page
    //$('.carousel').carousel();
    // Render any feed widgets on the page

    //$('.feed').rss();
    //$('.feed-plain').rss();
    // Render any OSS widgets on the page.
    //$('.oss').oss();

    // Scroll events for the page
    // Adds events for scrolling to each section
    var reachedFeatures = [];

    $(window).scroll(function() {

      $($('.section-scroll-top')).each(function(index) {

        var feature = $('.section-scroll-top:eq(' + index + ')').attr('id');

        if (isScrolledIntoView('.section-scroll-top:eq(' + index + ')') &&
              isNotInArray(feature))
        {
          reachedFeatures.push(feature);
          _gaq.push(['_trackEvent', 'Cloud Home scroll events',
              'ScrolledToFeatures', feature]);
        }
      });

    });

    function isNotInArray(elem)
    {
      var target = elem;
      var notInArray = true;
      for (var i = 0; i < reachedFeatures.length; i++) {
        if (reachedFeatures[i] == target) {
          notInArray = false;
        }
      }
      return notInArray;
    }

    // Check if element is scrolled into view.
    function isScrolledIntoView(elem)
    {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

  });

}(jQuery));