function animateTheLoader (videoId) {
  anime({
    targets: '#project__' + videoId + ' .project__loader__bar',
    width: [
      { value: '100%', duration: 600, delay: 0, elasticity: 100 },
      { value: '100%', duration: 600, delay: 0, elasticity: 100 },
      { value: '100%', duration: 600, delay: 0, elasticity: 100 }
    ],
    translateX: [
      { value: 0, duration: 600, delay: 0, elasticity: 100 },
      { value: '100%', duration: 600, delay: 0, elasticity: 100 }
    ],
    duration: 7000,
    easing: 'easeOutCubic',
    loop: true
  })
}

