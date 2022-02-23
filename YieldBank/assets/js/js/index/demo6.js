/**
 * demo2.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
    // From https://davidwalsh.name/javascript-debounce-function.
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
    };
    function getFullCoverVideoSize({width, height}) {
	    var iw, ih;
	    if (width / height > 16 / 9) {
	        iw = width;
	        ih = 9 * width / 16;
	    } else {
	        iw = 16 * height / 9;
	        ih = height;
	    }
	    return {
	        width: iw,
	        height: ih
	    };
	};
    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    };
    class Slideshow {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;
            this.loop = true;
            this.videoPlaying = false;
            this.settings = {
                animation: {
                    slides: {
                        duration: 500,
                        easing: 'easeOutQuint'
                    },
                    shape: {
                        duration: 300,
                        easing: {in: 'easeOutQuint', out: 'easeOutQuad'}
                    }
                },
                frameFill: 'url(#gradient1)'
            }
            this.init();
        }
        init() {
            this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slides--images > .slide'));
            this.videoInit();
            this.paginationInit();
            this.slidesTotal = this.DOM.slides.length;
            this.DOM.nav = this.DOM.el.querySelector('.slidenav');
            this.DOM.titles = this.DOM.el.querySelector('.slides--titles');
            this.DOM.titlesSlides = Array.from(this.DOM.titles.querySelectorAll('.slide'));
            this.DOM.nextCtrl = this.DOM.nav.querySelector('.slidenav__item--next');
            this.DOM.prevCtrl = this.DOM.nav.querySelector('.slidenav__item--prev');
            this.current = 0;
            this.createFrame(); 
            this.initEvents();
            this.updateVideoSize();
            this.playVideo(0);
            this.resetLoop();
        }

        resetLoop () {
            clearTimeout(this.interval);
            this.interval = setInterval(() => {
                this.loop && !this.videoPlaying && this.navigate('next');
            }, 8000)
        }
        // slide contain video init 
        videoInit() {
            // init video slide
            this.slideVideo = [];
            this.DOM.slides.map((slide, index) => {
                if(slide.classList.contains('slide--video')) {
                    const video_link = slide.getAttribute('video');
                    const video_type = slide.getAttribute('video-type');
                    slide.querySelector('.video-container').setAttribute('id', 'video--slide-' + index);
                    let video = videojs('video--slide-' + index, {
                        muted: true
                    });

                    video.src({type: `video/${video_type}`, src: video_link});
                    // video.setMuted(true);
                    video.on('ended', () => {
                        this.videoPlaying = false;
                        this.navigate('next');
                    });
                    video.on('pause', () => {
                        this.videoPlaying = false;
                        this.resetLoop();
                    });
                    video.on('play', () => {
                        this.videoPlaying = true;
                    })
                    this.slideVideo.push(video)
                } else {
                    this.slideVideo.push('empty')
                }
            });
        }
        paginationInit() {
            
            let bullet_wrapper = document.querySelector('.bullet--wrapper');
            this.DOM.slides.map((item, index) => {
                let bullet = `<span class="bullet"></span>`;
                console.log('done')
                bullet_wrapper.insertAdjacentHTML('beforeend', bullet);
            })
            this.DOM.pagination = Array.from(this.DOM.el.querySelectorAll('.bullet--wrapper > .bullet'));
            this.DOM.pagination[0].classList.add('bullet-active');
        }
        // play video
        playVideo(currentIndex, previousIndex) {
            // console.log(this.slideVideo)
            if(this.slideVideo[currentIndex] !== 'empty') {
                setTimeout(() => {
                    this.slideVideo[currentIndex].play();
                }, 200);
            }
            if(previousIndex !== undefined && this.slideVideo[previousIndex] !== 'empty') {
                this.slideVideo[previousIndex].pause(); 
            }
            return
        }
        updateVideoSize() {
            let bounce = this.DOM.el.getBoundingClientRect();
            let size = getFullCoverVideoSize(bounce);
            let allVideoContainer = Array.from(document.querySelectorAll('.video-container'));
            allVideoContainer.map((video_el, index) => {
                video_el.style.width = size.width + 'px';
                video_el.style.height = size.height + 'px';
            })
        }
        createFrame() {
            this.rect = this.DOM.el.getBoundingClientRect();
            if(this.rect.width > 576) {
                this.charRect = {width: 299, height: 392};
            } else {
                this.charRect = {width: 200, height: 262}
            }
            
            this.frameSize = this.rect.width/12;
            this.paths = {
                initial: this.calculatePath('initial'),
                final: this.calculatePath('final')
            };
            this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.DOM.svg.setAttribute('class', 'shape');
            this.DOM.svg.setAttribute('width','100%');
            this.DOM.svg.setAttribute('height','100%');
            this.DOM.svg.setAttribute('viewbox',`0 0 ${this.rect.width} ${this.rect.height}`);
            this.DOM.svg.innerHTML = `
            <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#000"/>
                <stop offset="100%" stop-color="#fcd462"/>
            </linearGradient>
            </defs>
            <path fill="${this.settings.frameFill}" d="${this.paths.initial}"/>`;
            this.DOM.el.insertBefore(this.DOM.svg, this.DOM.titles);
            this.DOM.shape = this.DOM.svg.querySelector('path');
            
        }
        updateFrame() {
            this.paths.initial = this.calculatePath('initial');
            this.paths.final = this.calculatePath('final');
            this.DOM.svg.setAttribute('viewbox',`0 0 ${this.rect.width} ${this.rect.height}`);
            this.DOM.shape.setAttribute('d', this.isAnimating ? this.paths.final : this.paths.initial);
            this.updateVideoSize();
        }
        calculatePath(path = 'initial') {

            if ( path === 'initial' ) {
                // reshape
                    var log_shape = `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M 0,0 ${this.rect.width/6},0 ${this.rect.width},0 ${this.rect.width},${this.rect.height / 6} ${this.rect.width},${this.rect.height} 0,${this.rect.height} 0,${this.rect.height * 3 / 6} 0,${this.rect.height * 3 / 6} 0,${this.rect.height * 3 / 6} Z`,
                        bk = `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M 0,0 ${this.rect.width},0 ${this.rect.width},${this.rect.height} 0,${this.rect.height} Z`;
                //
                // console.log(log_shape)
                // console.log(bk)
                return log_shape;
            }
            else {
                // const point1 = {x: this.rect.width/4-50, y: this.rect.height/4+50};
                // const point2 = {x: this.rect.width/4+50, y: this.rect.height/4-50};
                // const point3 = {x: this.rect.width-point2.x, y: this.rect.height-point2.y};
                // const point4 = {x: this.rect.width-point1.x, y: this.rect.height-point1.y};
                // const point1 = { x: this.rect.width/2 - cw/2, y: this.rect.height/2 - ch/2 + 85*ch/392}
                // const point2 = { x: this.rect.width/2 - cw/2, y: this.rect.height/2 - ch/2 }
                // const point3 = { x: this.rect.width/2 + cw/2, y: this.rect.height/2 - ch/2 }
                // const point4 = { x: this.rect.width/2 + cw/2, y: this.rect.height/2 - ch/2 + 70*ch/392 }
                // const point5 = { x: this.rect.width/2 + cw/2 - 170*cw/299, y: this.rect.height/2 + ch/2 }
                // const point6 = { x: this.rect.width/2 + cw/2 - 277*cw/299, y: this.rect.height/2 + ch/2 }
                // const point7 = { x: this.rect.width/2 + cw/2 - 115*cw/299, y: this.rect.height/2 - ch/2 + 85*ch/392}
                    const cw = this.charRect.width;
                    const ch = this.charRect.height;
                    const point1 = { x: 545.4, y: 210.8 }
                    const point2 = { x: 579.4, y:210.8  }
                    const point3 = { x: 719.9, y:450.5  }
                    const point4 = { x: 861.9, y:210.8  }
                    const point5 = { x: 895.6, y:210.8  }
                    const point6 = { x: 734.6, y:482.6 }
                    const point7 = { x: 734.6, y:690.2 }
                    const point8 = { x: 704.3, y:690.2  }
                    const point9 = { x: 704.3, y:480.8 }
                    
                    let log_shape = `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M ${point1.x},${point1.y} ${point2.x},${point2.y} ${point3.x},${point3.y} ${point4.x},${point4.y} ${point5.x},${point5.y} ${point6.x},${point6.y} ${point7.x},${point7.y}  ${point8.x},${point8.y} ${point9.x},${point9.y} Z`;
                    let bk = `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M ${point1.x},${point1.y} ${point2.x},${point2.y} ${point4.x},${point4.y} ${point3.x},${point3.y} ${point3.x},${point3.y} Z`;
                //
                console.log(this.rect.width/2 - cw/2)

                return log_shape;
            }
        }
        initEvents() {
            this.DOM.nextCtrl.addEventListener('click', () => this.navigate('next'));
            this.DOM.prevCtrl.addEventListener('click', () => this.navigate('prev'));
            
            window.addEventListener('resize', debounce(() => {
                this.rect = this.DOM.el.getBoundingClientRect();
                this.charRect = {width: 299, height: 392}
                this.updateFrame();
            }, 20));
            
            document.addEventListener('keydown', (ev) => {
                const keyCode = ev.keyCode || ev.which;
                if ( keyCode === 37 ) {
                    this.navigate('prev');
                }
                else if ( keyCode === 39 ) {
                    this.navigate('next');
                }
            });
        }
        navigate(dir = 'next') {
            if ( this.isAnimating ) return false;
            this.isAnimating = true;

            const animateShapeIn = anime({
                targets: this.DOM.shape,
                duration: this.settings.animation.shape.duration,
                easing: this.settings.animation.shape.easing.in,
                d: this.paths.final
            });

            const animateSlides = () => {
                return new Promise((resolve, reject) => {
                    const currentSlide = this.DOM.slides[this.current];
                    const currentBullet = this.DOM.pagination[this.current];
                    const newBulletIndex = dir === 'next' ? 
                        this.current < this.slidesTotal-1 ? this.current + 1 : 0 :
                        this.current > 0 ? this.current - 1 : this.slidesTotal-1; 
                    const newBullet = this.DOM.pagination[newBulletIndex];
                    const previousIndex = this.current;
                    anime({
                        targets: currentSlide,
                        duration: this.settings.animation.slides.duration,
                        easing: this.settings.animation.slides.easing,
                        translateY: dir === 'next' ? this.rect.height : -1*this.rect.height,
                        complete: () => {
                            currentSlide.classList.remove('slide--current');
                            currentBullet.classList.remove('bullet-active');
                            newBullet.classList.add('bullet-active');
                            resolve();
                        }
                    });

                    const currentTitleSlide = this.DOM.titlesSlides[this.current];
                    anime({
                        targets: currentTitleSlide.children,
                        duration: this.settings.animation.slides.duration,
                        easing: this.settings.animation.slides.easing,
                        delay: (t,i,total) => dir === 'next' ? i*100 : (total-i-1)*100,
                        translateY: [0, dir === 'next' ? 100 : -100],
                        opacity: [1,0],
                        complete: () => {
                            currentTitleSlide.classList.remove('slide--current');
                            resolve();
                        }
                    });
        
                    this.current = dir === 'next' ? 
                        this.current < this.slidesTotal-1 ? this.current + 1 : 0 :
                        this.current > 0 ? this.current - 1 : this.slidesTotal-1; 

                    // video player
                    const currentIndex = this.current;

                    const newSlide = this.DOM.slides[this.current];
                    newSlide.classList.add('slide--current');
                    anime({
                        targets: newSlide,
                        duration: this.settings.animation.slides.duration,
                        easing: this.settings.animation.slides.easing,
                        translateY: [dir === 'next' ? -1*this.rect.height : this.rect.height,0]
                    });
        
                    const newSlideImg = newSlide.querySelector('.slide__img');
                    
                    anime.remove(newSlideImg);
                    anime({
                        targets: newSlideImg,
                        duration: this.settings.animation.slides.duration*3,
                        easing: this.settings.animation.slides.easing,
                        translateY: [dir === 'next' ? -100 : 100, 0],
                        scale: [0.2,1]
                    });
                    
                    const newTitleSlide = this.DOM.titlesSlides[this.current];
                    newTitleSlide.classList.add('slide--current');
                    anime({
                        targets: newTitleSlide.children,
                        duration: this.settings.animation.slides.duration*1.5,
                        easing: this.settings.animation.slides.easing,
                        delay: (t,i,total) => dir === 'next' ? i*100+100 : (total-i-1)*100+100,
                        translateY: [dir === 'next' ? -100 : 100 ,0],
                        opacity: [0,1]
                    });
                });
            };

            const animateShapeOut = () => {
                anime({
                    targets: this.DOM.shape,
                    duration: this.settings.animation.shape.duration,
                    easing: this.settings.animation.shape.easing.out,
                    d: this.paths.initial,
                    complete: () => this.isAnimating = false
                });
            }

            animateShapeIn.finished.then(() => {
                animateSlides();
            }).then(animateShapeOut).then(() => {
                this.resetLoop();
                let previousIndex = dir === 'next' ? 
                this.current > 0 ? this.current - 1 : this.slidesTotal-1 :
                this.current < this.slidesTotal-1 ? this.current + 1 : 0;  
                this.playVideo(this.current, previousIndex)
            });
        }
    };
    if (document.readyState === 'complete' || document.readyState !== 'loading') {
        docReady();
    } else {
    document.addEventListener('DOMContentLoaded', docReady);
    }

    function docReady() {
        
    }
    let slide_show = new Slideshow(document.querySelector('.slideshow'));
    imagesLoaded('.slide__img', { background: true }, () => document.body.classList.remove('loading'));
    
};