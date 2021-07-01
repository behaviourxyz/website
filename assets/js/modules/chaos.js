/* eslint-env jquery */
var rojo = '#FFF'
var azul = '#00ff00'

$('body').on('mouseover mouseleave touchstart touchend', '.chaos', function (event) {
  event.preventDefault()
  var interval

  if (event.type === 'mouseover') {
    chaos()
  } else if (event.type === 'touchstart') {
    chaos(20, $(this).attr('href'))
  } else if (event.type === 'mouseleave') {
    stopChaos()
  }
})

function toggleColors (cont) {
  if (isOdd(cont)) {
    console.log('par')
    $('.wrapper').css('background-color', rojo)
  } else {
    console.log('impar')
    $('.wrapper').css('background-color', azul)
    console.log(azul)
  }
}

function isOdd (num) { return num % 2 }

function chaos (limit, href) {
  var cont = 0

  $(function () {
    interval = setInterval(function () {
      cont++
      toggleColors(cont)
      if (limit !== undefined) {
        if (cont === limit) {
          clearInterval(interval)
          window.location = href
        }
      }
    }, 100)
  })
}

function stopChaos () {
  clearInterval(interval)
  standartColours()
}

function standartColours () {
  $('.wrapper').css('background-color', '')
}
