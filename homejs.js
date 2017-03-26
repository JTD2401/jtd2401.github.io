//slideshow
//Initialize slick
$(document).ready(function() {
  $('.socialMedia').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true
  });
});

function barHeight() {
$( "#bar" ).each(function() {
  $( "#bar" ).height($("#c1").height() + 50);
  });
  window.setTimeout(barHeight, 100);
}

barHeight();
