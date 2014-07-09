
$( document ).ready(function() {
$(".tlw-control").click(function() {
  // user clicked on an arrow
  if ($(this).html()=="▾") {
    // collapsing
    $(this).html("▸");
    $(this).parent().next("ul").css("display","none").css("opacity","0.0");
  
  } else { 
    // expanding
    $(this).html("▾");
    $(this).parent().next("ul").css("display","block");
    $(this).parent().next("ul").animate({
      opacity: 1.0
    }, 200);
  }
});

// Prevent code from being borked by the Google Translate tool
$("pre").addClass("notranslate");
$("code").addClass("notranslate");

// kicks off a search
$("#searchButton").click(function() {
  window.location.replace("/search?q=" + $("#q").val());
});

}); // end "ready" 
