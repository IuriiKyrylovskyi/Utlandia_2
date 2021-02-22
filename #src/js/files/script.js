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
	//RADIO
	$.each($('.radio__item'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('_active');
		}
	});
	$(document).on('click', '.radio__item', function(event) {
		$(this).parents('.radio').find('.radio__item').removeClass('_active');
		$(this).parents('.radio').find('.radio__item input').prop('checked',false);
		$(this).toggleClass('_active');
		$(this).find('input').prop('checked',true);
		return false;
	});