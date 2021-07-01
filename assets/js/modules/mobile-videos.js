/* eslint-env jquery */
// Click en proyecto
var arrayVideosMobile
var Plyr

var buildVideoMobile = function () {
  arrayVideosMobile = Plyr.setup('.js-player-mobile')
  console.log('CONSTRUYENDO VIDEOS Mobile')
  console.log(arrayVideosMobile)
  return arrayVideosMobile
}

var setAutoAndLoop = function (videoId, videoComponentPlayerMobile) {
  arrayVideosMobile[videoId].autoplay = true
  arrayVideosMobile[videoId].loop = true
}

var showAndPlayItemMobile = function (videoId, videoComponentPlayerMobile) {
  console.log(videoComponentPlayerMobile)
  console.log('autoplay', arrayVideosMobile[videoId].autoplay)
  arrayVideosMobile[videoId].play()
  videoComponentPlayerMobile.stop(true, true).show('fast', function () {

  })
}

var pauseAllVideosMobile = function () {
  arrayVideosMobile.forEach(function (arrv, index) {
    arrayVideosMobile[index].pause()
  })
}

var hideAllMobile = function () {
  $('.plyr').hide()
}

$('.project').on('touchstart', '.project__link', function (event) {
  event.preventDefault()

  var videoId = $(this).attr('id').split('project__')[1]
  var videoComponentPlayerMobile = $(this).find('.plyr')

  if (event.type === 'touchstart') {
    hideAllMobile()

    // parar todos los videos
    pauseAllVideosMobile()
    setAutoAndLoop(videoId, videoComponentPlayerMobile)
    if ($(this).is('.no-loaded')) {
      // El video no existe
      // Y seguimos el video
      console.log('touch')

      showAndPlayItemMobile(videoId, videoComponentPlayerMobile)
    } else {
      showAndPlayItemMobile(videoId, videoComponentPlayerMobile)
    }
  }
})

$(document).ready(function () {
  if (window.mobilecheck()) {
    setTimeout(function () {
      buildVideoMobile()
      $('body').addClass('is_mobile')
    }, 2000)
  }
})
