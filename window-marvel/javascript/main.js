/**
  * isMobile
  * responsiveMenu
  * headerFixedHome1
  * headerFixedHome2
  * parallax
  * tabs
  * flatOwl
  * topSearch
  * retinaLogos
  * retinaLogos2
  * goTop
  * removePreloader
  * parallax
  * change_img
  * flatSpacer
  * flatCounter
*/          

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return ( isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header .container-fixel').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixedHome1 = function() {
        if ( $('body').hasClass('header_sticky') ) {
            var nav = $('.header');

            if ( nav.size() != 0 ) {
                var offsetTop = $('.header').offset().top,
                    headerHeight = $('.header').height(),
                    injectSpace = $('<div />', { height: headerHeight }).insertAfter(header);  
                    injectSpace.hide(); 
                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop + headerHeight) {
                        $('.header').addClass('fixed-header');
                        injectSpace.show();
                    } else {
                        $('.header').removeClass('fixed-header');
                        injectSpace.hide();
                    }

                    if ( $(window).scrollTop() > 700 ) {
                        $('.header').addClass('upscrolled');
                    } else {
                        $('.header').removeClass('upscrolled');
                    }
                })
            }
        }     
    };
    
    var headerFixedHome2 = function() {
        if ( $('body').hasClass('header_sticky_style2') ) {
            var nav = $('.nav-wrap');

            if ( nav.size() != 0 ) {
                var offsetTop = $('.nav-wrap').offset().top,
                    headerHeight = $('.nav-wrap').height(),
                    injectSpace = $('<div />', { height: headerHeight }).insertAfter(nav);   
                    injectSpace.hide();    

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop) {
                        $('.header-style2').addClass('fixed-header');
                        injectSpace.show();
                    } else {
                        $('.header-style2').removeClass('fixed-header');
                        injectSpace.hide();
                    }

                    if ( $(window).scrollTop() > 400 ) {
                        $('.header-style2').addClass('header-small');
                    } else {
                        $('.header-style2').removeClass('header-small');
                    }

                    if ( $(window).scrollTop() > 500 ) {
                        $('.header-style2').addClass('upscrolled');
                    } else {
                        $('.header-style2').removeClass('upscrolled');
                    }
                })
            }
        }     
    };

    var parallax = function() {
        if ( $().parallax && isMobile.any() === null ) {
            $('.parallax1').parallax("50%", 0.5);
            $('.parallax2').parallax("50%", 0.5);
            $('.parallax3').parallax("50%", 0.5);          
        }
    };

    var tabs = function() {
        $('.flat-tabs').each(function() {
            $(this).children('.content-tab').children().hide();
            $(this).children('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click', function(e) { 
                var liActive = $(this).index(),
                    contentActive = $(this).siblings().removeClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive);

                contentActive.addClass('active').fadeIn('slow');
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
                e.preventDefault();
            });
        });
    };

    var flatOwl = function() {
        if ( $().owlCarousel ) {
            $('.flat-carousel-box').each(function(){
                var $this = $(this),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                loops = $this.data("loop"),
                zero = $this.data("zero"),
                autoplays = $this.data("autoplay"),
                
                gap = Number($this.data("gap")),
               
                dots = $this.data("dots"),
                nav = $this.data("nav");

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    loop:loops,
                    dots:dots,
                    nav: nav,
                    navigation : true,
                    pagination: true,
                    autoplay: autoplays,
                    autoplayTimeout: 5000,
                    smartSpeed: 1500,
                    responsive: {
                        0:{
                            items:item3
                        },
                        700:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
                
                if(zero === 0) {
                    $(".banners-z .owl-dot").find('span').addClass("number_zero");
                }
                $this.find('.owl-dot').each(function(){
                    var number = $(this).index()+1;
                    if($(this).children('span').hasClass("number_zero")) {
                        if(number < 9){
                            number = '0' + number;
                        }
                        $(this).children('span').html(number);
                        $(this).append('<i class="line"></i>');
                    }
                    else{
                        $(this).children('span').html(number);
                    }

                    $(this).children('span').addClass("btn-dots btn-defect");

                });
            });
        }
    };
    
    var topSearch = function () {
      $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 's' ) ) {
                $('.top-search').removeClass('show');                
            } 
        });

        $('.show-search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.show-search').on('click', function (event) {
            if(!$('.top-search').hasClass( "show" )) {
                $('.top-search').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.top-search').removeClass('show');
                event.preventDefault();

            if( !$('.show-search' ).hasClass( "active" ) )
                $( '.show-search' ).addClass( 'active' );
            else
                $( '.show-search' ).removeClass( 'active' );
        });   
    } 

    // var retinaLogos = function() {
    //   var retina = window.devicePixelRatio > 1 ? true : false;

    //     if(retina) {
    //         $('.logo').find('img').attr( {src:'./logo/LogoDark@2x.png',width:'159',height:'70'} );   
    //     }
    // };  

    var retinaLogos2 = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
  
          if(retina) {
              $('#footer').find('img').attr( {src:'./logo/Logolight@2x.png'} );   
          }
    };   

    var goTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        });

        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
            return false;
        });
    };

 
    var removePreloader = function() {      
        if ( $().animsition ) {
            $('.animsition').animsition({
                inClass: 'fade-in',
                outClass: 'fade-out',
                inDuration: 1500,
                outDuration: 800,
                loading: true,
                loadingParentElement: 'body',
                loadingClass: 'animsition-loading',
                timeout: false,
                timeoutCountdown: 5000,
                onLoadEvent: true,
                browser: [
                    '-webkit-animation-duration',
                    '-moz-animation-duration',
                    'animation-duration'
                    ],
                overlay: false,
                overlayClass: 'animsition-overlay-slide',
                overlayParentElement: 'body',
                transition: function(url){ window.location.href = url; }
            });
        };
    };

    var flatSpacer = function() {
        $(window).on('load resize', function(){
            var mode = 'desktop';
            if(matchMedia('only screen and (max-width: 991px)').matches) 
                mode = 'mobile';
            if(matchMedia('only screen and (max-width: 767px)').matches)
                mode = 'smobile';
            $('.windowmarvel-spacer').each( function(){
                if( mode === 'desktop'){
                    $(this).attr('style','height:' + $(this).data('desktop') + 'px')
                }else if( mode === 'mobile') {
                    $(this).attr('style','height:' + $(this).data('mobile') + 'px')
                }else {
                    $(this).attr('style','height:' + $(this).data('smobile') + 'px')
                }
            });
        });
    };

    var flatCounter = function() {
        if ($(document.body).hasClass('counter-scroll')) {
            var a = 0;
                $(window).scroll(function() {
                var oTop = $('.box').offset().top - window.innerHeight;
                    if (a === 0 && $(window).scrollTop() > oTop) {
                        if ( $().countTo ) {
                            $('.box').find('.number').each(function() {
                                var to = $(this).data('to'),
                                    speed = $(this).data('speed');
                              
                                $(this).countTo({
                                    to: to,
                                    speed: speed
                                });
                            });
                        }
                    a = 1;
                }
            });
        }
    };


    var flatCounter1 = function() {
        if ($(document.body).hasClass('counter-scroll')) {
            var a = 0;
                $(window).scroll(function() {
                var oTop = $('.content-aw').offset().top - window.innerHeight;
                    if (a === 0 && $(window).scrollTop() > oTop) {
                        if ( $().countTo ) {
                            $('.content-aw').find('.number').each(function() {
                                var to = $(this).data('to'),
                                    speed = $(this).data('speed');
                              
                                $(this).countTo({
                                    to: to,
                                    speed: speed
                                });
                            });
                        }
                    a = 1;
                }
            });
        }
    };
    


   	// Dom Ready
	$(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {   
        headerFixedHome1();
        headerFixedHome2();
        }  
        removePreloader();
        new WOW().init();        
        responsiveMenu(); 
        tabs();    
        parallax(); 
        topSearch(); 
        // retinaLogos();   
        // retinaLogos2(); 
        goTop();
        flatSpacer();
        flatCounter();
        flatCounter1();
        $(window).on('load resize', function(){
            flatOwl();
        });

   	});

})(jQuery);
