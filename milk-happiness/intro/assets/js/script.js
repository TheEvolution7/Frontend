(function($) {
  var $loading = $('#galaxy-loading')
  var $form = $('#galaxy-form')
  var $video = $('#galaxy-video')
  var $message = $('#message')
  var $galaxyPraying = $('#galaxy-praying')

  var txtPraying = ''

  // show loading
  createLoading($loading)
  $(window).on('load', function() {
    setTimeout(function() {
      // hide loading
      removeLoading($loading)
      // show gallaxy
      if ($video[0]) {
        showGallaxy($video[0])
      }
    }, 2000)
  })

  $form.on('keydown', function(e) {

    if(e.keyCode == 13){
      e.preventDefault();
     txtPraying = $message.val()
      txtPrayingSplit = txtPraying.split('').map(i => {
      return i != ' ' ? `<span>${i}</span>` : '&nbsp;'
    })
    $message.addClass('submited')
    $galaxyPraying.removeClass('boom')
    $galaxyPraying.removeClass('has-text')
    $form.fadeOut()
    setTimeout(function() {
      //$message.val('')
      $message.removeClass('submited')

      // show praying on the screen
      $galaxyPraying.html(txtPrayingSplit).addClass('has-text')
      // $video.addClass('zoom')

      setTimeout(function() {
        $galaxyPraying.addClass('boom')

        var initAnime = anime({
          targets: '#galaxy-praying span',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#fff',
          opacity: function() {
            return anime.random(5, 10) * 0.1
          },
          scale: function() {
            return anime.random(2, 10) * 0.1
          },
          duration: 100,
          easing: 'linear',
          complete: function() {
            anime({
              targets: '#galaxy-praying span',
              translateX: function() {
                return anime.random(-1000, 1000);
              },
              translateY: function() {
                return anime.random(-1000, 1000);
              },
              translateZ: function() {
                return anime.random(-1000, 1000);
              },
              scale: 0,
              opacity: 0,
              duration: function() {
                return anime.random(5000, 10000)
              },
              easing: 'linear'
            });
          }
        });
        
        $form.fadeIn()
        $message.focus()
      }, 2000)


    }, 500)
  setTimeout(function() {
    $form.submit();
  },3000)
    }
    
    
  })
  
})($)

function createLoading(el) {
  console.log('create loading')
  el.fadeIn()
}

function removeLoading(el) {
  console.log('remove loading')
  el.fadeOut(500)
}

function showGallaxy(video) {
  console.log('show gallaxy')
  video.play()
  video.playbackRate = 6
  watchVideo(video)
}

function watchVideo(video) {
  video.addEventListener('pause', function() {
    video.play()
  })
}
