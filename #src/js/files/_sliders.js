// slick-slider --------
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
// constructions sliders -------
if ($('.constructions__slider-big').length > 0) {
  $('.constructions__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    // autoplaySpeed: 3000,
    fade: true,
    // infinite: true,
    infinite: false,
    asNavFor: '.constructions__slider-small',

    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
}

if ($('.constructions__slider-small').length > 0) {
  $('.constructions__slider-small').slick({
    vertical: true,
    // centerMode: true,
    // centerPadding: '30px',

    slidesToShow: 4,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    // variableWidth: true,
    // focusOnSelect: true,
    // verticalSwiping: true,

    arrows: false,
    // infinite: true,
    infinite: false,
    asNavFor: '.constructions__slider-big',
    responsive: [
      // {
      //   breakpoint: 1360,
      //   // settings: 'unslick',
      //   settings: {
      //     // // slidesToShow: 1,
      //     vertical: false,
      //     // centerPadding: '0px',
      //     // centerMode: false,
      //     // variableWidth: false,
      //   },
      // },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 1,
          // vertical: false,
          // centerPadding: '0px',
          // centerMode: false,
          // variableWidth: false,
        },
      },
    ],
  });
}
// ------menu slider--------------------
if ($('.menu-slider').length > 0) {
  $('.menu-slider').slick({
    vertical: true,
    // centerMode: true,
    // centerPadding: '30px',
    slidesToShow: 6,
    slidesToScroll: 2,
    // adaptiveHeight: true,
    // variableWidth: true,
    // focusOnSelect: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick',
        // settings: {
        //   // // slidesToShow: 1,
        //   vertical: false,
        //   // centerPadding: '0px',
        //   // centerMode: false,
        //   // variableWidth: false,
        // },
      },
    ],
  });
}

$(window).on('resize orientationchange', function () {
  if ($(window).width() > 767) {
    $('.menu-slider').slick('unslick');
  }
});

// about slider ================================
if ($('.about-slider').length > 0) {
  $('.about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    asNavFor: '.about-pagin__list',
    autoplay: false,
    fade: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
}

if ($('.about-pagin__list').length > 0) {
  $('.about-pagin__list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    asNavFor: '.about-slider',
    centerMode: false,
    focusOnSelect: true,
    autoplay: false,
    infinite: false,
  });
}

// licence ===================================
if ($('.licence__img-slider').length > 0) {
  $('.licence__img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: false,
    arrows: false,
    asNavFor: '.licence__labels-slider',
    autoplay: false,
    fade: true,
    infinite: false,
  });
}

if ($('.licence__labels-slider').length > 0) {
  $('.licence__labels-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    //  adaptiveHeight: true,
    asNavFor: '.licence__img-slider',
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    infinite: false,
  });
}

// ------------------------
// $(window).on('resize orientationchange', function () {
//   if ($(window).width() < 1360) {
//     $('.constructions__slider-small').slick('unslick');
//     $('.constructions__slider-small').slick({
//       slidesToShow: 4,
//       asNavFor: '.constructions__slider-big',
//       vertical: false,

//       focusOnSelect: true,
//       // autoplay: false,
//       // centerMode: true,
//       infinite: false,

//       responsive: [
//         {
//           breakpoint: 767,
//           settings: {
//             slidesToShow: 1,
//             // vertical: false,
//             // centerPadding: '0px',
//             // centerMode: false,
//             // variableWidth: false,
//           },
//         },
//       ],
//     });
//   }
// });

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
