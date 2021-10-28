jQuery(document).ready(function($){

     /* faux loader */

     setTimeout(function(e){
          $('.faux-loader').fadeOut();
     }, 500)

     /** 
      * 
      *  Splash
      * 
      */

     $('#si-1').grouploop();
     $('#si-2').grouploop();
     $('#si-3').grouploop();


     var splash0 = new Waypoint({
          element: document.getElementById('splash-0'),
          handler: function(direction) {
               if(direction === 'down') {    
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-1').classList.toggle('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    console.log('firsty')
               }
          },
          offset: '50%'
          

          
     })

     var splash0b = new Waypoint.Inview({
          element: document.getElementById('splash-0'),
          enter: function(direction) {
               if(direction === 'up') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-1').classList.toggle('visible')
                    console.log('up')
               }
          }
     })
     var splash1 = new Waypoint({
          element: document.getElementById('splash-1'),
          handler: function(direction) {
               if(direction === 'down') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-2').classList.toggle('visible')
               }
          },
          offset: '50%'
     })
     var splash1b = new Waypoint.Inview({
          element: document.getElementById('splash-1'),
          enter: function(direction) {
               if(direction === 'up') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-2').classList.toggle('visible')
               }
          }
     })
   
     var splash2 = new Waypoint({
          element: document.getElementById('splash-2'),
          handler: function(direction) {
               if(direction === 'down') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-3').classList.toggle('visible')
               }
          },
          offset: '50%'
     })

     var splash2b = new Waypoint.Inview({
          element: document.getElementById('splash-2'),
          enter: function(direction) {
               if(direction === 'up') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-3').classList.toggle('visible')
               }
          }
     })


     var splash3 = new Waypoint({
          element: document.getElementById('splash-3'),
          handler: function(direction) {
               if(direction === 'down') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-4').classList.toggle('visible')
               }
          },
          offset: '50%'
     })

     var splash3b = new Waypoint.Inview({
          element: document.getElementById('splash-3'),
          enter: function(direction) {
               if(direction === 'up') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-4').classList.toggle('visible')
               }
          }
     })

     var splash4 = new Waypoint({
          element: document.getElementById('splash-4'),
          handler: function(direction) {
               if(direction === 'down') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-5').classList.toggle('visible')
               }
          },
          offset: '50%'
     })

     var splash4b = new Waypoint.Inview({
          element: document.getElementById('splash-4'),
          enter: function(direction) {
               if(direction === 'up') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-5').classList.toggle('visible')
               }
          }
     })
     var splash5 = new Waypoint({
          element: document.getElementById('splash-5'),
          handler: function(direction) {
               if(direction === 'down') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-6').classList.toggle('visible')
               }
          },
          offset: '50%'
     })

     var splash5b = new Waypoint.Inview({
          element: document.getElementById('splash-5'),
          enter: function(direction) {
               if(direction === 'up') {
                    jQuery('.splash-bkg').removeClass('visible')
                    //document.querySelector('.splash-bkg').classList.remove('visible')
                    document.querySelector('#splash-img-section-6').classList.toggle('visible')
               }
          }
     })


});