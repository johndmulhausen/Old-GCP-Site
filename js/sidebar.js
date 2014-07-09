
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

// add functions for tab loading by ID
$.fn.tabIndex = function () {
    return $(this).parent().find(this).index() - 1; 
};
$.fn.selectTabByID = function (tabID) {
    $(this).tabs("option", "active", $('#' + tabID).tabIndex());
};
$.fn.selectTabByIndex = function (tabIndex) {
    $(this).tabs("option", "active", tabIndex);
};
    
// activate tabs, link all tabs with the same header ID
$(".horizontalTabs").tabs();
$(".horizontalTabs").on("tabsactivate", function(event,ui)
  {
      var result = "";
      obj = ui.newTab;
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
      }
      console.log(result);
    $(".horizontalTabs").selectTabByID(ui.newTab.id);
  });

// kicks off a search
$("#searchButton").click(function() {
  window.location.replace("/search?q=" + $("#q").val());
});

}); // end "ready" 
