(function() {

  // Adds events for scrolling to each section
  $(document).ready(function() {
    var reachedFeatures = [];

    $(window).scroll(function() {

      $($('.starterpack-top')).each(function(index) {

        var feature = $('.starterpack-top:eq(' + index + ')').attr('id');

        if (isScrolledIntoView('.starterpack-top:eq(' + index + ')') &&
          isNotInArray(feature))
        {
          reachedFeatures.push(feature);
          _gaq.push(['_trackEvent', 'starterpackScroll', 'ScrolledToSection_' +
            feature, 'ScrolledToSection']);
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



  $(document).ready(function() {
    $('.gs-feat-content').hide();
    $('.gs-feat-toggle-head').click(function() {
      $(this).siblings('.gs-feat-content').slideToggle();
    });
  });



  // Set up to how the lightbox opens
  var pageWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (pageWidth > 640) {
    var videoOverlay = new gweb.ui.LightBox();
    videoOverlay.init();
  }


})();

