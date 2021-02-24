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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    asNavFor: '.constructions__slider-big',
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
if ($('.menu-slider').length > 0) {
  $('.menu-slider').slick({
    vertical: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick',
      },
    ],
  });
}

$(window).on('resize orientationchange', function () {
  if ($(window).width() > 767) {
    $('.menu-slider').slick('unslick');
  }
});

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

if ($('.storey__slider').length > 0) {
  $('.storey__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // centerMode: false,
    fade: true,
    // arrows: true,
    //    focusOnSelect: true,
    // autoplay: false,
      infinite: false,
  });
}
