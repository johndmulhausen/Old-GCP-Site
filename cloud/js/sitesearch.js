(function() {

  // key settings for Google Custom Search API
  var cse_url = '//www.googleapis.com/customsearch/v1';
  cse_data['num'] = 10;

  var next_text = 'Next »';
  var previous_text = '« Previous';

  function Pagination(response, params) {

    if (response.queries.previousPage) {
      params['start'] = response.queries.previousPage[0].startIndex;
      url_prev = location.href.split('?')[0] + '?' + $.param(params);
      $('#search_pagination_prev').html('<a href="' + url_prev +
        '" data-g-index="' + params['start'] + '">' + previous_text + '</a>');
    } else {
      $('#search_pagination_prev').html(previous_text);
    }

    if (response.queries.previousPage || response.queries.nextPage &&
      response.queries.request[0].totalResults) {
      $('#search_pagination_page').html(
         Math.ceil(response.queries.request[0].startIndex / cse_data['num']));
    } else {
      $('#search_pagination_page').html(
        response.queries.request[0].totalResults ? '1' : '0');
    }

    if (response.queries.nextPage) {
      params['start'] = response.queries.nextPage[0].startIndex;
      url_next = location.href.split('?')[0] + '?' + $.param(params);
      $('#search_pagination_next').html('<a href="' + url_next +
        '" data-g-index="' + params['start'] + '">' + next_text + '</a>');
    } else {
      $('#search_pagination_next').html(next_text);
    }
  }

  function SearchResults(response) {
    for (var i = 0; i < response.items.length; i++) {
     var item = response.items[i];
     html = '';
     thumb = item.pagemap.cse_thumbnail ?
         item.pagemap.cse_thumbnail[0].src : undefined;
     thumb_class = item.pagemap.cse_thumbnail ? '' : ' thumb-default';

     if (thumb != undefined) {
       html_thumb = '<div class="thumb' + thumb_class +
       '" style="background-image:url(' + thumb + ');"></div>';
       html = '<a href="' + item.link + '">' + html_thumb + '</a>';
     }

     html += '<h3><a href="' + item.link + '">' + item.htmlTitle + '</a></h3>';
     html += '<cite><a href="' + item.link + '">' + item.link + '</a></cite>';
     html += '<p>' + item.htmlSnippet + '</p>';

     $('#search_results').append($('<li>').addClass('snippet').html(html));
    }

    html_info = 'About ' + response.searchInformation.formattedTotalResults +
    ' results ';

    html_info += '(' + response.searchInformation.formattedSearchTime +
    ' seconds)';
    $('#search_info').text(html_info).html();
  }

  function CustomSearch(startIndex) {
    startIndex = startIndex || 1;

    if (cse_data['type'] == 'Site Wide') {
      $('input[name="q"]').val($('#search_box').val());
    }

    var url_params = {
      'q': $('#search_box').val(),
      'start': startIndex
    };

    var search_url = cse_url + '?' + $.param($.extend({},
       url_params, cse_data));

    $.getJSON(search_url, null, function(response) {
      if (parseInt(response.searchInformation.formattedTotalResults) > 0) {
        $('#search_results').html('');
        SearchResults(response);
        //sets pagination box to display
        $('.search_pagination').show();
      } else {
        $('#search_info').html('');
        html = '';
        if ($.getUrlParam('q') !== '') {
          html = 'Your search - "' + $('#search_box').val() +
                 '" - did not match any documents';
        }
        $('#search_results').text($('<li>').addClass(
            'snippet').text(html).html()).html();
      }
      Pagination(response, url_params);
    });
    return PushHistoryState(url_params);
  }

  function PushHistoryState(url_params) {
    if (history.pushState) {
      history.pushState(null, document.title, location.href.split('?')[0] +
          '?' + $.param(url_params));
      return false;
    }
    return true;
  }

  // Document onLoad event.
  $(function() {
    if ($.getUrlParam('q') !== '') {
      if (cse_data['type'] == 'Site Wide') {
        $('input[name="q"]').val($.getUrlParam('q'));
      } else if (cse_data['type'] == 'Solutions') {
        $('#search_box').val($.getUrlParam('q'));
      }
      CustomSearch($.getUrlParam('start'));
    }
  });

  // Element event functions.
  $('#search_button').bind('click', function(event) {
    event.preventDefault();
    return CustomSearch(1);
  });

  $('#search_box').bind('keyup', function(event) {
   if (event.keyCode == 13) {
     event.preventDefault();
     return CustomSearch(1);
   }
  });

  $('#search_pagination_next,#search_pagination_prev').bind('click',
      function() {
    if (history.pushState && $(this).children('a').attr('data-g-index')) {
      CustomSearch($(this).children('a').attr('data-g-index'));
      return false;
    }
    return true;
  });

  // Clear search
  $('#search_reset').bind('click', function() {
    $('#search_box').val('');
    $('.search_pagination').hide();
    return CustomSearch(1);
  });

  // Return value for a URL parameter key.
  $.getUrlParam = function(key) {
    results = new RegExp('[\\?&]' + key + '=([^&#]*)').exec(
        top.window.location.href);

    return results === null ? '' : results[1];
  };

})();