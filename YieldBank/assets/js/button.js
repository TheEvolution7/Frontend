(function() {

    const arrOpts = [
        {
            type: 'circle',
            easing: 'easeOutQuart',
            size: 2.5,
            particlesAmountCoefficient: 3,
            oscillationCoefficient: 20,
            color: function() {
                return Math.random() < 0.5 ? '#fcd462' : '#fcd462'; 
            }
        },
        {
            type: 'circle',
            easing: 'easeOutQuart',
            size: 2.5,
            particlesAmountCoefficient: 3,
            oscillationCoefficient: 20,
            color: function() {
                return Math.random() < 0.5 ? '#fcd462' : '#fcd462'; 
            }
        },
        {
            type: 'circle',
            easing: 'easeOutQuart',
            size: 2.5,
            particlesAmountCoefficient: 3,
            oscillationCoefficient: 20,
            color: function() {
                return Math.random() < 0.5 ? '#fcd462' : '#fcd462'; 
            }
        },
        {
            type: 'circle',
            easing: 'easeOutQuart',
            size: 2.5,
            particlesAmountCoefficient: 3,
            oscillationCoefficient: 20,
            color: function() {
                return Math.random() < 0.5 ? '#fcd462' : '#fcd462'; 
            }
        },
        {
            type: 'circle',
            easing: 'easeOutQuart',
            size: 2.5,
            particlesAmountCoefficient: 3,
            oscillationCoefficient: 20,
            color: function() {
                return Math.random() < 0.5 ? '#fcd462' : '#fcd462'; 
            }
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ];
    
    const items = document.querySelectorAll('.grid__item');
    items.forEach((el, pos) => {
        const bttn = el.querySelector('a.main-btn');
        // const bttnBack = el.querySelector('button.action');
        
        let particlesOpts = arrOpts[pos];
        particlesOpts.complete = () => {
            if ( !buttonVisible ) {
                anime.remove(bttnBack);
                anime({
                    targets: bttnBack,
                    duration: 300,
                    easing: 'easeOutQuint',
                    opacity: 1,
                    scale: [0,1]
                });
                bttnBack.style.pointerEvents = 'auto';
            }
        };
        const particles = new Particles(bttn, particlesOpts);
        
        let buttonVisible = true;
        bttn.addEventListener('click', () => {
            if ( !particles.isAnimating() && buttonVisible ) {
                particles.disintegrate();
                buttonVisible = !buttonVisible;
            }
        });
        // bttnBack.addEventListener('click', () => {
        //     if ( !particles.isAnimating() && !buttonVisible ) {
        //         anime.remove(bttnBack);
        //         anime({
        //             targets: bttnBack,
        //             duration: 300,
        //             easing: 'easeOutQuint',
        //             opacity: 0,
        //             scale: 0
        //         });
        //         bttnBack.style.pointerEvents = 'none';

        //         particles.integrate({
        //             duration: 800,
        //             easing: 'easeOutSine'
        //         });
        //         buttonVisible = !buttonVisible;
        //     }
        // });
    });

})();
