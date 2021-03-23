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
$.each($('.radio__item'), function (index, val) {
  if ($(this).find('input').prop('checked') == true) {
    $(this).addClass('_active');
  }
});
$(document).on('click', '.radio__item', function (event) {
  $(this).parents('.radio').find('.radio__item').removeClass('_active');
  $(this).parents('.radio').find('.radio__item input').prop('checked', false);
  $(this).toggleClass('_active');
  $(this).find('input').prop('checked', true);
  return false;
});

// // ====
// if (window.location.toString().indexOf('test_constractions_video.html') > 0) {
//   const iframes = document.querySelectorAll('iframe');
//   console.log(iframes);
//   const youTubeImgStyleContent = () => {
//     if (iframes.length === 0) {
//       return;
//     }

//     iframes.forEach(iframe => {
//       const youTubeImg = iframe.contentWindow.document.querySelector('.ytp-cued-thumbnail-overlay-image');
//       console.log(youTubeImg);
//       youTubeImg.style.backgroundSize = 'content';
//     });
//   };

//   youTubeImgStyleContent();
// }

// $('iframe').each(function () {
//   function injectCSS() {
//   //   $iframe
//   //     .contents()
//   //     .find('head')
//   //     .append($('<link/>', { rel: 'stylesheet', href: 'iframe.css', type: 'text/css' }));
//   // }

//   // var $iframe = $(this);
//   // $iframe.on('load', injectCSS);
//   injectCSS();
// });

// $('iframe').each(function () {
//   function injectCSS() {
//     let link = document.createElement("link");

//     // Set the attributes
//     // for link element
//     link.href = "iframe.css";
//     link.rel = "stylesheet";
//     link.type = "text/css";

//     // Set the link element at the
//     // 'head' of HTML document
//     document.head.appendChild(link);
//   }
//   injectCSS();
// });

// const iframes = document.querySelectorAll('iframe');
// const youTubeImgStyleContent = () => {
//   iframes.forEach(iframe => {
//     console.log(iframes);
//     if (iframes.length === 0) {
//       return;
//     }

//     let link = iframe.createElement('link');

//     link.name = 'img';
//     link.href = 'iframe.css';
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     console.log(link);
//     iframe.head.appendChild(link);
//   });
// };

// youTubeImgStyleContent();
