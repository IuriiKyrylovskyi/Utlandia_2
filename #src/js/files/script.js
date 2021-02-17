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
$('.flat-spoller__body').niceScroll();
$('.licence__imgs-box').niceScroll({
  cursorcolor: '#003DD6',
});
