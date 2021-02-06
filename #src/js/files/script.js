// const body = document.querySelector('body');
// const locParallax = document.querySelector('.parallax__container');

// const addLpClass = () => {
//   if (body.classList.contains('_lock')) {
//     let rightPadingNum = body.style;
//     locParallax.classList.add('_lp');
//   }
//   locParallax.classList.remove('_lp');
// };

// body.addEventListener('change', addLpClass);

// $(window).on('scroll', function() {
//     if ($(this).scrollTop() > 100)) {
//         if ($('.round-btn').is(':hidden') {
//             $('.round-btn').css({opacity : 1}).fadeIn('slow');
//         }
//     } else {
//         $('.round-btn').stop(true, false).fadeOut('fast');
//     }
// });
// $('.round-btn').on('click', function() {
//     $('html, body').stop().animate({scrollTop : 0}, 300);
// });
// Set a variable for our button element.
// //----------------------------------------------------------
// const scrollToTopButton = document.quarySelector('.round-btn');

// // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
// const scrollFunc = () => {
//   // Get the current scroll value
//   const y = window.scrollY;

//   // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
//   if (y > 0) {
//     scrollToTopButton.className = 'top-link show';
//   } else {
//     scrollToTopButton.className = 'top-link hide';
//   }
// };

// window.addEventListener('scroll', scrollFunc);

// const scrollToTop = () => {
//   // Let's set a variable for the number of pixels we are from the top of the document.
//   const c = document.documentElement.scrollTop || document.body.scrollTop;

//   // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
//   // We'll also animate that scroll with requestAnimationFrame:
//   // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//   if (c > 0) {
//     window.requestAnimationFrame(scrollToTop);
//     // ScrollTo takes an x and a y coordinate.
//     // Increase the '10' value to get a smoother/slower scroll!
//     window.scrollTo(0, c - c / 10);
//   }
// };

// // When the button is clicked, run our ScrolltoTop function above!
// scrollToTopButton.onclick = function (e) {
//   e.preventDefault();
//   scrollToTop();
// };
// =====================================
$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 800 && height < 3500) {
    $('.round-btn').fadeIn();
  } else {
    $('.round-btn').fadeOut();
  }
});
$(document).ready(function () {
  $('.round-btn').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});
