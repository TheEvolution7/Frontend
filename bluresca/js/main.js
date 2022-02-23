var swiperService = new Swiper('.swiper-service', {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    watchOverflow: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
})

$('.ham-btn').on('click', function(){
    $(this).toggleClass('active');
    $('.menu-header').toggleClass('show');
    $('body').toggleClass('ov-fl')
})

function onScroll() {
    var e = $(".img-bg-ani");
    $(e).each(function(e, t) {
        $(t).isInViewport() && $(t).addClass("on-show")
    })
  }
  $.fn.isInViewport = function() {
    var e = $(this).offset().top + 60
      , t = e + $(this).outerHeight()
      , a = $(window).scrollTop()
      , i = a + $(window).height();
    return t > a && i > e
  }
  
$(document).bind("scroll", function(){
    onScroll()  
})


wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       60,          // default
    mobile:       true,       // default
    live:         true        // default
})

$(window).on('load', function(){
  wow.init();
})




  $('.falling-leaves').each(function(){
    var LeafScene = function(el) {
      this.viewport = el;
      this.world = document.createElement('div');
      this.leaves = [];
  
      this.options = {
        numLeaves: 50,
        wind: {
          magnitude: 1.2,
          maxSpeed: 12,
          duration: 300,
          start: 0,
          speed: 0
        },
      };
  
      this.width = this.viewport.offsetWidth;
      this.height = this.viewport.offsetHeight;
  
      // animation helper
      this.timer = 0;
  
      this._resetLeaf = function(leaf) {
  
        // place leaf towards the top left
        leaf.x = this.width * 2 - Math.random()*this.width*1.75;
        leaf.y = -10;
        leaf.z = Math.random()*200;
        if (leaf.x > this.width) {
          leaf.x = this.width + 10;
          leaf.y = Math.random()*this.height/2;
        }
        // at the start, the leaf can be anywhere
        if (this.timer == 0) {
          leaf.y = Math.random()*this.height;
        }
  
        // Choose axis of rotation.
        // If axis is not X, chose a random static x-rotation for greater variability
        leaf.rotation.speed = Math.random()*10;
        var randomAxis = Math.random();
        if (randomAxis > 0.5) {
          leaf.rotation.axis = 'X';
        } else if (randomAxis > 0.25) {
          leaf.rotation.axis = 'Y';
          leaf.rotation.x = Math.random()*180 + 90;
        } else {
          leaf.rotation.axis = 'Z';
          leaf.rotation.x = Math.random()*360 - 180;
          // looks weird if the rotation is too fast around this axis
          leaf.rotation.speed = Math.random()*3;
        }
  
        // random speed
        leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
        leaf.ySpeed = Math.random() + 1.5;
  
        return leaf;
      }
  
      this._updateLeaf = function(leaf) {
        var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);
  
        var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
        leaf.x -= xSpeed;
        leaf.y += leaf.ySpeed;
        leaf.rotation.value += leaf.rotation.speed;
  
        var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
        if (leaf.rotation.axis !== 'X') {
          t += ' rotateX(' + leaf.rotation.x + 'deg)';
        }
        leaf.el.style.webkitTransform = t;
        leaf.el.style.MozTransform = t;
        leaf.el.style.oTransform = t;
        leaf.el.style.transform = t;
  
        // reset if out of view
        if (leaf.x < -10 || leaf.y > this.height + 10) {
          this._resetLeaf(leaf);
        }
      }
  
      this._updateWind = function() {
        // wind follows a sine curve: asin(b*time + c) + a
        // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
        // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration
  
        if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {
  
          this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
          this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
          this.options.wind.start = this.timer;
  
          var screenHeight = this.height;
  
          this.options.wind.speed = function(t, y) {
            // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
            var a = this.magnitude/2 * (screenHeight - 2*y/3)/screenHeight;
            return a * Math.sin(2*Math.PI/this.duration * t + (3 * Math.PI/2)) + a;
          }
        }
      }
    }
  
    LeafScene.prototype.init = function() {
  
      for (var i = 0; i < this.options.numLeaves; i++) {
        var leaf = {
          el: document.createElement('div'),
          x: 0,
          y: 0,
          z: 0,
          rotation: {
            axis: 'X',
            value: 0,
            speed: 0,
            x: 0
          },
          xSpeedVariation: 0,
          ySpeed: 0,
          path: {
            type: 1,
            start: 0,
  
          },
          image: 1
        };
        this._resetLeaf(leaf);
        this.leaves.push(leaf);
        this.world.appendChild(leaf.el);
      }
  
      this.world.className = 'leaf-scene';
      this.viewport.appendChild(this.world);
  
      // set perspective
      this.world.style.webkitPerspective = "400px";
      this.world.style.MozPerspective = "400px";
      this.world.style.oPerspective = "400px";
      this.world.style.perspective = "400px";
      
      // reset window height/width on resize
      var self = this;
      window.onresize = function(event) {
        self.width = self.viewport.offsetWidth;
        self.height = self.viewport.offsetHeight;
      };
    }
  
    LeafScene.prototype.render = function() {
      this._updateWind();
      for (var i = 0; i < this.leaves.length; i++) {
        this._updateLeaf(this.leaves[i]);
      }
  
      this.timer++;
  
      requestAnimationFrame(this.render.bind(this));
    }
  
    // start up leaf scene
    var leafContainer = document.querySelector('.falling-leaves'),
        leaves = new LeafScene(leafContainer);
  
    leaves.init();
    leaves.render();
  })
 

  // preloader
  let draw = anime.timeline({
    easing: 'easeOutExpo',
    duration: 2500,
    endDelay: 500
  });

  draw.add({
      targets: '.loading .logo-loading',
      opacity: [0, 1],
      easing: 'easeInOutSine',
      duration: 500,
    })
    .add({
      targets: '.loading .icon-svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1800,
    })
    .add({
      targets: '.loading .icon-svg path',
      fillOpacity: [0, 1],
      easing: 'easeInOutCubic',
      duration: 800
    }, '-=1000')
    .add({
        targets: '.loading .text-logo path',
        opacity: [0, 1],
        translateX: [-25, 0],
        // rotateY: ['-18deg', 0],
        delay: anime.stagger(100) },
    '-=900')
    .add({
      targets: '.loading .icon-svg path',
      // loop: true,
      // direction: 'alternate',
      strokeOpacity: [1, 0],
      easing: 'easeInOutSine',
      duration: 800,
    }, '-=1100')
    
    
  $(document).ready(function () {
    $('body').addClass('on-load')   
    setTimeout(() => {
      $('.loading').fadeOut(1000)
       
    }, 4000);
    setTimeout(() => {
      $('body').removeClass('on-load')  
    }, 4500);
  })
  


  var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$("a").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$("a").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


