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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    useTransform: false,
    // rtl: true,
    // dots: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    infinite: true,
    asNavFor: '.constructions__slider-big',
  });
}
