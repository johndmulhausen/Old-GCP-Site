function enableTabs() {
  if ($(".kd-tabbed-horz").length > 0)
  {
    // there are tabs! go through headers; if nothing has class=selected, there's no default, so set one.
    // also hook up click event to show/hide tab functionality
    $(".kd-tabbed-horz").each(function(index){
        var hasSelected = false;
        var $this = $(this);
        $this.children("header").each(function(headerIndex){
          if (this.hasClass("selected")) hasSelected=true;
          this.click(function(){
            switchTabs(index,headerIndex);
          })
        });
        if (!hasSelected) $(".kd-tabbed-horz header").first().addClass("selected");
      }
    })
  }
}

var tabString="";
function switchTabs(tabSetIndex,tabIndex)
{
  var $tabSet = $(".kd-tabbed-horz").index(tabSetIndex);
  tabString = $tabSet.children("header").index(tabIndex).innerHTML;
  console.log(tabString + " was clicked!")
  $tabSet.children("header").each(function(thisTab){
    if(thisTab==tabIndex) {
      $(this).addClass("selected");
    } else {
      $(this).removeClass("selected");
    }
  })
}

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

// Enable tabs
enableTabs();

$("#searchButton").click(function() {
  window.location.replace("/search?q=" + $("#q").val());
});

}); // end "ready" 
