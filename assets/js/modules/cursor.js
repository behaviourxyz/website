// Cursor
$(document).on('mousemove', function (event) {
  $('.cursor').css({
    left: event.clientX,
    top: event.clientY
  })
})
