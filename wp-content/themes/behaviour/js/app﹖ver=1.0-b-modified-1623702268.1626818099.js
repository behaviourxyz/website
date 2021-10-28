jQuery(document).ready(function($){


     /***
      *
      *  header
      * 
      */

      document.querySelector('#hamburger').addEventListener('click', function(e){
          e.preventDefault();
          console.log(this);
          this.classList.toggle('is-active');
          $('.sm-nav').fadeToggle();
          document.querySelector('.sm-nav').classList.toggle('is-active');
          document.querySelector('.site-header').classList.toggle('sm-nav-is-active');
      });


   /*

          HOME PAGE

   */

   // reel video
   if ($('#home-vid').length > 0) {
     var iframe = document.querySelector('iframe#home-vid');
     var player = new Vimeo.Player(iframe);
     player.on('ended', function() {

        //alert('Your Vimeo video has now ended');

     });

     $('#vid-play').on('click', function(e){
          player.play();
          console.log('play');
     });

     $(document).on('closed', '.remodal', function (e) {
            player.pause();
     });
}

      //gsap

     // init controller
     var controller = new ScrollMagic.Controller();


     // media query helper function : https://greensock.com/forums/topic/18719-how-to-manage-gsap-animation-in-mobile-device/
     function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
          var mql = window.matchMedia(mediaQuery);
          mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
          layoutChangedCallback(mql.matches);
     }





     // home reel and home hero  

     // * note eventually move off of greensock, not using it as much as initially planned to

     var reel = new ScrollMagic.Scene({
          triggerElement: "#home-hero",
          triggerHook: -.5,
          duration: '90%'	
     });


     installMediaQueryWatcher("(min-width: 767px)", function(matches) {
  
          if (matches) {
               var timeline = new TimelineMax()   
               .add(TweenMax.to('#reel-wrap', 1, {height: 60, width: 160, top: 10, ease:Power1.easeOut}))
               .add(TweenMax.to('#reel-wrap a', 1, {bottom: 16, ease:Power1.easeOut}), 0)
               // .add(TweenMax.to('#home-hero-3', 1, {bottom: '40%',backgroundSize: '133%', ease:Power1.easeOut}), 0)
               // .add(TweenMax.to('#home-hero-1', 1, {scale: 1.333, top: '80%',  ease:Power1.easeOut}), 0);
               reel.setTween(timeline);
            
          } else {
               var timeline = new TimelineMax()   
               .add(TweenMax.to('#reel-wrap', 1, {height: 33, width: 120, top: 10, ease:Power1.easeOut}))
               .add(TweenMax.to('#reel-wrap a', 1, {bottom: 5, ease:Power1.easeOut}), 0)
               // .add(TweenMax.to('#home-hero-3', 1, {bottom: '40%',backgroundSize: '133%', ease:Power1.easeOut}), 0)
               // .add(TweenMax.to('#home-hero-1', 1, {scale: 1.333, top: '80%',  ease:Power1.easeOut}), 0);
               reel.setTween(timeline);
          }
     });
     reel
     .addTo(controller); 


     // home project-list
    /* var homeList = new ScrollMagic.Scene({
		triggerElement: "#home-project-list",
		duration: '100%'
	})
     .setClassToggle("body", "snap")
    
     .addTo(controller); // assign the scene to the controller */
     
     window.almComplete = function(alm){

          // work
          $('.home-project-list-article').each(function(){
         
               let article = '#' + $(this).attr('id');
               console.log(article);
              
               var myScene = new ScrollMagic.Scene({
               triggerElement: this,
               duration: '100%'
               })
               .on('start', function(){
                    let article = this.triggerElement().id;
                   // $(article + " .home-article-contain").toggleClass('zoomIn');
        
               })
             
               //.setTween(TweenMax.to(article + " .home-article-contain img", 1, {scale: 1.2}))
               .setClassToggle(article, "active")
           
               .addTo(controller);
          }); 

          // learn (move to own file)
          $('.what-we-learn-item').each(function(){


               var currentArticle = this;
          
          
               var sceneClear = new ScrollMagic.Scene({
                    triggerElement: currentArticle,
                    duration: '75%'
                   // offset: -$(window).height()*0.7
               })
                   .setClassToggle(currentArticle, 'clear')
                   .addTo(controller);
          
          });
     };
    
   





     /*

          WHO WE ARE

     */



//     $('.who-article').each(function(){


//      var currentMember = this;
//      var currentSpeed = $(this).data('speed');
//      console.log(currentSpeed);

//      var tweenTeam = new TimelineMax()
//          .to(currentMember, 1, {y: currentSpeed,  filter: "blur(0)",
//          autoRound: false});
         
 
//      var scene = new ScrollMagic.Scene({
//           triggerElement: currentMember, 
//           duration: '150%',
//           triggerHook: 'onEnter'
        
//      })
//          .setTween(tweenTeam)
//          .addIndicators({  })
//          .addTo(controller);

//      var sceneClear = new ScrollMagic.Scene({
//           triggerElement: currentMember
//      })
//          .setClassToggle(currentMember, 'clear')
//          .addTo(controller);

//      });





     /*

          WHAT WE LEARN

     */


 


     // WHAT WE DO

     $('#read-more, #read-more-sm').on('click', function(e){
          $(this).hide();
          $('.project-info-box, .process-box').removeClass('hide-me');
     })





     

});