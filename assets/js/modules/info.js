/******************************/
/** ********** INFO ************/
/******************************/

$('.info--link').on({
  click: function () {
    $('.wrapper').toggleClass('info--active')
    $(this).toggleClass('info--link--active')
    $(this).text('Info')
    $('.info--text').toggle()
    $('ul#projects').toggle()

    // Html background color
    $('html').css('background-color', black)
  }
})

$('body').on('click', '.info--link--active', function (event) {
  event.preventDefault()
  $(this).text('Close')

  // Html background color
  $('html').css('background-color', black)
})
