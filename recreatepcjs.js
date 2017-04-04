//Initialize slick
$(document).ready(function() {
  $('#topSlideshow').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          dots: false,
        }
      }
    ]
  });
});