$('.row-load-more').each(function () {
  $(".col-lg-3", this).hide()
  $(".col-lg-3", this).slice(0, 4).show();
  var $this = $(this)
  $(".load-more", this).on('click', function (e) {
    e.preventDefault();
    $(".col-lg-3:hidden", $this).slice(0, 4).fadeIn();
    if ($(".col-lg-3:hidden", $this).length == 0) {
      $(".load-more", $this).fadeOut();
    }
    // $('html,body').animate({
    //   scrollTop: $this.offset().top
    // }, 1000);
  });
});

$('.row-load-more-8').each(function () {
  $(".col-lg-3", this).hide()
  $(".col-lg-3", this).slice(0, 8).show();
  var $this = $(this)
  $(".load-more", this).on('click', function (e) {
    e.preventDefault();
    $(".col-lg-3:hidden", $this).slice(0, 4).fadeIn();
    if ($(".col-lg-3:hidden", $this).length == 0) {
      $(".load-more", $this).fadeOut();
    }
    // $('html,body').animate({
    //   scrollTop: $this.offset().top
    // }, 1000);
  });
});
if ($(window).width() < 768) {
  $('.row-load-more-8').each(function () {
    $(".col-lg-3", this).hide()
    $(".col-lg-3", this).slice(0, 4).show();
    var $this = $(this)
    $(".load-more", this).on('click', function (e) {
      e.preventDefault();
      $(".col-lg-3:hidden", $this).slice(0, 4).fadeIn();
      if ($(".col-lg-3:hidden", $this).length == 0) {
        $(".load-more", $this).fadeOut();
      }
      // $('html,body').animate({
      //   scrollTop: $this.offset().top
      // }, 1000);
    });
  });
}




$(".leaf").each(function(){
  /* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */
  var falling = true;

  TweenLite.set(".leaf",{perspective:300})
  // TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

  var total = 20;
  
  var w = $(this).width();
  var h = $(this).height();
  for (i=0; i<total; i++){ 
    var div = document.createElement('div');
    TweenLite.set(div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
    $(this).append(div);
    animm(div);
  }
  function animm(elm){   
    TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
    TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
  };
 
 function R(min,max) {return min+Math.random()*(max-min)};
})
//  for (i=0; i<total; i++){ 
//    var div = document.createElement('div');
//    TweenLite.set(div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
//    container.appendChild(div);
//    animm(div);
//  }
/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */

var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

$('.js-wrap-box').on('mouseenter', function(){
  $(this).addClass('action')
})
$('.js-wrap-box').on('mouseleave', function(){
  $(this).removeClass('action')
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('.form-check').each(function(){
  var $this= $(this);
  $('.form-check-input', this).on('change', function() {
    if (this.checked) {
      $('.input_group', $this).fadeIn()
    }
    else {
      $('.input_group', $this).fadeOut()
    }
  })
})




// Cache selectors
var topMenu = $(".site-header"),
  topMenuHeight = topMenu.outerHeight()+15,
  // All list items
  menuItems = topMenu.find(".menu-header a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

$(".menu-header a").click(function(e) {
  e.preventDefault();
  var $this = $(this).attr("href");
  $(window).scrollTop($($this).offset().top  - topMenu.outerHeight());
});
// Bind to scroll
$(window).scroll(function(){
 // Get container scroll position
 var fromTop = $(this).scrollTop()+topMenuHeight;

 // Get id of current scroll item
 var cur = scrollItems.map(function(){
   if ($(this).offset().top < fromTop)
     return this;
 });
 // Get the id of the current element
 cur = cur[cur.length-1];
 var id = cur && cur.length ? cur[0].id : "";
 // Set/remove active class
 menuItems
   .parent().removeClass("active")
   .end().filter("[href='#"+id+"']").parent().addClass("active");
});
