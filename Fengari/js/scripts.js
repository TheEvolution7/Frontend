( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/


	
	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/
	var wow = new WOW({
		offset: 150,          
		mobile: false
	  }
	);
	$(document).ready(function() {
		setTimeout(() => {
			$('.loading-container').fadeOut(1000)
			wow.init();
		}, 5000);
		var revapi = $('#rev_slider')
		$(window).ready( function() {
			console.log('aaa')
			setTimeout(() => {
				if (typeof $.fn.revolution !== 'undefined') {

				$("#rev_slider").revolution({
				sliderType:"standard",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:7000,
				autoHeight: 'on',
				minHeight:380,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					onHoverStop:"off",
					touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
					},
					bullets: {
					enable: true,
					hide_onmobile: true,

					direction: "horizontal",
					container: 'layergrid',
					h_align: "right",
					v_align: "bottom",
					h_offset: 30,
					v_offset: 110,
					space: 12
				}
				},
				// parallax: {
				// 	type:"scroll",
				// 	origo:"slidercenter",
				// 	speed:300,
				// 	levels:[5,10,15,20,25,30,35,40,45,50,47,48,49,50,51,55],
				// 	disable_onmobile: 'on'
				// },
				responsiveLevels:[2048,1600,1260, 992],
				gridwidth:[1370,1100,900, 700],
				gridheight:[800],
				lazyType:"none",
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:0,
				shuffle:"off",
				autoHeight:"on",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: ".navbar",
				fullScreenOffset: "",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
				});
			}
				// revapi.revstart();
				// revapi.revnext();
			}, 4200);
	
		});
		
	})

	
	

	$(window).on('load', function(){

		
		
		
	});

	var navbar=$('.js-navbar:not(.navbar-fixed)');



	/*-------------------------------------------------------------------------------
	  Loader
	-------------------------------------------------------------------------------*/



	$(".animsition").animsition({
	   inClass: 'fade-in',
       outClass: 'fade-out',
	   inDuration: 1000,
	   outDuration: 700,
	   linkElement: '.menu-list a',
	   // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	   loading:true,
	   loadingParentElement: 'body', //animsition wrapper element
	   loadingClass: 'spinner',
	   loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>', // e.g '<img src="loading.svg" />'
	   timeout: false,
	   timeoutCountdown:5000,
	   onLoadEvent: true,
	   browser: [ 'animation-duration', '-webkit-animation-duration'],
	   // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	   // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	   overlay : false,
	   overlayClass : 'animsition-overlay-slide',
	   overlayParentElement : 'body',
	   transition: function(url){ window.location.href = url; }
	});



	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	    top: 50
	  }
	});


	navbar.on('affix.bs.affix', function() {
		if (!navbar.hasClass('affix')){
			navbar.addClass('animated slideInDown');
		}
	});

	navbar.on('affixed-top.bs.affix', function() {
	  	navbar.removeClass('animated slideInDown');
	  	
	});

	$('.nav-mobile-list li a[href="#"]').on('click',function(){
		$(this).closest('li').toggleClass('current');
		$(this).closest('li').children('ul').slideToggle(200);
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/



	$('.navbar-toggle').on('click',function(){
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	});

	$('.close-menu, .click-capture').on('click', function(){
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
		$('.menu-list ul').slideUp(300);
	});

	var dropToggle =$('.menu-list > li').has('ul').children('a');


	dropToggle.on('click',function(){
		dropToggle.not(this).closest('li').find('ul').slideUp(200);
		$(this).closest('li').children('ul').slideToggle(200);
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/



    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbar.outerHeight())
            }, 1000);
            return false;
        }
    });


    
    /*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/



	$(window).stellar({
	  	responsive: true,
	  	horizontalScrolling: false,
	  	hideDistantElements: false,
	  	horizontalOffset: 0,
	  	verticalOffset: 0,
	});



	/*-------------------------------------------------------------------------------
	  Projects grid
	-------------------------------------------------------------------------------*/



	function columnGrid(){
	  $('.js-grid-items').each(function(){
		  var colWrap =$(this).width(); 
		  var colItem = Math.floor(colWrap / 390); 
		  var colFixedItem = Math.floor(colWrap / colItem);
		  $(this).find('.js-grid-item').css({ 'width' : colWrap});
		  $(this).find('.js-grid-item').css({ 'width' : colFixedItem});
	  });
	}

	columnGrid();

	$(window).resize(function(){
		columnGrid();
	});



	/*-------------------------------------------------------------------------------
	  Hide project info
	-------------------------------------------------------------------------------*/



	$('.project-detail-control').on('click', function(){
		$(this).toggleClass('active');
		$(this).closest('.project-detail-info').find('.project-detail-content').slideToggle(200);
	});



	/*-------------------------------------------------------------------------------
	  Owl Carousel
	-------------------------------------------------------------------------------*/


	if ($('.owl-carousel').length > 0){



		/*-------------------------------------------------------------------------------
		  Partners Carousel
		-------------------------------------------------------------------------------*/



		$(".js-partners-carousel").owlCarousel({
			items : 5,
		    itemsDesktop : [1199,3],
		    itemsDesktopSmall : [980,2],
		    itemsTablet: [768,1],
		    itemsMobile : [479,1],
		    pagination:true,
		 	autoHeight : true
		});


		

		



		/*-------------------------------------------------------------------------------
		  Clients Carousel
		-------------------------------------------------------------------------------*/



		$(".js-client-carousel").owlCarousel({
			items : 2,
		    itemsDesktop : [1199,1],
		    itemsDesktopSmall : [980,1],
		    itemsTablet: [768,1],
		    itemsMobile : [479,1], 
		    pagination:true,
		 	autoHeight : true

		});

		/*-------------------------------------------------------------------------------
		  Project Carousel
		-------------------------------------------------------------------------------*/



	   $('.project-carousel').owlCarousel({
		    dots:true,
		    margin:30,
		    smartSpeed:250,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        1200:{
		            items:3
		        },
		        1600:{
		            items:3
		        }
		    }
		});


		/*-------------------------------------------------------------------------------
		  Client Carousel
		-------------------------------------------------------------------------------*/



	    $('.client-carousel').owlCarousel({
		    margin:30,
		    smartSpeed:250,
		    nav:true,
		    navText:[],
		    dots:false,
		    autoHeight: true,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:1
		        },
		        992:{
		        	items:2
		        },
		        1200:{
		            items:2
		        }
		    }
		});



		/*-------------------------------------------------------------------------------
		  Partner Carousel
		-------------------------------------------------------------------------------*/


		  
	   $('.partner-carousel').owlCarousel({
		    margin:30,
		    smartSpeed:250,
		    dots:true,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:2
		        },
		        768:{
		            items:3
		        },
		        992:{
		        	items:4
		        },
		        1200:{
		        	items:5
		        }
		    }
		});



	    /*-------------------------------------------------------------------------------
		  News Carousel
		-------------------------------------------------------------------------------*/
		$(".process-carousel").owlCarousel({
			items : 1,
			margin: 150,
		    smartSpeed: 500,
		    dots:true,
			animateIn: 'fadeIn',
			responsive:{
				0:{
					margin: 50,
				 },
				 720:{
					margin: 100,
					 
				 },
				 1280:{
					margin: 150,
				 }
			}
		});


	   $('.news-carousel').owlCarousel({
		    margin:30,
		    smartSpeed:250,
		    dots:true,
		    responsiveRefreshRate:0,
		    responsive:{
		       0:{
		            items:1
		        },
		        720:{
		            items:2,
		            
		        },
		        1280:{
		            items:3
		        }
		    }
		});

	   $(".review-carousel").owlCarousel({
			responsive:{
		       0:{
		            items:1
		        },
		        720:{
		            items:1,
		            
		        },
		        1280:{
		            items:1
		        }
		    },
		    responsiveRefreshRate:0,
			nav:true,
			navText:[],
			animateIn: 'fadeIn',
		 	dots:false
		});

	}


	/*-------------------------------------------------------------------------------
	  Projects masonry
	-------------------------------------------------------------------------------*/



	 var $container=$('.js-isotope').each(function() {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.js-isotope-item',
				percentPosition: true,
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.js-isotope-item'
				}	
			});	
		});
    }); 



	/*-------------------------------------------------------------------------------
	  Project Sly Carousel
	-------------------------------------------------------------------------------*/



	var $frame  = $('.sly');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		if ($frame.length > 0){
			$frame.sly({
				horizontal: 1,
				itemNav: 'basic',
				smart: 1,
				activateOn: 'click',
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				startAt: 0,
				scrollBar: $wrap.find('.scrollbar'),
				scrollBy: 0,
				activatePageOn: 'click',
				speed: 1000,
				elasticBounds: 2,
				dragHandle: 2,
				dynamicHandle: 1,
				clickBar: 0,

				// Buttons
				prevPage: $wrap.find('.prev'),
				nextPage: $wrap.find('.next')
			});

			$(window).resize(function(){
				$frame.sly('reload');
			});
		}



	/*-------------------------------------------------------------------------------
	  Filter
	-------------------------------------------------------------------------------*/



	$('.js-filter li a').on('click', function() {
		$('.js-filter .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.js-isotope').isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				queue: false
			}
		});
		return false;
	});



   /*-------------------------------------------------------------------------------
	  Filter Carousel 
	-------------------------------------------------------------------------------*/



	$('.js-filter-carousel li a').on('click', function() {
		$('.js-filter-carousel .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.project-carousel').fadeOut(300);
		$('.project-carousel').fadeIn(300);
		setTimeout(function(){
			$('.project-carousel .owl-item').hide();
			$(selector).closest('.project-carousel .owl-item').show();
		}, 300);
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Full screen sections 
	-------------------------------------------------------------------------------*/



    if ($('.pagepiling').length > 0){

      	$('.pagepiling').pagepiling({
    		scrollingSpeed: 280,
		    loopBottom:true,
		    afterLoad: function(anchorLink, index){
	            if ( $('.pp-section.active').scrollTop() > 0 ){
	            	$('.navbar').removeClass('navbar-white');
	            }
	            else{
	            	$('.navbar').addClass('navbar-white');
	            }
	            
  			}
		});



		/*-------------------------------------------------------------------------------
		   Scroll into sections 
		/-------------------------------------------------------------------------------*/



		$('.pp-scrollable').on('scroll', function () {
    		var scrollTop =$(this).scrollTop();
    		if (scrollTop > 0 ) {
    			$('.navbar-2').removeClass('navbar-white');
    		}
    		else{
    			$('.navbar-2').addClass('navbar-white');
    		}
		});



		/*-------------------------------------------------------------------------------
		   Scroller navigation
		/-------------------------------------------------------------------------------*/



		$('#pp-nav').remove().appendTo('.animsition').prepend('<div class="pp-nav-up icon-chevron-up"></div>').append('<div class="pp-nav-down icon-chevron-down"></div>').addClass('white right-boxed hidden-xs');

		$('.pp-nav-up').on('click', function(){
			$.fn.pagepiling.moveSectionUp();
		});

		$('.pp-nav-down').on('click', function(){
			$.fn.pagepiling.moveSectionDown();
		});
    } 



    /*-------------------------------------------------------------------------------
	  Change bacgkround on project section
	-------------------------------------------------------------------------------*/



    $('.project-box').on('mouseover',function(){
    	var index = $('.project-box').index(this);
    	$('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });



	/*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/



	if ($('.js-form').length) {
		$('.js-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
		                	$('.success-message').show();
		                },

		                error: function(){
			                $('.error-message').show();
			            }
			        });
			    }
			});
		});
	}


	function videoHover() {
		$('.project-item').on('mouseenter', function() {
			// $(this).play();
			$('.video-hover',this).trigger('play');
		})
		$('.project-item').on('mouseleave', function() {
			// $(this).play();
			$('.video-hover',this).trigger('pause');
		})
		
		$('.video-hover').on('mouseenter', function() {
			// $(this).play();
			$(this).get(0).play();
		})
		$('.video-hover').on('mouseleave', function() {
			// $(this).play();
			$(this).get(0).pause(); 
		})
	}

	videoHover()
	$('#canvas-1').ready(function(){
		// Ported from Stefan Gustavson's java implementation
	// http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf
	// Read Stefan's excellent paper for details on how this code works.
	//
	// Sean McCullough banksean@gmail.com
	
	/**
	 * You can pass in a random number generator object if you like.
	 * It is assumed to have a random() method.
	 */
	var ClassicalNoise = function(r) { // Classic Perlin noise in 3D, for comparison 
		if (r == undefined) r = Math;
		this.grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0], 
									   [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1], 
									   [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]]; 
		this.p = [];
		for (var i=0; i<256; i++) {
		  this.p[i] = Math.floor(r.random()*256);
		}
		// To remove the need for index wrapping, double the permutation table length 
		this.perm = []; 
		for(var i=0; i<512; i++) {
		  this.perm[i]=this.p[i & 255];
		}
	  };
	  
	  ClassicalNoise.prototype.dot = function(g, x, y, z) { 
		  return g[0]*x + g[1]*y + g[2]*z; 
	  };
	  
	  ClassicalNoise.prototype.mix = function(a, b, t) { 
		  return (1.0-t)*a + t*b; 
	  };
	  
	  ClassicalNoise.prototype.fade = function(t) { 
		  return t*t*t*(t*(t*6.0-15.0)+10.0); 
	  };
	  
		// Classic Perlin noise, 3D version 
	  ClassicalNoise.prototype.noise = function(x, y, z) { 
		// Find unit grid cell containing point 
		var X = Math.floor(x); 
		var Y = Math.floor(y); 
		var Z = Math.floor(z); 
		
		// Get relative xyz coordinates of point within that cell 
		x = x - X; 
		y = y - Y; 
		z = z - Z; 
		
		// Wrap the integer cells at 255 (smaller integer period can be introduced here) 
		X = X & 255; 
		Y = Y & 255; 
		Z = Z & 255;
		
		// Calculate a set of eight hashed gradient indices 
		var gi000 = this.perm[X+this.perm[Y+this.perm[Z]]] % 12; 
		var gi001 = this.perm[X+this.perm[Y+this.perm[Z+1]]] % 12; 
		var gi010 = this.perm[X+this.perm[Y+1+this.perm[Z]]] % 12; 
		var gi011 = this.perm[X+this.perm[Y+1+this.perm[Z+1]]] % 12; 
		var gi100 = this.perm[X+1+this.perm[Y+this.perm[Z]]] % 12; 
		var gi101 = this.perm[X+1+this.perm[Y+this.perm[Z+1]]] % 12; 
		var gi110 = this.perm[X+1+this.perm[Y+1+this.perm[Z]]] % 12; 
		var gi111 = this.perm[X+1+this.perm[Y+1+this.perm[Z+1]]] % 12; 
		
		// The gradients of each corner are now: 
		// g000 = grad3[gi000]; 
		// g001 = grad3[gi001]; 
		// g010 = grad3[gi010]; 
		// g011 = grad3[gi011]; 
		// g100 = grad3[gi100]; 
		// g101 = grad3[gi101]; 
		// g110 = grad3[gi110]; 
		// g111 = grad3[gi111]; 
		// Calculate noise contributions from each of the eight corners 
		var n000= this.dot(this.grad3[gi000], x, y, z); 
		var n100= this.dot(this.grad3[gi100], x-1, y, z); 
		var n010= this.dot(this.grad3[gi010], x, y-1, z); 
		var n110= this.dot(this.grad3[gi110], x-1, y-1, z); 
		var n001= this.dot(this.grad3[gi001], x, y, z-1); 
		var n101= this.dot(this.grad3[gi101], x-1, y, z-1); 
		var n011= this.dot(this.grad3[gi011], x, y-1, z-1); 
		var n111= this.dot(this.grad3[gi111], x-1, y-1, z-1); 
		// Compute the fade curve value for each of x, y, z 
		var u = this.fade(x); 
		var v = this.fade(y); 
		var w = this.fade(z); 
		 // Interpolate along x the contributions from each of the corners 
		var nx00 = this.mix(n000, n100, u); 
		var nx01 = this.mix(n001, n101, u); 
		var nx10 = this.mix(n010, n110, u); 
		var nx11 = this.mix(n011, n111, u); 
		// Interpolate the four results along y 
		var nxy0 = this.mix(nx00, nx10, v); 
		var nxy1 = this.mix(nx01, nx11, v); 
		// Interpolate the two last results along z 
		var nxyz = this.mix(nxy0, nxy1, w); 
	  
		return nxyz; 
	  };
	
	var canvas    = document.getElementById('canvas-1'),
		ctx       = canvas.getContext('2d'),
		  perlin    = new ClassicalNoise(),
		variation = .0025,
		amp       = 500,
		variators = [],
		max_lines = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? 10 : 60,
		canvasWidth,
		canvasHeight,
		start_y;
	
	for (var i = 0, u = 0; i < max_lines; i++, u+=.02) {
	  variators[i] = u;
	}
	
	function draw(){
	  ctx.shadowColor = "rgba(43, 205, 255, 1)";
	  ctx.shadowBlur = 0;
	  
	  for (var i = 0; i <= max_lines; i++){
		ctx.beginPath();
		ctx.moveTo(0, start_y);
		for (var x = 0; x <= canvasWidth; x++) {
		  var y = perlin.noise(x*variation+variators[i], x*2*variation, 0);
		  ctx.lineTo(x*3, start_y + amp*y);
		}
		var gradient = ctx.createLinearGradient(0, 0, 1500, 0);
		gradient.addColorStop("0", "#79ba9f");
		gradient.addColorStop("1.0", "#5678bb");
		var color = Math.floor(100*Math.abs(y));
		var alpha = Math.min(Math.abs(y)+0.05, .05);
		ctx.strokeStyle = gradient;
		ctx.stroke();
		ctx.closePath();
		
	
		variators[i] += .005;
	  }
	}
	
	(function init() {
		resizeCanvas();
		animate();
		window.addEventListener('resize', resizeCanvas);
	})();
	
	function animate() {
	  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	  draw();
	  requestAnimationFrame(animate);
	}
	
	function resizeCanvas(){
		canvasWidth = document.documentElement.clientWidth,
		canvasHeight = document.documentElement.clientHeight; 
	
		canvas.setAttribute("width", canvasWidth);
		canvas.setAttribute("height", canvasHeight);
	
		start_y = canvasHeight/2;
	}
	})
})(jQuery);
