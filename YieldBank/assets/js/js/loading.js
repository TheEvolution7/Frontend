
const effects = [
    // Effect 1
    {
        options: {
            shapeColors: ['#fcd462'],
            imgTypes: ['element_1', 'element_2', 'element_5', 'element_6','element_9', 'element_10', 'element_11'],
        },
        hide: {
            lettersAnimationOpts: {
                duration: 800,
                delay: (t,i) => i*40,
                easing: 'easeOutExpo',
                opacity: {
                    value: 0, 
                    duration: 100,
                    delay: (t,i) => i*40,
                    easing: 'linear'
                },
                translateY: ['0%', '100%']
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 800,
                delay: (t,i) => i*40,
                easing: 'easeOutElastic',
                opacity: [0,1],
                translateY: ['100%', '0%']
            },
            shapesAnimationOpts: {
                duration: 300,
                delay: (t,i) => i*30+100,
                easing: 'easeOutQuad',
                translateY: () => [anime.random(-15,15),anime.random(-200,200)],
                scale: () => [0.2,randomBetween(0.5,1)],
                opacity: [
                    {
                        value: 1, 
                        duration:1, 
                        delay: (t,i) => i*30+100
                    }, 
                    {
                        value: 0,
                        duration: 200, 
                        delay:200,
                        easing: 'linear'}
                ]
            }
        }
    },
    // Effect 2
    {
        options: {
            shapeColors: ['#fcd462'],
            shapeTypes: ['circle'],
            imgTypes: ['element_1', 'element_2', 'element_5', 'element_6','element_9', 'element_10', 'element_11'],
            shapeFill: false,
            shapeStrokeWidth: 3
        },
        hide: {
            lettersAnimationOpts: {
                duration: 300,
                delay: (t,i,total) => i*25,
                easing: 'easeOutQuad',
                opacity: {
                    value: 0, 
                    duration: 100, 
                    delay: (t,i,total) => i*25,
                    easing: 'linear'
                },
                translateY: ['0%','-50%']
            },
            shapesAnimationOpts: {
                duration: 300,
                delay: (t,i) => i*20,
                easing: 'easeOutExpo',
                translateX: t => anime.random(-10,10),
                translateY: t => -1*anime.random(400,800),
                scale: [0.3,0.3],
                opacity: [
                    {
                        value: 1, 
                        duration:1, 
                        delay: (t,i) => i*20
                    }, 
                    {
                        value: 0,
                        duration: 300, 
                        easing: 'linear'
                    }
                ]
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 800,
                delay: (t,i,total) => Math.abs(total/2-i)*60,
                easing: 'easeOutElastic',
                opacity: [0,1],
                translateY: ['50%', '0%']
            },
            shapesAnimationOpts: {
                duration: 700,
                delay: (t,i) => i*60,
                easing: 'easeOutExpo',
                translateX: () => {
                    const rand = anime.random(-100,100);
                    return [rand,rand];
                },
                translateY: () => {
                    const rand = anime.random(-100,100);
                    return [rand,rand];
                },
                scale: () => [randomBetween(0.1,0.3),randomBetween(0.5,0.8)],
                opacity: [{value: 1, duration:1, delay: (t,i) => i*80}, {value:0,duration: 700, easing: 'easeOutQuad',delay: 100}]
            }
        }
    },
    // Effect 3
    {
        options: {
            shapeColors: ['#fcd462'],
            imgTypes: ['element_1', 'element_2', 'element_5', 'element_6','element_9', 'element_10', 'element_11'],
        },
        hide: {
            shapesAnimationOpts: {
                duration: 200,
                delay: (t,i) => i*20,
                easing: 'easeOutExpo',
                translateX: t => t.dataset.tx,
                translateY: t => t.dataset.ty - anime.random(400,800),
                scale: t => t.dataset.s,
                rotate: 0,
                opacity: {
                    value: 0, 
                    duration: 200, 
                    easing: 'linear'
                }
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 500,
                delay: (t,i) => i*60,
                easing: 'easeOutExpo',
                opacity: {
                    value: [0,1], 
                    duration: 50,
                    delay: (t,i) => i*60,
                    easing: 'linear'
                },
                translateY: (t,i) => i%2 ? [anime.random(-350,-300),0] : [anime.random(300,350),0]
            },
            shapesAnimationOpts: {
                duration: () => anime.random(1000,4000),
                delay: (t,i) => i*20,
                easing: [0.2,1,0.3,1],
                translateX: t => {
                    const tx = anime.random(-200,200);
                    t.dataset.tx = tx;
                    return [0,tx];
                },
                translateY: t => {
                    const ty = anime.random(-300,300);
                    t.dataset.ty = ty;
                    return [0,ty];
                },
                scale: t => {
                    const s = randomBetween(0.2,0.6);
                    t.dataset.s = s;
                    return [s,s];
                },  
                rotate: () => anime.random(-90,90),
                opacity: {
                    value: 0.6, 
                    duration: 1000, 
                    easing: 'linear'
                }
            }
        }
    },
    // Effect 4
    {
        options: {
            // shape elements will be on top of the letters
            shapesOnTop: true,
            shapeColors: ['#fcd462'],
            imgTypes: ['element_1', 'element_2', 'element_5', 'element_6','element_9', 'element_10', 'element_11'],
            totalShapes: 20
        },
        hide: {
            lettersAnimationOpts: {
                duration: 200,
                delay: (t,i,total) => (total-i-1)*20,
                easing: 'easeOutExpo',
                opacity: {
                    value: [1,0], 
                    duration: 100, 
                    delay: (t,i,total) => (total-i-1)*20,
                    easing: 'linear'
                },
                scale: [1,0]
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*60,
                easing: 'easeInOutExpo',
                opacity: [0,1],
                translateY: ['-100%', '0%']
            },
            shapesAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*20,
                easing: 'easeOutBack',
                translateX: {
                    value: () => [anime.random(-100,100),anime.random(-10,10)],
                    easing: 'easeOutExpo',
                },
                translateY: () => [anime.random(-100,0),anime.random(-400,-50)],
                scale: () => {
                    const rand = randomBetween(0.2,0.5);
                    return [rand,rand];
                },
                rotate: () => anime.random(-15,15),
                opacity: [
                    {
                        value: 1, 
                        duration:1, 
                        delay: (t,i) => i*20
                    }, 
                    {
                        value:0,
                        duration: 500, 
                        easing: 'linear'
                    }
                ]
            }
        }
    },
    // Effect 5
    {
        options: {
            shapesOnTop: true,
            shapeColors: ['#fcd462'],
            imgTypes: ['element_1', 'element_2', 'element_5', 'element_6','element_9', 'element_10', 'element_11'],
            shapeFill: false,
            shapeStrokeWidth: 4,
            totalShapes: 30
        },
        show: {
            lettersAnimationOpts: {
                duration: 300,
                delay: (t,i) => i*100,
                easing: 'easeInExpo',
                opacity: [0,1],
                translateY: ['-50%', '0%']
            },
            shapesAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*5+300,
                easing: [0.2,1,0.3,1],
                translateX: () => [0, anime.random(-100,100)],
                translateY: () => [50,anime.random(-100,150)],
                scale: () => [randomBetween(0.2,0.4),randomBetween(0.2,0.4)],
                rotate: () => anime.random(-25,25),
                opacity: [
                    {value: 1, duration: 1, easing: 'easeOutQuad', delay: (t,i) => i*5+300}, 
                    {value: 0, duration: 250, easing: 'easeOutQuad', delay: 200}
                ]
            }
        }
    },
    // Effect 6
    {
        options: {
            shapeColors: ['#fcd462'],
            imgTypes: ['element_1', 'element_2', 'element_5', 'element_6','element_9', 'element_10', 'element_11'],
        },
        hide: {
            lettersAnimationOpts: {
                duration: 200,
                delay: (t,i,total) => (total-i-1)*20,
                easing: 'easeOutExpo',
                opacity: {
                    value: [1,0], 
                    duration: 100, 
                    delay: (t,i,total) => (total-i-1)*20,
                    easing: 'linear'
                },
                scale: [1,0]
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*60,
                easing: 'easeInExpo',
                opacity: [0,1],
                scale: [0,1]
            },
            shapesAnimationOpts: {
                duration: 700,
                delay: (t,i) => i*40,
                easing: 'easeOutExpo',
                translateX: () => [0,anime.random(-20,20)],
                translateY: () => [0,anime.random(-400,400)],
                scale: () => [randomBetween(0.2,0.6),randomBetween(0.2,0.6)],  
                rotate: () => [0,anime.random(-16,16)],
                opacity: [
                    {value: 1, duration: 1, easing: 'linear'}, 
                    {value: 0, duration: 700, easing: 'easeOutQuad'}
                ]
            }
        }
    },
    // Effect 7
    {
        options: {
            shapeColors: ['#fcd462'],
            imgTypes: ['element_1', 'element_2', 'element_5', 'element_6','element_9', 'element_10', 'element_11'],
            shapeFill: false,
            shapeStrokeWidth: 10
        },
        hide: {
            shapesAnimationOpts: {
                duration: 250,
                delay: (t,i) => i*20,
                easing: 'easeOutExpo',
                translateX: () => [0,anime.random(-200,200)],
                translateY: () => [0,anime.random(-200,200)],
                scale: () => [randomBetween(0.2,0.6),randomBetween(0.2,0.6)],  
                rotate: () => [0,anime.random(-16,16)],
                opacity: [
                    {value: 1, duration: 1, easing: 'linear', delay: (t,i) => i*20}, 
                    {value: 0, duration: 150, delay: 100, easing: 'easeOutQuad'}
                ]
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*60,
                easing: 'easeOutExpo',
                opacity: {
                    value: [0,1], 
                    duration: 100, 
                    easing: 'linear'
                },
                translateY: (t,i) => i%2 ? [anime.random(-350,-300),0] : [anime.random(300,350),0]
            },
            shapesAnimationOpts: {
                duration: 500,
                delay: (t,i) => i*30,
                easing: 'easeOutExpo',
                translateX: () => [0,anime.random(-200,200)],
                translateY: () => [0,anime.random(-200,200)],
                scale: () => [randomBetween(0.2,0.6),randomBetween(0.2,0.6)],  
                rotate: () => [0,anime.random(-16,16)],
                opacity: [
                    {value: 1, duration: 1, easing: 'linear'}, 
                    {value: 0, duration: 350, delay: 150, easing: 'easeOutQuad'}
                ]
            }
        }
    },
    // Effect 8
    {
        options: {
            shapeColors: ['#fcd462'],
            imgTypes: ['element_1', 'element_2', 'element_5', 'element_6','element_9', 'element_10', 'element_11'],
            shapesOnTop: true
        },
        hide: {
            lettersAnimationOpts: {
                duration: 300,
                delay: (t,i)  => (t.parentNode.children.length-i-1)*30,
                easing: 'easeOutExpo',
                opacity: 0,
                translateY: (t,i) => i%2 === 0 ? '80%' : '-80%',
                rotate: (t,i) => i%2 === 0 ? -25 : 25
            },
            shapesAnimationOpts: {
                duration: 50,
                easing: 'easeOutExpo',
                translateX: t => t.dataset.tx,
                translateY: t => t.dataset.ty,
                scale: 0,
                rotate: 0,
                opacity: {
                    value: 0, 
                    duration: 50, 
                    easing: 'linear'
                }
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 400,
                delay: (t,i)  => (t.parentNode.children.length-i-1)*80,
                easing: 'easeOutElastic',
                opacity: {
                    value: [0,1], 
                    duration: 100, 
                    easing: 'linear'
                },
                translateY: (t,i) => i%2 === 0 ? ['-80%', '0%'] : ['80%', '0%'],
                rotate: [90,0]
            },
            shapesAnimationOpts: {
                duration: () => anime.random(1000,3000),
                delay: (t,i) => i*20,
                easing: 'easeOutElastic',
                translateX: t => {
                    const tx = anime.random(-250,250);
                    t.dataset.tx = tx;
                    return [0,tx];
                },
                translateY: t => {
                    const ty = anime.random(-250,250);
                    t.dataset.ty = ty;
                    return [0,ty];
                },
                scale: t => {
                    const s = randomBetween(0.1,0.6);
                    t.dataset.s = s;
                    return [s,s];
                },  
                rotate: () => anime.random(-90,90),
                opacity: {
                    value: 0.6, 
                    duration: 1000, 
                    easing: 'linear'
                }
            }
        }
    },
    // Effect 9
    {
        options: {
            shapeColors: ['#fcd462'],
            shapeTypes: ['rect','polygon'],
            imgTypes: ['element_1', 'element_2', 'element_5', 'element_6','element_9', 'element_10', 'element_11'],
            totalShapes: 1
        },
        hide: {
            lettersAnimationOpts: {
                duration: () => anime.random(800,1000),
                delay: () => anime.random(0,80),
                easing: 'easeInOutExpo',
                opacity: 0,
                translateY: '300%',
                rotateZ: () => anime.random(-50,50)
            },
            shapesAnimationOpts: {
                duration: 350,
                easing: 'easeOutExpo',
                translateX: t => [t.dataset.tx,anime.random(-25,25)],
                translateY: t => [t.dataset.ty,anime.random(-25,25)],
                scale: 1,
                rotate: 0,
                opacity: {
                    value: 0, 
                    duration: 200, 
                    easing: 'linear'
                }
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 800,
                delay: () => anime.random(0,75),
                easing: 'easeInOutExpo',
                opacity: [0,1],
                translateY: ['-300%','0%'],
                rotate: () => [anime.random(-50,50), 0]
            },
            shapesAnimationOpts: {
                duration: 2000,
                easing: 'easeOutExpo',
                translateY: t => {
                    const ty = anime.random(-300,300);
                    t.dataset.ty = ty;
                    return [anime.random(-25,25),ty];
                },
                scale: t => {
                    const s = randomBetween(1.5,2);
                    t.dataset.s = s;
                    return [s,s];
                },  
                rotate: () => anime.random(-45,45),
                opacity: {
                    value: [0,0.9], 
                    duration: 600,
                    delay: 300,
                    easing: 'linear'
                }
            }
        }
    }
];

