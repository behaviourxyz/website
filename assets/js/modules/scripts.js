/* eslint-env jquery */
// scripts.js

// Variables globales
var arrayVideos = [] // Se define un array vacío para todos los videos
var timeIsLoaded = 2 // Tiempo en segundos de margen de los videos al principio para el loader
var minVolume = 0
var maxVolume = 1
var loaderIsLoadedOpacity = 0.99 // No puede ser 1. Genera lineas
var Plyr

var buildVideo = function (videoId, videoComponent, videoComponentPlayer) {
  console.log('Build', videoId)

  // Construimos el video correspondiente
  var player = new Plyr(videoComponent, {
    autoplay: true,
    autopause: true,
    muted: true,
    hideControls: false,
    displayDuration: true,
    loop: { active: true },
    controls: [ ] // El array vacío oculta los controles      controls : [ 'play', 'progress' ]
  })

  // Guarda el video contruido en el array
  arrayVideos[videoId] = player
  changeItemStatus(videoId, 'no-loaded', 'is-loading')

  // Si se para despues de construirlo, lo podemos a reproducirse con el ready
  arrayVideos[videoId].on('ready', function () { arrayVideos[videoId].play() })
  showAndPlayItem(videoId, videoComponentPlayer)
}

// Get $(this) element as parameter and apply to the loader same width and height as video
var setItemLoaderSize = function (video) {
  var vidH = video.find('.plyr').height() + 1
  var vidW = video.find('.plyr').width() + 1

  if (video !== undefined) {
    video.find('.project__loader').width(vidW).height(vidH)
  }
}

var toggleLoader = function (videoId, videoLoader) {
  console.log('Toggle Loader', videoId)

  if (videoLoader.is('.is-hidden')) {
    videoLoader.stop(true, true).fadeIn(function () {
      videoLoader.removeClass('is-hidden').addClass('is-visible')
    })
  } else {
    videoLoader.stop(true, true).fadeOut(function () {
      videoLoader.removeClass('is-visible').addClass('is-hidden').css('background-color', 'rgba(0, 0, 0,  ' + loaderIsLoadedOpacity + ')')
      videoLoader.find('.project__loader__bar').hide()
    })
  }
}

var togglePlayAndLoaderVideo = function (videoId, videoLoader) {
  console.log('Toggle Play and Loader', videoId)
  arrayVideos[videoId].togglePlay()
  if (arrayVideos[videoId].paused) {
    videoLoader.stop(true, true).fadeOut(function () {
      videoLoader.removeClass('is-visible').addClass('is-hidden').css('background-color', 'rgba(0, 0, 0,  ' + loaderIsLoadedOpacity + ')')
      videoLoader.find('.project__loader__bar').hide()
    })
    $('.cursor').removeClass('pause').addClass('play')
  } else if (arrayVideos[videoId].playing) {
    videoLoader.stop(true, true).fadeIn(function () {
      videoLoader.removeClass('is-hidden').addClass('is-visible')
    })
    $('.cursor').removeClass('play').addClass('pause')
  }
}

var showItemLoader = function (videoId, videoLoader, videoWrapper) {
  console.log('Show Loader', videoId)

  videoLoader.stop(true, true).fadeIn(function () {
    videoLoader.removeClass('is-hidden').addClass('is-visible')
    videoLoader.find('.project__loader__bar').show()
    // sendVideoToViewport (videoId,videoWrapper);
  })
}

var hideItemLoader = function (videoId, videoLoader) {
  console.log('Hide Loader', videoId)

  videoLoader.stop(true, true).fadeOut(function () {
    videoLoader.removeClass('is-visible').addClass('is-hidden')
    videoLoader.find('.project__loader__bar').hide()
  })
}

var changeItemStatus = function (videoId, oldStatus, newStatus) {
  $('#project__' + videoId).removeClass(oldStatus).addClass(newStatus)
}

var followItemProgress = function (videoId, arrayVideos, videoLoader, videoLoaderBar, videoWrapper) {
  arrayVideos[videoId].on('timeupdate', function () {
    // console.log("Tiempo",arrayVideos[videoId].currentTime);

    console.log('Current time', videoId, arrayVideos[videoId].currentTime)
    console.log('Total duration', videoId, arrayVideos[videoId].duration)

    if (arrayVideos[videoId].currentTime < timeIsLoaded && !$('#project__' + videoId).is('.is-loaded')) {
      // Mientras el video está en estado en loading, lo mantiene muteado
      arrayVideos[videoId].volume = minVolume
    } else if (arrayVideos[videoId].currentTime >= timeIsLoaded && !$('#project__' + videoId).is('.is-loaded')) {
      // Cuando el video llega al tiempo indicado, y no está cargado
      // Cambia de estado, envia el video al viewport, activa el volumen
      // y oculta el loader
      arrayVideos[videoId].volume = maxVolume
      sendVideoToViewport(videoId, videoWrapper)
      toggleLoader(videoId, videoLoader)
      changeItemStatus(videoId, 'is-loading', 'is-loaded')
    } else {
      // Move progress bar of current video
      var dur = mapDurationVideo(arrayVideos[videoId].currentTime, 0, arrayVideos[videoId].duration, 0, 100)
      $('#project__' + videoId + ' .progress').css('width', dur + '%')
    }
  })
}

