var controller = new ScrollMagic.Controller();
	$('.js-text-parallax .fx-wrap').each(function (index, el) {
		var id = 'text-parallax-' + index;
		var $this = $(this);
		$this.attr('id', id);

		var offset = parseInt($this.attr('data-x'), 10) || 200;

		var tween = TweenMax.to('#' + id + ' .fx-target', 2, {
			x: offset
		});

		new ScrollMagic.Scene({
			triggerElement: '#' + id, triggerHook: 1,
			duration: window.innerHeight * 2
		}).setTween(tween)
		// .addIndicators()
		.addTo(controller);
	});


// particlesJS("particles-js", {
//   "particles": {
//     "number": {
//       "value": 80,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": ["#f8ceb6","#c39473","#a26e39"]
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#b6b2b2"
//       }
//     },
//     "opacity": {
//       "value": 0.5211089197812949,
//       "random": false,
//       "anim": {
//         "enable": true,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 4,
//       "random": true,
//       "anim": {
//         "enable": true,
//         "speed": 12.181158184520175,
//         "size_min": 0.1,
//         "sync": true
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#a0a0a0",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 1,
//       "direction": "none",
//       "random": true,
//       "straight": false,
//       "out_mode": "bounce",
//       "bounce": true,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": false,
//         "mode": "repulse"
//       },
//       "onclick": {
//         "enable": false,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });
let tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 2500,
  endDelay: 500 });

tl.add({
  targets: '.ani-loading',
  opacity: [0, 1],
  easing: 'easeInOutSine',
  duration: 500,
},'0')
  .add({
  targets: '.logo-path *',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
},'-=500')
.add({
  targets: '.logo-path *',
  strokeOpacity: [1, 0],
  easing: 'easeInOutCubic',
  duration: 800
},'-=800')
.add({
  targets: '.logo-path *',
  fillOpacity: [0, 1],
  easing: 'easeInOutCubic',
  duration: 1500
},'-=1600')
.add({
  targets: '.text-logo g',
  opacity: [0, 1],
  translateX: [-25, 0],
  // rotateY: ['-18deg', 0],
  delay: anime.stagger(20)
}, '-=1500')
$(document).ready(function(){
  setTimeout(() => {
    $('.loading-container').fadeOut(800);
  }, 4000);
  
})
