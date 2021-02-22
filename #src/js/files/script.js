// === round-btn ==================================
$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 800 && height < 3500) {
    $('.round-btn').fadeIn();
  } else {
    $('.round-btn').fadeOut();
  }
});
// =============================================
$('._spols-block').niceScroll({
  cursoropacitymax: 0,
  background: 'transparent',
});

$('.licence__imgs-box').niceScroll({
  cursorcolor: '#003DD6',
});
// parallax
new universalParallax().init();