var showAndPlayItem = function (videoId, videoComponentPlayer) {
  videoComponentPlayer.stop(true, true).fadeIn(function () {
    arrayVideos[videoId].play()
  })
}

// Finally this function send to viewport the video
var sendVideoToViewport = function (videoId, videoWrapper) {
  // videoWrapper.css('visibility', 'visible');
  videoWrapper.css('margin-left', '0')
}

var hideAndStopItem = function (videoId, videoLoader, videoComponentPlayer) {
  hideItemLoader(videoId, videoLoader)
  videoComponentPlayer.stop(true, true).fadeOut('fast', function () {
    arrayVideos[videoId].pause()
  })
}

var hideAll = function () {
  $('.project__video__wrapper').hide()
  $('.project__loader').hide()
}

var pauseAllVideos = function () {
  arrayVideos.forEach(function (arrv, index) {
    arrayVideos[index].pause()
  })
}

var mapDurationVideo = function (num, inMin, inMax, outMin, outMax) {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

var hoverProjects = function (event) {
  event.preventDefault()

  // Local variables of this event
  var videoId = $(this).attr('id').split('project__')[1]
  var videolink = $(this)
  var videoComponent = $(this).find('.js-player')
  var videoComponentPlayer = $(this).find('.project__video__wrapper')
  var videoLoader = $(this).find('.project__loader')
  var videoLoaderBar = $(this).find('.project__loader__bar')
  var videoWrapper = $(this).find('.project__video__wrapper')

  console.log('Enter', videoId)

  $('.cursor').addClass('play')

  if ($(this).is('.no-loaded')) {
    // El video no existe
    // Mostramos el loader
    // Y seguimos el video
    buildVideo(videoId, videoComponent, videoComponentPlayer)
    setItemLoaderSize($(this))
    animateTheLoader(videoId)
    showItemLoader(videoId, videoLoader, videoWrapper)
    followItemProgress(videoId, arrayVideos, videoLoader, videoLoaderBar, videoWrapper)
    showAndPlayItem(videoId, videoComponentPlayer)

    console.log('Play', videoId)
  } else if ($(this).is('.is-loading')) {
    // El video ya existe
    // Mostramos el loader mientras carga
    // Y lo monstramos y reproducimos
    showAndPlayItem(videoId, videoComponentPlayer)
    showItemLoader(videoId, videoLoader)
    setItemLoaderSize($(this))

    console.log('Play', videoId)
  } else if ($(this).is('.is-loaded')) {
    // El video ya existe
    // Se muestra directamente
    showAndPlayItem(videoId, videoComponentPlayer)
    setItemLoaderSize($(this))

    console.log('Play', videoId)
  }
}

var outProjects = function (event) {
  event.preventDefault()

  var videoId = $(this).attr('id').split('project__')[1]
  var videoComponent = $(this).find('.js-player')
  var videoComponentPlayer = $(this).find('.project__video__wrapper')
  var videoLoader = $(this).find('.project__loader')
  var videoLoaderBar = $(this).find('.project__loader__bar')
  var videoWrapper = $(this).find('.project__video__wrapper')

  console.log('Leave', videoId)

  // Mouseout de los videos
  // Se ocultran y se para
  hideAndStopItem(videoId, videoLoader, videoComponentPlayer)
  hideAll()
  $('.cursor').removeClass('play').removeClass('pause')
}

// Mouseenter and out trigger function
$('#projects').hoverIntent(hoverProjects, outProjects, '.project__link', 5000)

// Click en proyecto
$('.project').on('click', '.project__link', function (event) {
  event.preventDefault()

  var videoId = $(this).attr('id').split('project__')[1]
  var videoComponent = $(this).find('.js-player')
  var videoComponentPlayer = $(this).find('.project__video__wrapper')
  var videoComponentPlayerMobile = $(this).find('.project__video__wrapper__mobile')
  var videoLoader = $(this).find('.project__loader')
  var videoLoaderBar = $(this).find('.project__loader__bar')
  var videoWrapper = $(this).find('.project__video__wrapper')

  if (event.type == 'click') {
    if ($(this).is('.is-loaded')) {
      togglePlayAndLoaderVideo(videoId, videoLoader)
    }
  }
})

