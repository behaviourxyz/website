/*! laytheme-carousel 05-03-2021 */

var layCarousel=function(){var a=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);null==a&&(a=!1);var e=/iPad|iPhone|iPod/.test(navigator.platform),s=!1,l={showCircles:!1,showCaptions:!1,showNumbers:!1,numbersPosition:"",captionsPosition:"",showArrowButtons:!1,lazyload:!1,alignSink:!1,showArrowButtonsForTouchDevices:!1,pauseAutoPlayOnHover:!1},t=function(){"on"==layCarouselPassedData.showCaptions&&"on"!=layCarouselPassedData.showCircles?jQuery(".lay-carousel-wrap").each(function(){var a=jQuery(this).find(".lay-carousel"),e=jQuery(this).find(".lay-carousel-sink"),s=this.offsetWidth,l=jQuery(this).find(".single-caption").length;if(jQuery(this).find(".captions-slider").css("width",l*s+"px"),jQuery(this).find(".single-caption").css("width",s+"px"),a.hasClass("transition-fading")||a.hasClass("transition-immediate")){var t=jQuery(this).data("layslider");void 0!==t&&r(e,t.ix)}else{var i=jQuery(this).data("myswiper");if(void 0!==i){var o=i.realIndex;r(e,o)}}jQuery(this).find(".lay-carousel-sink").addClass("show-sink")}):jQuery(".lay-carousel-sink").addClass("show-sink")},r=function(a,e){if(0!=a.length){var s=a.find(".captions-inner"),l=s.find(".single-caption").first(),t=0<l.length?l[0].getBoundingClientRect().width:0;s.css({transform:"translateX("+-t*e+"px)","-webkit-transform":"translateX("+-t*e+"px)"})}},i=function(){jQuery(window).off("resize",n),jQuery(window).on("resize",n)},o=window.innerWidth,n=function(){o!=window.innerWidth&&(layCarousel.sizeCaptions(),layCarousel.repositionSliders()),o=window.innerWidth},u=function(){jQuery(".lay-carousel video").each(function(){this.addEventListener("loadedmetadata",function(a){d()})})},d=function(){jQuery(".lay-carousel.transition-sliding").each(function(){jQuery(this.parentNode).data("myswiper").update()})};return{initModule:function(){lay_set_w100h100_classes(),setTimeout(function(){switch(lay_carousel_set_element_widths(),function(){if(s=!1,layCarousel.isTouchDevice){var a=new MobileDetect(window.navigator.userAgent);if("iOS"==a.os()&&"Safari"==a.userAgent()&&10<=a.version("Safari"))return s=!0;if("AndroidOS"==a.os()&&"Chrome"==a.userAgent()&&53<=a.version("Chrome"))return s=!0;s=!0}}(),""==layCarouselPassedData.rightButton&&l.showArrowButtons&&jQuery(".lay-carousel-wrap .lay-carousel.enable-click-and-drag").addClass("default-arrowbuttons"),""==layCarouselPassedData.rightButton&&l.showArrowButtonsForTouchDevices&&layCarousel.isTouchDevice&&jQuery(".lay-carousel-wrap .lay-carousel.enable-click-and-drag").addClass("default-arrowbuttons"),setTimeout(function(){layCarousel.swiper.initModule(),layCarousel.fadeCarousel.initModule(),setTimeout(function(){d(),u(),t(),lay_carousel_setsizes()},0)},0),layCarouselPassedData.mousecursor){case"right":jQuery(".lay-carousel.enable-click-and-drag").addClass("cursor-right");break;case"leftright":jQuery(".lay-carousel.enable-click-and-drag").on("mousemove",function(a){var e=this.getBoundingClientRect();a.clientX<e.width/2+e.left?jQuery(this).addClass("cursor-left").removeClass("cursor-right"):jQuery(this).addClass("cursor-right").removeClass("cursor-left")});break;case"none":jQuery(".lay-carousel.enable-click-and-drag").addClass("no-cursor");break;case"pointer":jQuery(".lay-carousel.enable-click-and-drag").addClass("pointer")}i()},0)},configMap:l,showCaption:r,sizeCaptions:t,isTouchDevice:a,isIOS:e,repositionSliders:d,setConfigMap:function(){"on"==layCarouselPassedData.alignSink&&(l.alignSink=!0),"on"==layCarouselPassedData.lazyload&&(l.lazyload=!0),"on"==layCarouselPassedData.showCaptions&&(l.showCaptions=!0),l.showCaptions&&(l.captionsPosition="captions-"+layCarouselPassedData.captionsPosition),"on"==layCarouselPassedData.showNumbers&&(l.showNumbers=!0),l.showNumbers&&(l.numbersPosition="numbers-"+layCarouselPassedData.numbersPosition),"on"==layCarouselPassedData.showCircles&&(l.showCircles=!0,l.showCaptions=!1,l.showNumbers=!1),"on"==layCarouselPassedData.showArrowButtons&&(l.showArrowButtons=!0),"on"==layCarouselPassedData.showArrowButtonsForTouchDevices&&(l.showArrowButtonsForTouchDevices=!0),"on"==layCarouselPassedData.pauseAutoplayOnHover&&(l.pauseAutoPlayOnHover=!0)},alignSink:function(a,e){if(0!=a.find(".lay-carousel-slide.is-selected").length&&1==layCarousel.configMap.alignSink&&a.hasClass("no-fixed-slides-width")&&a.hasClass("dont-fill-slides")&&a.hasClass("dont-show-multiple-slides")){var s=a.find(".numbers"),l=a.find(".lay-carousel-sink"),t=a.find(".lay-carousel-slide.is-selected .slide-inner>*").first()[0].getBoundingClientRect(),i=a.find(".lay-carousel-slide.is-selected")[0].getBoundingClientRect(),o=t.left-i.left,r=i.right-t.right;if(a.find(".is-selected").hasClass("lay-carousel-slide-html5video")){if(a.find(".is-selected .video-slide").hasClass("h100")){var n=i.height/a.find(".is-selected .video-slide").attr("data-ar");o=(i.width-n)/2,r=(i.width-n)/2}}else(a.find(".is-selected").hasClass("lay-carousel-slide-img")||a.find(".is-selected").hasClass("lay-carousel-slide-postThumbnail"))&&a.find(".is-selected img").hasClass("h100")&&(n=i.height/a.find(".is-selected img").attr("data-ar"),o=(i.width-n)/2,r=(i.width-n)/2);1==layCarousel.configMap.showNumbers&&(l.hasClass("sink-only-numbers")?"numbers-right"==layCarousel.configMap.numbersPosition?s.css("right",r):"numbers-left"==layCarousel.configMap.numbersPosition&&s.css("left",o):"numbers-right"==layCarousel.configMap.numbersPosition?s.css("margin-right",r):"numbers-left"==layCarousel.configMap.numbersPosition&&s.css("margin-left",o)),1==layCarousel.configMap.showCaptions&&("captions-right"==layCarousel.configMap.captionsPosition?l.find(".single-caption.ix-"+e+" .single-caption-inner").css("padding-right",r):"captions-left"==layCarousel.configMap.captionsPosition&&l.find(".single-caption.ix-"+e+" .single-caption-inner").css("padding-left",o))}},isElVisibleInsideCarousel:function(a,e,s){var l=a.getBoundingClientRect(),t=e.getBoundingClientRect(),i=!1,o=l.left-s,r=l.right+s;t.left>=o&&t.left<=r&&(i=!0),t.right>=o&&t.right<=r&&(i=!0);var n=t.left+t.width/2;return o<=n&&n<=r&&(i=!0),i},loadNotLazyloadingImagesIn:function(a){1!=l.lazyload&&(a.find("img.carousel-responsive-img").each(function(){var a=jQuery(this).attr("data-lay-srcset");jQuery(this).attr("srcset",a);var e=jQuery(this).attr("data-lay-src");jQuery(this).attr("src",e);var s=this;s.complete?s.classList.add("loaded"):s.onload=function(){s.classList.add("loaded")}}),a.find("img.carousel-original-img").each(function(){var a=jQuery(this).attr("data-lay-src");jQuery(this).attr("src",a);var e=this;e.complete?e.classList.add("loaded"):e.onload=function(){e.classList.add("loaded")}}))},lazyLoadCarouselImage:function(a){if(1==l.lazyload)if(a.complete?a.classList.add("loaded"):a.onload=function(){a.classList.add("loaded")},jQuery(a).hasClass("carousel-original-img")){var e=jQuery(a).attr("data-lay-src");jQuery(a).attr("src",e)}else if(jQuery(a).hasClass("carousel-responsive-img")){var s=jQuery(a).attr("data-lay-srcset");e=jQuery(a).attr("data-lay-src"),jQuery(a).attr({src:e,srcset:s})}},isCarouselVisibleInViewport:function(a){var e=a.getBoundingClientRect();return e.top-200<=window.innerHeight&&0<=e.bottom},playVideo:function(a){(s&&layCarousel.isTouchDevice||!layCarousel.isTouchDevice)&&0!=a.length&&a[0].paused&&(a[0].currentTime=0,a[0].play(),a.on("canplay",function(){this.currentTime=0,this.play(),a.off("canplay")}))},lazyLoadVideo:function(a){a.hasAttribute("preload")&&"none"==jQuery(a).attr("preload")&&(jQuery(a).removeAttr("preload"),a.addEventListener("loadeddata",function(){jQuery(this).addClass("loaded")}),a.addEventListener("canplay",function(){jQuery(this).addClass("loaded")}),a.addEventListener("play",function(){jQuery(this).addClass("loaded")}),a.load())}}}();window.laytheme.on("newpageshown",function(){layCarousel.initModule()}),window.laytheme.on("tabhidden",function(){layCarousel.swiper.pauseAllAutoplays(),layCarousel.fadeCarousel.pauseAllAutoplays()}),window.laytheme.on("tabshown",function(){layCarousel.swiper.resumeAllAutoplays(),layCarousel.fadeCarousel.resumeAllAutoplays()}),window.laytheme.on("sizechanged",function(){layCarousel.swiper.lazyLoadAndPausePlayVideosOnScroll(),layCarousel.fadeCarousel.lazyLoadAndPausePlayVideosOnScroll()});var eventsChannel=Backbone.Radio.channel("events");eventsChannel.on("scroll",function(){layCarousel.swiper.lazyLoadAndPausePlayVideosOnScroll(),layCarousel.fadeCarousel.lazyLoadAndPausePlayVideosOnScroll()}),jQuery(window).on("fpAfterLoad fpAfterSlideLoad",function(){layCarousel.swiper.lazyLoadAndPausePlayVideosOnScroll(),layCarousel.fadeCarousel.lazyLoadAndPausePlayVideosOnScroll()}),eventsChannel.on("scroll",function(){layCarousel.swiper.lazyLoadAndPausePlayVideosOnScroll(),layCarousel.fadeCarousel.lazyLoadAndPausePlayVideosOnScroll()}),layCarousel.setConfigMap(),layCarousel.fadeCarousel=function(){var u={sliders:[]},d=function(a,e,s,l,t){this.autoplay=a,this.$wrap=e,this.$carousel=e.find(".lay-carousel"),this.length=s,this.ix=l,this.loop=t,this.$sink=e.find(".lay-carousel-sink"),this.$circlesContainer=e.find(".laycarousel-bullets"),this.$numbers=e.find(".numbers")},a=function(){layCarousel.configMap.showCircles&&jQuery(".lay-carousel-wrap.no-swiper.show-circles .lay-carousel.enable-click-and-drag .swiper-pagination-bullet").on("click",function(a){a.stopPropagation();var e=jQuery(this).closest(".lay-carousel-wrap").data("layslider"),s=jQuery(this).index();e.ix=s,p(e),f(e)})},e=function(){"on"==layCarouselPassedData.pauseAutoplayOnHover&&jQuery(".lay-carousel.transition-fading.enable-click-and-drag, .lay-carousel.transition-immediate.enable-click-and-drag").on("mouseenter",function(a){layCarousel.isTouchDevice||C(jQuery(this.parentNode).data("layslider"))}).on("mouseleave",function(){if(!layCarousel.isTouchDevice){var a=jQuery(this.parentNode).data("layslider");g(a)}}),jQuery(".lay-carousel.transition-fading.enable-click-and-drag, .lay-carousel.transition-immediate.enable-click-and-drag").on("click",function(a){var e=jQuery(this.parentNode).data("layslider");f(e),jQuery(a.target).hasClass("laycarousel-custom-button")||jQuery(a.target).hasClass("html5video-customplayicon")||jQuery(a.target.parentNode).hasClass("flickity-prev-next-button")||jQuery(a.target).hasClass("flickity-prev-next-button")||jQuery(a.target).hasClass("lay-mute-unmute-button")||jQuery(a.target.parentNode).is("a")||jQuery(a.target).is("a")||(jQuery(this).hasClass("cursor-left")?n(e):r(e))})},s=function(){jQuery(".lay-carousel-wrap.no-swiper .lay-carousel.enable-click-and-drag .flickity-prev-next-button").on("click",function(a){a.stopPropagation();var e=jQuery(this).closest(".lay-carousel-wrap").data("layslider");f(e),jQuery(a.target.parentNode).is("a")||jQuery(a.target).is("a")||(jQuery(this).hasClass("previous")?n(e):r(e))})},l=function(){for(i=0;i<u.sliders.length;i++){var a=u.sliders[i];_.has(a,"interval")&&clearInterval(a.interval)}u.sliders=[],jQuery(".lay-carousel.transition-fading, .lay-carousel.transition-immediate").each(function(){var a=jQuery(this.parentNode);a.addClass("fadeSlider");var e=jQuery(this).find(".lay-carousel-slide").length,s=jQuery(this).hasClass("autoplay"),l=jQuery(this.parentNode).hasClass("loop-slides"),t=new d(s,jQuery(this.parentNode),e,0,l);a.data("layslider",t),u.sliders.push(t);var i=layCarousel.configMap.showArrowButtons||layCarousel.configMap.showArrowButtonsForTouchDevices&&layCarousel.isTouchDevice;if(jQuery(this).hasClass("disable-click-and-drag")&&(i=!1),i){var o='<svg viewBox="0 0 100 100"><path d="M 20,50 L 75,100 L 80,95 L 30,50  L 80,5 L 75,0 Z" class="arrow"></path></svg>',r='<svg viewBox="0 0 100 100"><path d="M 20,50 L 75,100 L 80,95 L 30,50  L 80,5 L 75,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>';if(""!=layCarouselPassedData.rightButton&&(r='<img class="laycarousel-custom-button next" src="'+layCarouselPassedData.rightButton+'" alt="">',o='<img class="laycarousel-custom-button prev" src="'+layCarouselPassedData.rightButton+'" alt="">'),""!=layCarouselPassedData.alt_rightButton){var n='<img class="laycarousel-custom-button next alt" src="'+layCarouselPassedData.alt_rightButton+'" alt="">';o+='<img class="laycarousel-custom-button prev alt" src="'+layCarouselPassedData.alt_rightButton+'" alt="">',r+=n}jQuery(this).append('<button class="flickity-prev-next-button previous" type="button">'+o+"</button>"),jQuery(this).append('<button class="flickity-prev-next-button next" type="button">'+r+"</button>")}setTimeout(function(){p(t)},0),jQuery(this.parentNode).addClass("initialized")}),t()},t=function(){var e;for(e=0;e<u.sliders.length;e++)!function(){var a=u.sliders[e];1==a.autoplay&&(clearInterval(a.interval),a.interval=setInterval(function(){r(a)},layCarouselPassedData.autoplaySpeed))}()},o=function(a){if(jQuery(a).is(":visible")&&layCarousel.isCarouselVisibleInViewport(a)){var e=jQuery(a).find(".lay-carousel-slide:first-child img"),s=jQuery(a).find(".lay-carousel-slide").eq(1).find("img");0<e.length&&!e.hasClass("loaded")&&layCarousel.lazyLoadCarouselImage(e[0]),0<s.length&&!s.hasClass("loaded")&&0<e.length?e[0].complete?layCarousel.lazyLoadCarouselImage(s[0]):e[0].addEventListener("load",function(){layCarousel.lazyLoadCarouselImage(s[0])}):0<s.length&&!s.hasClass("loaded")&&layCarousel.lazyLoadCarouselImage(s[0])}},r=function(a){var e=!0;a.ix++,a.ix>a.length-1&&(a.loop?a.ix=0:(a.ix=a.length-1,e=!1)),c(a),e&&(p(a),1==layCarousel.configMap.lazyload&&y(a))},n=function(a){var e=!0;a.ix--,a.ix<0&&(a.loop?a.ix=a.length-1:(a.ix=0,e=!1)),c(a),e&&(p(a),1==layCarousel.configMap.lazyload&&h(a))},c=function(a){0==a.loop&&(0==a.ix?a.$wrap.removeClass("hide-next-related-ui").addClass("hide-previous-related-ui"):a.ix==a.length-1?a.$wrap.removeClass("hide-previous-related-ui").addClass("hide-next-related-ui"):a.$wrap.removeClass("hide-previous-related-ui hide-next-related-ui"))},y=function(a){if(a.$carousel.is(":visible")){var e=a.ix+1;e>a.length-1&&(e=0);var s=a.$wrap.find(".lay-carousel-slide").eq(e).find("img");0<s.length&&!s.hasClass("loaded")&&layCarousel.lazyLoadCarouselImage(s[0])}},h=function(a){if(a.$carousel.is(":visible")){var e=a.ix-1;e<0&&(e=a.length-1);var s=a.$wrap.find(".lay-carousel-slide").eq(e).find("img");0<s.length&&!s.hasClass("loaded")&&layCarousel.lazyLoadCarouselImage(s[0])}},p=function(a){a.$wrap.find(".is-selected").removeClass("is-selected");var e=a.$wrap.find(".lay-carousel-slide").eq(a.ix);a.$wrap.find(".lay-carousel").hasClass("transition-fading")&&e.addClass("transition"),e.addClass("is-selected"),e.hasClass("lay-use-alt-buttons")&&""!=layCarouselPassedData.alt_rightButton?a.$wrap.addClass("alt-buttons"):a.$wrap.removeClass("alt-buttons"),layCarousel.configMap.showCircles&&(a.$circlesContainer.find(".swiper-pagination-bullet").removeClass("swiper-pagination-bullet-active"),a.$circlesContainer.find(".swiper-pagination-bullet").eq(a.ix).addClass("swiper-pagination-bullet-active")),layCarousel.configMap.showCaptions&&layCarousel.showCaption(a.$sink,a.ix),layCarousel.configMap.showNumbers&&a.$numbers.text(a.ix+1+"/"+a.length),w(a.$wrap[0]),layCarousel.alignSink(a.$wrap,a.ix),a.$wrap.trigger("laycarousel.select",[{slider:a}]),a.$carousel.trigger("laycarousel.select",[{slider:a}]);var s=e.find("img");layCarousel.configMap.lazyload&&a.$carousel.is(":visible")&&layCarousel.isCarouselVisibleInViewport(a.$carousel[0])&&0<s.length&&!s.hasClass("loaded")&&layCarousel.lazyLoadCarouselImage(s[0])},f=function(a){"true"!=a.autoplay&&1!=a.autoplay||(C(a),clearTimeout(a.pauseTimeout),a.pauseTimeout=setTimeout(function(){g(a)},3e3))},C=function(a){_.has(a,"interval")&&clearInterval(a.interval)},g=function(a){1!=a.autoplay&&"true"!=a.autoplay||(clearInterval(a.interval),a.interval=setInterval(function(){r(a)},layCarouselPassedData.autoplaySpeed))},v=_.throttle(function(){jQuery(".no-swiper.lay-carousel-wrap").each(function(){layCarousel.configMap.lazyload&&o(this),w(this)})},100),w=function(a){if(void 0!==a){layCarousel.isCarouselVisibleInViewport(a)&&jQuery(a).is(":visible")||jQuery(a).find(".lay-carousel-slide video").each(function(){this.paused||this.pause()});var e=jQuery(a).find(".lay-carousel-slide.is-selected video");1==e.length&&jQuery(a).is(":visible")&&layCarousel.isCarouselVisibleInViewport(a)&&layCarousel.playVideo(e)}};return{initModule:function(){l(),a(),s(),e()},loadFirstLazyImage:function(a){layCarousel.configMap.lazyload&&a.find(".no-swiper.lay-carousel-wrap").each(function(){o(this)})},resumeAllAutoplays:function(){jQuery(".lay-carousel.autoplay.no-swiper").each(function(){var a=jQuery(this.parentNode).data("layslider");"true"!=a.autoplay&&1!=a.autoplay||g(a)})},pauseAllAutoplays:function(){jQuery(".lay-carousel.autoplay.no-swiper").each(function(){var a=jQuery(this.parentNode).data("layslider");"true"!=a.autoplay&&1!=a.autoplay||C(a)})},lazyLoadAndPausePlayVideosOnScroll:v}}(),layCarousel.swiper=function(){var l=function(a){a.autoplay.stop(),clearTimeout(jQuery(a.el).data("pausetimeout"));var e=setTimeout(function(){a.autoplay.start()},3e3);jQuery(a.el).data("pausetimeout",e)},Q=function(a){jQuery(a.el.parentNode.parentNode).hasClass("pause-autoplay-on-hover")&&jQuery(a.el.parentNode).hasClass("autoplay")&&jQuery(a.el.parentNode).hasClass("enable-click-and-drag")&&e(a)},b=function(a){0==a.params.loop&&jQuery(a.el.parentNode.parentNode).removeClass("hide-previous-related-ui").addClass("hide-next-related-ui")},P=function(a){0==a.params.loop&&jQuery(a.el.parentNode.parentNode).removeClass("hide-next-related-ui").addClass("hide-previous-related-ui")},x=_.throttle(function(a){L(a)},200),L=function(a){0!=a.params.loop||a.isBeginning||a.isEnd||jQuery(a.el.parentNode.parentNode).removeClass("hide-previous-related-ui hide-next-related-ui")},k=function(a){if(jQuery(a.el).is(":visible")&&layCarousel.isCarouselVisibleInViewport(a.el)){var e=a.realIndex+1;e>a.slidesLength-1&&(e=0);var s=jQuery(a.el).find('.lay-carousel-slide[data-swiper-slide-index="'+e+'"] img');0<s.length&&s.each(function(){jQuery(this).hasClass("loaded")||layCarousel.lazyLoadCarouselImage(jQuery(this)[0])})}},N=function(a){if(jQuery(a.el).is(":visible")&&layCarousel.isCarouselVisibleInViewport(a.el)){var e=a.realIndex-1;e<0&&(e=a.slidesLength-1);var s=jQuery(a.el).find('.lay-carousel-slide[data-swiper-slide-index="'+e+'"] img');0<s.length&&s.each(function(){jQuery(this).hasClass("loaded")||layCarousel.lazyLoadCarouselImage(jQuery(this)[0])})}},e=function(a){jQuery(a.el.parentNode.parentNode).on("mouseenter",function(){a.autoplay.stop()}).on("mouseleave",function(){a.autoplay.start()})},z=function(a,e){var s=jQuery(a.el);setTimeout(function(){I(s),layCarousel.configMap.lazyload&&t(s),layCarousel.loadNotLazyloadingImagesIn(s)},e)},A=function(a){var e,s=a.realIndex,l=jQuery(a.el);s+1>a.slidesLength&&(s=0),jQuery(a.el).find(".lay-carousel-slide").eq(a.activeIndex).hasClass("lay-use-alt-buttons")&&""!=layCarouselPassedData.alt_rightButton?jQuery(a.el.parentNode.parentNode).addClass("alt-buttons"):jQuery(a.el.parentNode.parentNode).removeClass("alt-buttons"),(layCarousel.configMap.showCaptions||layCarousel.configMap.showNumbers)&&(e=jQuery(a.el.parentNode.parentNode).find(".lay-carousel-sink")),layCarousel.configMap.showCaptions&&layCarousel.showCaption(e,s),layCarousel.configMap.showNumbers&&e.find(".numbers").text(s+1+"/"+a.slidesLength);var t=jQuery(l[0].parentNode.parentNode);setTimeout(function(){layCarousel.alignSink(t,s)},0)},I=function(a){a.is(":visible")&&a.find(".lay-carousel-slide video").each(function(){layCarousel.isElVisibleInsideCarousel(a[0],this,0)&&layCarousel.isCarouselVisibleInViewport(a[0])?layCarousel.playVideo(jQuery(this)):this.pause(),layCarousel.isElVisibleInsideCarousel(a[0],this,10)&&layCarousel.isCarouselVisibleInViewport(a[0])&&layCarousel.lazyLoadVideo(this)})},t=function(a){layCarousel.configMap.lazyload&&a.is(":visible")&&a.find(".carousel-lazy-img:not(.loaded)").each(function(){1==layCarousel.isElVisibleInsideCarousel(a[0],this,10)&&layCarousel.isCarouselVisibleInViewport(a[0])&&layCarousel.lazyLoadCarouselImage(this)})};return{initModule:function(){jQuery(".lay-carousel.transition-sliding:not(.initialized)").each(function(){!function(a){var e={nextEl:null,prevEl:null};jQuery(a).hasClass("enable-click-and-drag")&&(e={nextEl:".flickity-prev-next-button.next",prevEl:".flickity-prev-next-button.previous"});var s=jQuery(a).hasClass("disable-click-and-drag"),l=!("grab"!=layCarouselPassedData.mousecursor&&!layCarousel.isTouchDevice&&!jQuery(a).hasClass("free-scroll"));s&&(l=!1);var t,i,o=jQuery(a).find(".lay-carousel-slide:not(.swiper-slide-duplicate)").length;if((layCarousel.configMap.showCaptions||layCarousel.configMap.showNumbers)&&(t=jQuery(a.parentNode).find(".lay-carousel-sink")),layCarousel.configMap.showNumbers&&t.find(".numbers").text("1/"+o),(layCarousel.configMap.showArrowButtons||layCarousel.configMap.showArrowButtonsForTouchDevices&&layCarousel.isTouchDevice)&&(i=!0),s&&(i=!1),i){var r='<svg viewBox="0 0 100 100"><path d="M 20,50 L 75,100 L 80,95 L 30,50  L 80,5 L 75,0 Z" class="arrow"></path></svg>',n='<svg viewBox="0 0 100 100"><path d="M 20,50 L 75,100 L 80,95 L 30,50  L 80,5 L 75,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>';if(""!=layCarouselPassedData.rightButton&&(n='<img class="laycarousel-custom-button next" src="'+layCarouselPassedData.rightButton+'" alt="">',r='<img class="laycarousel-custom-button prev" src="'+layCarouselPassedData.rightButton+'" alt="">'),""!=layCarouselPassedData.alt_rightButton){var u='<img class="laycarousel-custom-button next alt" src="'+layCarouselPassedData.alt_rightButton+'" alt="">';r+='<img class="laycarousel-custom-button prev alt" src="'+layCarouselPassedData.alt_rightButton+'" alt="">',n+=u}jQuery(a).find(".swiper-container").append('<button class="flickity-prev-next-button previous" type="button">'+r+"</button>"),jQuery(a).find(".swiper-container").append('<button class="flickity-prev-next-button next" type="button">'+n+"</button>")}layCarousel.configMap.showCircles&&0==s&&jQuery(a.parentNode).append('<div class="laycarousel-bullets"></div>');var d=!!jQuery(a).hasClass("autoplay")&&layCarouselPassedData.autoplaySpeed;0!=d&&(d={delay:d,disableOnInteraction:!1});var c=jQuery(a).hasClass("free-scroll");1==c&&0==s&&(draggable=!0);var y=jQuery(a.parentNode).hasClass("loop-slides"),h="on"==layCarouselPassedData.showCircles&&0==s,p=jQuery(a.parentNode).find(".laycarousel-bullets")[0],f=!1;1==h&&(f={el:p,type:"bullets",clickable:!0});var C=jQuery(a).hasClass("centered-slides"),g="auto";jQuery(a.parentNode).hasClass("dont-show-multiple-slides")&&(g=1);var v=0;jQuery(a).attr("data-spacebetween")&&(v=parseInt(jQuery(a).attr("data-spacebetween"),10));var w=jQuery(a).find(".swiper-container"),m=new Swiper(w[0],{speed:350,effect:"slide",spaceBetween:v,loop:y,freeMode:c,autoplay:d,slidesPerView:g,simulateTouch:l,pagination:f,centeredSlides:C,navigation:e,slideActiveClass:"is-selected",keyboard:{enabled:!0,onlyInViewport:!0},on:{slideChangeTransitionEnd:function(){z(this,0)},reachEnd:function(){b(this)},reachBeginning:function(){P(this)},slideChange:function(){L(this),A(this)},progress:function(){A(this),x(this)},slideNextTransitionStart:function(){k(this)},slidePrevTransitionStart:function(){N(this)},loopFix:function(){I(jQuery(this.el))}}});jQuery(a).addClass("initialized"),jQuery(a.parentNode).addClass("initialized"),jQuery(a.parentNode).data("myswiper",m),m.slidesLength=o,I(jQuery(a)),Q(m);var j=jQuery(a).find('.lay-carousel-slide[data-swiper-slide-index="0"]').not(".swiper-slide-duplicate").find("img");1==j.length?j[0].complete?k(m):j[0].addEventListener("loaded",function(){k(m)}):k(m),z(m,0)}(this)}),jQuery(".lay-carousel.transition-sliding.enable-click-and-drag").off("click"),jQuery(".lay-carousel.transition-sliding.enable-click-and-drag").on("click",function(a){if(!jQuery(a.target).hasClass("laycarousel-custom-button")&&!(jQuery(a.target).hasClass("html5video-customplayicon")||jQuery(a.target.parentNode).hasClass("flickity-prev-next-button")||jQuery(a.target).hasClass("flickity-prev-next-button")||jQuery(a.target).hasClass("lay-mute-unmute-button")||jQuery(a.target.parentNode.parentNode).is("a")||jQuery(a.target.parentNode).is("a")||jQuery(a.target).is("a"))){var e=jQuery(this.parentNode).data("myswiper"),s=jQuery(this).hasClass("autoplay");jQuery(this).hasClass("cursor-left")?e.slidePrev():e.slideNext(),s&&0==layCarousel.configMap.pauseAutoPlayOnHover&&l(e)}})},pauseAllAutoplays:function(){jQuery(".lay-carousel.transition-sliding.autoplay").each(function(){jQuery(this.parentNode).data("myswiper").autoplay.stop()})},resumeAllAutoplays:function(){jQuery(".lay-carousel.transition-sliding.autoplay").each(function(){jQuery(this.parentNode).data("myswiper").autoplay.start()})},lazyLoadAndPausePlayVideosOnScroll:_.throttle(function(){jQuery(".lay-carousel.transition-sliding").each(function(){var a=jQuery(this);setTimeout(function(){I(a),layCarousel.configMap.lazyload&&t(a)})})},100)}}();var lay_set_w100h100_classes=function(){jQuery(".lay-carousel-wrap.no-fixed-slides-width").each(function(){carouselAr=0;var a=jQuery(this).find(".lay-carousel");if(a[0].hasAttribute("data-carouselar"))carouselAr=parseFloat(a.attr("data-carouselar"));else{var e=a[0].getBoundingClientRect();carouselAr=e.height/e.width}jQuery(this).find(".lay-carousel-slide img, .lay-carousel-slide video").each(function(){var a=jQuery(this).attr("data-ar");carouselAr>a?jQuery(this).addClass("w100").removeClass("h100"):jQuery(this).addClass("h100").removeClass("w100")})})};jQuery(window).on("resize orientationchange",function(){lay_set_w100h100_classes()}),jQuery(window).on("resize orientationchange",function(){lay_carousel_set_element_widths()}),jQuery(window).on("resize orientationchange",_.debounce(function(){lay_carousel_setsizes()},300));var lay_carousel_setsizes=function(){jQuery(".lay-carousel-slide-img, .lay-carousel-slide-postThumbnail").each(function(){jQuery(this).find("img").each(function(){var a=jQuery(this).closest(".slide-inner")[0].getBoundingClientRect();if("cover"==jQuery(this).attr("data-parent-fit")){var e=parseInt(jQuery(this).attr("data-w"),10),s=parseInt(jQuery(this).attr("data-h"),10),l=0;if(e/s<a.width/a.height)l=a.width;else l=e/s*a.height;l=roundUpSizes(l),jQuery(this).attr("sizes",parseInt(l,10)+"px")}else if(0!=a.width){l=a.width;l=roundUpSizes(l),jQuery(this).attr("sizes",parseInt(l,10)+"px")}})})},roundUpSizes=function(a){for(var e=[265,512,768,1024,1280,1920,2560,3200,3840,4096],s=a,l=0;l<e.length;l++)if(a<=e[l]){s=e[l];break}return s},lay_carousel_set_element_widths=function(){jQuery(".lay-carousel-wrap.show-multiple-slides").each(function(){jQuery(this).find(".lay-carousel-slide img").each(function(){var a=parseInt(jQuery(this).height(),10),e=parseInt(jQuery(this).attr("data-w"),10),s=parseInt(jQuery(this).attr("data-h"),10);jQuery(this).css("width",e/s*a),jQuery(this).closest(".lay-carousel-slide").css("width",e/s*a)}),jQuery(this).find(".lay-carousel-slide video").each(function(){if(this.hasAttribute("data-w")){var a=parseInt(jQuery(this).height(),10),e=parseInt(jQuery(this).attr("data-w"),10),s=parseInt(jQuery(this).attr("data-h"),10);jQuery(this).css("width",e/s*a),jQuery(this).closest(".lay-carousel-slide").css("width",e/s*a)}})})};