let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500,
    endDelay: 500 });
  
  tl.add({
    targets: '.ani-loading',
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 500,
  },'0')
    .add({
    targets: '.home-svg *',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: function(el, i) { return i * 5 },
    duration: 1500,
  },'-=500')
  .add({
    targets: '.home-svg *',
    strokeOpacity: [1, 0],
    easing: 'easeInOutCubic',
    duration: 800
  },'-=800')
  .add({
    targets: '.home-svg *',
    fillOpacity: [0, 1],
    easing: 'easeInOutCubic',
    duration: 1500
  },'-=1600')
  .add({
    targets: '.title-loading',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
  },'-=2600')
  .add({
    targets: '.title-loading',
    strokeOpacity: [1, 0],
    easing: 'easeInOutCubic',
    duration: 800
  },'-=2500')
  .add({
    targets: '.title-loading',
    fillOpacity: [0, 1],
    easing: 'easeInOutCubic',
    duration: 1500
  },'-=3000')
  .add({
    targets: '.img-loading',
    opacity: [0, 1],
    // translateX: [-50, 0],
    rotateY: ['-90deg', 0],
    delay: anime.stagger(40)
  }, '-=2700')
  .add({
    targets: '.text-logo *',
    opacity: [0, 1],
    translateX: [-25, 0],
    delay: anime.stagger(40)
  }, '-=3000')
  $(document).ready(function(){
    setTimeout(() => {
      $('.loading-container').fadeOut(1000);
    }, 3500);
    
  })
