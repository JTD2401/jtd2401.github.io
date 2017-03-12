//Toggles flipped class from <style> for flipcards
$("div.card").click(function() {
    $(this).toggleClass("flipped");
});

//slideshow
//Initialize slick
$(document).ready(function() {
  $('.midSection').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true
  });
});