let loading = () => {

    document.querySelector('body').style.overflow = 'hidden'
    let random = anime.random(0,effects.length - 1);
    let word = document.querySelector('.word');
    // add class to set font for word
    // word.classList.add('word--' + (random + 1));
    word.classList.add('word--' + 1);

    // set bg color for word
    document.querySelector('.word__bg--color').classList.add('bg--' + (random + 1))
    // document.querySelector('.word__bg--color').classList.add('bg--' + 3)
    
    // let wordFx = new Word(word, effects[random].options)
    let fxtype = random;
    let wordFx = new Word(word, effects[fxtype].options);
    let $loading = document.querySelector('.js-loading');

    wordFx.show(effects[fxtype].show).then(() => {
        setTimeout(() => {
            wordFx.hide(effects[fxtype].hide).then(() => {
	            anime({
	                targets: '.js-loading',
	                opacity: {
	                    value: 0,
	                    duration: 1000,
	                    easing: 'easeInOutQuart'
	                },
	                begin: function(anim) {

	                },
	                complete: function(anim) {
	                    document.querySelector('body').style.overflow = 'unset'
	                    $loading.style.display = 'none'
	                },
	            });
	        });
        }, 1000)
    })
    
    Pace.on('start', function() {
        
    })
    Pace.on('done', function() {
	    
    })
}
let ready = () => {
    // ready start
    (function() {

        // Get all images and texts, get the `canvas` element, and save slider length
        var sliderCanvas = document.querySelector('.pieces-slider__canvas');
        var imagesEl = [].slice.call(document.querySelectorAll('.pieces-slider__image'));
        var textEl = [].slice.call(document.querySelectorAll('.pieces-slider__text'));
        var slidesLength = imagesEl.length;

        // Define indexes related variables and functions
        var currentIndex = 0, currentImageIndex, currentTextIndex, currentNumberIndex;
        // Update current indexes for image, text and number
        function updateIndexes() {
            currentImageIndex = currentIndex * 3;
            currentTextIndex = currentImageIndex + 1;
            currentNumberIndex = currentImageIndex + 2;
        }
        updateIndexes();
        var textIndexes = [];
        var numberIndexes = [];

        // Some other useful variables
        var windowWidth = window.innerWidth;
        var piecesSlider;

        // Options for images
        var imageOptions = {
            angle: 45,
            extraSpacing: {extraX: 100, extraY: 200},
            piecesWidth: function() { return Pieces.random(50, 200); },
            ty: function() { return Pieces.random(-400, 400); }
        };

        // Options for texts
        var textOptions = {
            color: 'white',
            backgroundColor: '#5104ab',
            fontSize: function() { return windowWidth > 720 ? 50 : 30; },
            padding: '15 20 10 20',
            angle: -45,
            piecesSpacing: 2,
            extraSpacing: {extraX: 0, extraY: 300},
            piecesWidth: function() { return Pieces.random(50, 200); },
            ty: function() { return Pieces.random(-200, 200); },
            translate: function() {
                if (windowWidth > 1120) return {translateX: 200, translateY: 200};
                if (windowWidth > 720) return {translateX: 0, translateY: 200};
                return {translateX: 0, translateY: 100};
            }
        };

        // Options for numbers
        var numberOptions = {
            color: 'white',
            backgroundColor: '#5104ab',
            fontSize: function() { return windowWidth > 720 ? 60 : 20; },
            padding: function() { return windowWidth > 720 ? '18 35 10 38' : '18 25 10 28'; },
            angle: 0,
            piecesSpacing: 2,
            extraSpacing: {extraX: 10, extraY: 10},
            piecesWidth: 35,
            ty: function() { return Pieces.random(-200, 200); },
            translate: function() {
                if (windowWidth > 1120) return {translateX: -340, translateY: -180};
                if (windowWidth > 720) return {translateX: -240, translateY: -180};
                return {translateX: -140, translateY: -100};
            }
        };

        // Build the array of items to draw using Pieces
        var items = [];
        var imagesReady = 0;
        for (var i = 0; i < slidesLength; i++) {
            // Wait for all images to load before initializing the slider and event listeners
            var slideImage = new Image();
            slideImage.onload = function() {
                if (++imagesReady == slidesLength) {
                    initSlider();
                    initEvents();
                }
            };
            // Push all elements for each slide with the corresponding options
            items.push({type: 'image', value: imagesEl[i], options: imageOptions});
            items.push({type: 'text', value: textEl[i].innerText, options: textOptions});
            items.push({type: 'text', value: i + 1, options: numberOptions});
            // Save indexes
            textIndexes.push(i * 3 + 1);
            numberIndexes.push(i * 3 + 2);
            // Set image src
            slideImage.src = imagesEl[i].src;
        }

        // Initialize a Pieces instance with all items we want to draw
        function initSlider() {
            // Stop any current animation if the slider was initialized before
            if (piecesSlider) {
                piecesSlider.stop();
            }

            // Save the new Pieces instance
            piecesSlider = new Pieces({
                canvas: sliderCanvas,
                items: items,
                x: 'centerAll',
                y: 'centerAll',
                piecesSpacing: 1,
                fontFamily: ["'Helvetica Neue', sans-serif"],
                animation: {
                    duration: function() { return Pieces.random(1000, 2000); },
                    easing: 'easeOutQuint'
                },
                // debug: true
            });

            // Animate all numbers to rotate clockwise indefinitely
            piecesSlider.animateItems({
                items: numberIndexes,
                duration: 20000,
                angle: 360,
                loop: true
            });

            // Show current items: image, text and number
            showItems();
        }

        // Init Event Listeners
        function initEvents() {
            // Select prev or next slide using buttons
            document.querySelector('.pieces-slider__button--prev').addEventListener('click', prevItem);
            document.querySelector('.pieces-slider__button--next').addEventListener('click', nextItem);

            // Select prev or next slide using arrow keys
            document.addEventListener('keydown', function (e) {
                if (e.keyCode == 37) { // left
                    prevItem();
                } else if (e.keyCode == 39) { // right
                    nextItem();
                }
            });

            // Handle `resize` event
            window.addEventListener('resize', resizeStart);
        }

        // Show current items: image, text and number
        function showItems() {
            // Show image pieces
            piecesSlider.showPieces({items: currentImageIndex, ignore: ['tx'], singly: true, update: (anim) => {
                // Stop the pieces animation at 60%, and run a new indefinitely animation of `ty` for each piece
                if (anim.progress > 60) {
                    var piece = anim.animatables[0].target;
                    var ty = piece.ty;
                    anime.remove(piece);
                    anime({
                        targets: piece,
                        ty: piece.h_ty < 300
                            ? [{value: ty + 10, duration: 1000}, {value: ty - 10, duration: 2000}, {value: ty, duration: 1000}]
                            : [{value: ty - 10, duration: 1000}, {value: ty + 10, duration: 2000}, {value: ty, duration: 1000}],
                        duration: 2000,
                        easing: 'linear',
                        loop: true
                    });
                }
            }});
            // Show pieces for text and number, using alternate `ty` values
            piecesSlider.showPieces({items: currentTextIndex});
            piecesSlider.showPieces({items: currentNumberIndex, ty: function(p, i) { return p.s_ty - [-3, 3][i % 2]; }});
        }

        // Hide current items: image, text and number
        function hideItems() {
            piecesSlider.hidePieces({items: [currentImageIndex, currentTextIndex, currentNumberIndex]});
        }

        // Select the prev item: hide current items, update indexes, and show the new current item
        function prevItem() {
            hideItems();
            currentIndex = currentIndex > 0 ? currentIndex - 1 : slidesLength - 1;
            updateIndexes();
            showItems();
        }

        // Select the next item: hide current items, update indexes, and show the new current item
        function nextItem() {
            hideItems();
            currentIndex = currentIndex < slidesLength - 1 ? currentIndex + 1 : 0;
            updateIndexes();
            showItems();
        }

        // Handle `resize` event
        
        var initial = true, hideTimer, resizeTimer;

        // User starts resizing, so wait 300 ms before reinitialize the slider
        function resizeStart() {
            if (initial) {
                initial = false;
                if (hideTimer) clearTimeout(hideTimer);
                sliderCanvas.classList.add('pieces-slider__canvas--hidden');
            }
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeEnd, 300);
        }

        // User ends resizing, then reinitialize the slider
        function resizeEnd() {
            initial = true;
            windowWidth = window.innerWidth;
            initSlider();
            hideTimer = setTimeout(() => {
                sliderCanvas.classList.remove('pieces-slider__canvas--hidden');
            }, 500);
        }
    })();

   
}

// check for document ready
let docBody = document.body;

if (document.readyState == 'loading') {
    loading()
}
if (document.readyState === 'complete' || document.readyState !== 'loading') {
    docBody.getBoundingClientRect().top < 0 ? (docBody.style.overflow = 'unset', window.scrollTo(0, 0), true) : false;
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

