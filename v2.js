function jdSet() {
  $("#logo").each(function(){
    var jdOffset = $("#logo").width() / 2;
    var halfScreen = $( document ).width() / 2;
    var jdLeft = halfScreen - jdOffset;
    $("#logo").css({left: jdLeft});
    $("#hover-logo").css({left: jdLeft});
  });
  window.setTimeout(jdSet, 100)
}

function updateDropdown() {
  $("#dropdown").each(function(){
    if($( document ).width() > 760){
      $("#dropdown").css("visibility", "hidden");
    }
  });
  window.setTimeout(updateDropdown, 100)
}

//Event handlers

$("#logo").mouseover(function() {
  $("#hover-logo").css("visibility", "visible");
});

$("#hover-logo").mouseleave(function() {
    $("#hover-logo").css("visibility", "hidden");
  });

$("#hover-logo").click(function() {
  if( $("#dropdown").css('visibility') == "hidden") {
    $("#dropdown").css("visibility", "visible");
  }
  else if( $("#dropdown").css('visibility') == "visible") {
    $("#dropdown").css("visibility", "hidden");
  }
  });

/*
  $(".drop-item").hover(function() {
      $(".drop-item").css("text-decoration", "line-through");
    });
*/
  updateDropdown();
  jdSet();
