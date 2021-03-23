// 1. Ссылку на видео храним в data-src, а не src
// 2. Обратим внимание, что выставлены параметры автовоспроизведения(autoplay=1),
// отмены воспроизведения похожих видео(rel = 0),
// не показываем информацию об авторе(showinfo = 0),
// отключаем лого ютуб(modestbranding = 1)
$(document).on('click', '.js-videoPoster', function (e) {
  //отменяем стандартное действие button
  e.preventDefault();
  var poster = $(this);
  // ищем родителя ближайшего по классу
  var wrapper = poster.closest('.js-videoWrapper');
  videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
  var iframe = wrapper.find('.js-videoIframe');
  // Берем ссылку видео из data
  var src = iframe.data('src');
  // скрываем постер
  wrapper.addClass('videoWrapperActive');
  // подставляем в src параметр из data
  iframe.attr('src', src);
}
