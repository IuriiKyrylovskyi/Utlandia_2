// slick-slider
if ($('.slider-close').length > 0) {
  $('.slider-close').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });
}

if ($('.constructions__slider-big').length > 0) {
  $('.constructions__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    // autoplaySpeed: 3000,
    fade: true,
    infinite: true,
    asNavFor: '.constructions__slider-small',

    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });
}

if ($('.constructions__slider-small').length > 0) {
  $('.constructions__slider-small').slick({
    vertical: true,
    centerMode: true,
    centerPadding: '30px',

    slidesToShow: 4,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    variableWidth: true,
    focusOnSelect: true,
    verticalSwiping: true,
    // useTransform: false,
    // rtl: true,

    arrows: false,
    infinite: true,
    asNavFor: '.constructions__slider-big',
  });
}

// $(window).on('resize orientationchange', function () {
//   if ($(window).width() > 1200) {
//     $('.slider-nav').slick('unslick');
//     $('.slider-nav').slick({
//       slidesToShow: 4,
//       asNavFor: '.slider-main',
//       vertical: true,
//       focusOnSelect: true,
//       autoplay: false,
//       centerMode: true,
//     });
//   }
// });

// $(document).ready(function () {
//   $('.slick-slider').slick({
//     vertical: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     arrows: true,
//     prevArrow: '<div class="slick-prev"></div>',
//     nextArrow: '<div class="slick-next"></div>',
//     dots: true,
//     customPaging: function (slider, i) {
//       return '<a href="#"><img src="images/slide-dot.png" /><img src="images/slide-dot-active.png" /></a>';
//     },
//   });
// });
