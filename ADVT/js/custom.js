// Closure
(function() {
    /**
     * Decimal adjustment of a number.
     *
     * @param {String}  type  The type of adjustment.
     * @param {Number}  value The number.
     * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
     * @returns {Number} The adjusted value.
     */
    function decimalAdjust(type, value, exp) {
      // If the exp is undefined or zero...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // If the value is not a number or the exp is not an integer...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Shift back
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
  
    // Decimal round
    if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
    // Decimal floor
    if (!Math.floor10) {
      Math.floor10 = function(value, exp) {
        return decimalAdjust('floor', value, exp);
      };
    }
    // Decimal ceil
    if (!Math.ceil10) {
      Math.ceil10 = function(value, exp) {
        return decimalAdjust('ceil', value, exp);
      };
    }
  })();
$(window).scroll(testScroll);
    var viewed = false;

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    

    function testScroll() {
        if (isScrolledIntoView($(".counter-section")) && !viewed) {
            viewed = true;
            $('.value').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil10(now, -1));
                }
            });
            });
        }
    }
    $(function() {
      $('.chart').easyPieChart({
        size: 160,
        barColor: function() {
                    var ctx = this.renderer.getCtx();
                    var canvas = this.renderer.getCanvas();
                    var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
                    gradient.addColorStop(0, "#d963ed");
                    gradient.addColorStop(0.3, "#2eb8e8");
                    return gradient;
        },
        scaleLength: 5,
        lineWidth: 10,
        trackColor: "#fff",
        lineCap: "circle",
        animate: 2000,
        rotate: 0
      });
    });
var swiperClient = new Swiper('.swiper-client', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1000,
  autoplay: {
      delay: 6000,
      disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 60
    }
  }
})
