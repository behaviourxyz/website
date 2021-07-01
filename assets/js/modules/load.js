/* eslint-env jquery */
var loadPage = {
  queue: false,
  isLoading: false,
  init: function () {

  },
  firstLoad: function () {

  }
}

var basicTimeline = anime.timeline()

basicTimeline
  .add({
    targets: '.loader',
    height: '100%',
    width: '20px',
    duration: 2000,
    easing: 'easeOutExpo',
    autoplay: false,
    delay: 500,
    complete: function (anim) {

    }
  })
  .add({
    targets: '.loader',
    width: '100%',
    duration: 1000,
    easing: 'easeOutExpo',
    autoplay: false,
    complete: function (anim) {
      console.log(this)
      $('.loader').hide()
      $('.wrapper').show()
    }
  })
  .add({
    targets: 'header',
    translateY: 20,
    duration: 500,
    opacity: 1,
    easing: 'easeOutExpo',
    autoplay: false
  })
  .add({
    targets: '#projects li',
    duration: 500,
    easing: 'easeOutExpo',
    opacity: {
      value: 1,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: function (el, i, l) {
        return i * 200
      }
    },
    autoplay: false,
    complete: function () {
      $('#projects li').removeClass('no-animated').addClass('is-animated')
    }
  })

// Projects load on home
var animateTheProjects = anime({
  targets: '#projects li',
  duration: 1000,
  easing: 'easeOutExpo',
  opacity: {
    value: 1,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: function (el, i, l) {
      return i * 200
    }
  },
  autoplay: false,
  complete: function () {
    $('#projects li').removeClass('no-animated').addClass('is-animated')
  }
})

$(document).ready(function () {
  // Animation list of projects
  // loadPage.init()
})
