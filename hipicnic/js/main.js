(function () {
    'use strict';

    let tl = anime.timeline({
		easing: 'easeOutExpo',
		duration: 2000,
		// loop: true,
		endDelay: 500 });
	  
	  
	  tl.add({
			targets: '.loading svg path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutCubic',
			duration: 3000
		})
		.add({
			targets: '.loading svg path',
			fillOpacity: [0, 1],
			easing: 'easeInOutCubic',
			duration: 1000
		},'-=800')
        .add({
			targets: '.loading svg path',
            strokeOpacity: [1, 0],
			easing: 'easeInOutCubic',
			duration: 1000
		},'-=1000')
    $(document).ready(function() {
        setTimeout(() => {
            $('.loading').fadeOut(1000);
        }, 4000);
        
    })
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        }
        , BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        , iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        , Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        , Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        }
        , any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // Full Height
    var fullHeight = function () {
        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        }
    };
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    // Burger Menu 
    var burgerMenu = function () {
        $('.js-pwe-nav-toggle').on('click', function (event) {
            event.preventDefault();
            var $this = $(this);
            if ($('body').hasClass('offcanvas')) {
                $this.removeClass('active');
                $('body').removeClass('offcanvas');
            }
            else {
                $this.addClass('active');
                $('body').addClass('offcanvas');
            }
        });
    };
    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#pwe-aside, .js-pwe-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas')) {
                    $('body').removeClass('offcanvas');
                    $('.js-pwe-nav-toggle').removeClass('active');
                }
            }
        });
        // $(window).scroll(function () {
        //     if ($('body').hasClass('offcanvas')) {
        //         $('body').removeClass('offcanvas');
        //         $('.js-pwe-nav-toggle').removeClass('active');
        //     }
        // });
    };
    // Slider
    var sliderMain = function () {
        $('#pwe-hero .flexslider').flexslider({
            animation: "fade"
            , slideshowSpeed: 5000
            , directionNav: true
            , start: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }
            , before: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }
        });
    };
    // Document on load.
    $(function () {
        fullHeight();
        
        burgerMenu();
        mobileMenuOutsideClick();
        sliderMain();
        setTimeout(() => {
            contentWayPoint();
        }, 4000);
    });
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    // Servicee owlCarousel
    $('.services .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , dots: true
        , mouseDrag: true
        , autoplay: false
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 2
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 5
            }
        }
    });
    
    
    // Price owlCarousel
    $('.price .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , dots: true
        , mouseDrag: true
        , autoplay: false
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    $('.price .package-slide').owlCarousel({
        loop: true
        , margin: 30
        , dots: true
        , mouseDrag: true
        , autoplay: false
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 2
            }
        }
    });
    $('.album-section .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , dots: true
        , mouseDrag: true
        , autoplay: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , nav: true
        , navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"]
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    });
    // MagnificPopup
    $(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    
    $("[data-fancybox]").fancybox({
        thumbs : {
            autoStart : true
        }
	});

    $(document).ready(function() {
        $('select').niceSelect();
      });

    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });


    // Modal
    $('#lost-password-page').hide();
        $('#move-to-lost').on('click',function() {
            $('#lost-password-page').show();
            $('#login-page').hide();
        })
        $('#back-login').on('click',function() {
            $('#lost-password-page').hide();
            $('#login-page').show();
        });
    

    // Form Validation
    $('.modal').on('shown.bs.modal', function (e) {
        checkForm() 
        checkPass()
        
    })
    checkForm();
    checkPass();
    var upload = 2
    var $this = $('.item-container');
    $('#add-item').on('click', function(e) {
        console.log('aaa')
        e.preventDefault();
        var recRow = '<div class="item-box" id="item-'+upload+'"><label class="animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"><strong>Add to appointment</strong></label><div class="row"><div class="col-md-6"><p class="animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">Title</p><div class="form-group animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"><input type="text" class="form-control" name="title" placeholder=""></div></div><div class="col-md-6"><p class="animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">Price</p><div class="form-group animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"><input type="text" class="form-control" name="price" placeholder=""></div></div><div class="col-12"><div class="remove-item btn-contact"><a href="javascript:;"><span>Remove item</span></a></div></div></div></div>';
        $($this).append(recRow);
        $('#item-'+upload).each(function() {
            var $this = $(this)
            $('.remove-item',this).on('click',function() {
                $this.remove()
            })
        })
        upload ++;
        // if (upload >= 4){
        //   $(this).html('+ Upload maximum 3 files')
        // }
        
    })

    $('.item-box').each(function() {
        var $this = $(this)
        $('.remove-item',this).on('click',function() {
            $this.remove()
        })
    })
    function checkPass() {
        $('.check-pass').validate({
            rules: {
                password: {
                    required: true,
                    minlength: 8
                },
                confirmpass: {
                    required: true,
                    minlength: 8,
                    equalTo: '#newpass'
                },
                newpass: {
                    required: true,
                    minlength: 8
                },
            },
            messages: {
                password: {
                    required: "Please enter your password!",
                    minlength: "Please enter at least 8 characters.",
                },
                confirmpass: {
                    required: "Please your confirm password!",
                    equalTo: "Password and Confirm password does not match."
                },
                newpass: {
                    required: "Please enter your new password!",
                    minlength: "Please enter at least 8 characters.",
                }
            },
        });
    }
    function checkForm() {
        $('.js-check-form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 2
                },
                lastname:  {
                    required: true,
                    minlength: 2
                },
                address: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8
                },
                confirmpass: {
                    required: true,
                    minlength: 8,
                    equalTo: '#password'
                },
                newpass: {
                    required: true,
                    minlength: 8
                },
                phone: {
                    required: true,
                    rangelength: [8,11],
                    digits: true
    
                }
            },
            messages: {
                firstname: {
                    required: "Please enter your first name!",
                },
                lastname: {
                    required: "Please enter your last name!",
                },
                address: {
                    required: "Please enter your address!",
                },
                email: {
                    required: "Please enter your email!",
                    email: "Please enter a valid your email."
                },
                password: {
                    required: "Please enter your password!",
                    minlength: "Please enter at least 8 characters.",
                },
                confirmpass: {
                    required: "Please your confirm password!",
                    equalTo: "Password and Confirm password does not match."
                },
                newpass: {
                    required: "Please enter your new password!",
                    minlength: "Please enter at least 8 characters.",
                },
                phone:{
                    required: "Please enter your phone!",
                    digits: "Please enter numbers only!",
                    rangelength: "Please enter a value between 8 and 11 characters long."
    
                }
            },
        });
    }




   
    


}());
