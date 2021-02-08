// === round-btn ==================================
$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 800 && height < 3500) {
    $('.round-btn').fadeIn();
  } else {
    $('.round-btn').fadeOut();
  }
});
// $(document).ready(function () {
//   $('.round-btn').click(function (event) {
//     event.preventDefault();
//     $('html, body').animate({ scrollTop: 0 }, 'slow');
//     return false;
//   });
// });

// =============================================
