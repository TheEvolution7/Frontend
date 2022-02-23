/**
 * wordFx.js
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

    // From http://snipplr.com/view/37687/random-number-float-generator/
    function randomBetween(minValue,maxValue,precision) {
        if( typeof(precision) == 'undefined' ) {
            precision = 2;
        }
        return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
    }


    let winsize = {width: window.innerWidth, height: window.innerHeight};
    let universalLink = document.querySelector('.element-universal-link').getAttribute('link');
    class Shape {
        constructor(type, letterRect, options, imgTypes) {
            this.DOM = {};
            this.options = {
                shapeTypes: ['circle', 'rect', 'polygon'],
                shapeColors: ['#e07272', '#0805b5', '#49c6ff', '#8bc34a', '#1e1e21', '#e24e81', '#e0cd24'],
                shapeFill: true,
                shapeStrokeWidth: 1
            }
            Object.assign(this.options, options);
            this.type = type || this.options.shapeTypes[0];
            this.imgType = type || this.options.imgTypes[0];
            this.randomType = randomBetween(0,this.options.imgTypes.length-1,0) + 1;
            if (this.type === 'random') this.imgType = this.options.imgTypes[this.randomType];

            if ( this.type !== 'random' && !this.options.types.includes(this.type) ) return;
            if (this.type === 'random') this.type = this.options.shapeTypes[randomBetween(0,this.options.shapeTypes.length-1,0)];

            // if ( this.imgType !== 'random' && !this.options.types.includes(this.imgType) ) return;
            

            this.letterRect = letterRect;
            this.init();
        }
        init() {
            this.DOM.el = document.createElementNS('http://www.w3.org/2000/svg', this.type);
            this.DOM.imgEl = document.createElement('img');
            // this.DOM.imgEl.setAttribute('style', `
            //     width: ${(this.letterRect.width)};
            //     left: ${this.letterRect.left + (this.letterRect.width)/2}px;
            //     top: ${this.letterRect.top + this.letterRect.height/2}px;
            //     position: absolute;
            // `);
            this.DOM.imgEl.setAttribute('style', `
                width: ${(this.letterRect.width)};
                left: ${this.letterRect.left }px;
                top: ${this.letterRect.top }px;
                position: absolute;
            `);
            this.DOM.el.style.opacity = 0;
            this.configureShapeType();
            
            if ( this.options.shapeFill ) {
                this.DOM.el.setAttribute('fill', this.options.shapeColors[randomBetween(0,this.options.shapeColors.length-1,0)]);
            }
            else {
                this.DOM.el.setAttribute('fill', 'none');
                this.DOM.el.setAttribute('stroke-width', this.options.shapeStrokeWidth);
                this.DOM.el.setAttribute('stroke', this.options.shapeColors[randomBetween(0,this.options.shapeColors.length-1,0)]);
            }
        }
        configureShapeType() {
            this.DOM.el.style.transformOrigin = `${this.letterRect.left + this.letterRect.width/2}px ${this.letterRect.top + this.letterRect.height/2}px`;

            if ( this.type === 'circle' ) {
                const r = 0.5*this.letterRect.width;
                this.DOM.el.setAttribute('r', r);
                this.DOM.el.setAttribute('cx', this.letterRect.left + this.letterRect.width/2);
                this.DOM.el.setAttribute('cy', this.letterRect.top + this.letterRect.height/2);
            }
            else if ( this.type === 'rect' ) {
                const w = randomBetween(0.05,0.5,3)*this.letterRect.width;
                const h = randomBetween(0.05,0.5,3)*this.letterRect.height;
                this.DOM.el.setAttribute('width', w);
                this.DOM.el.setAttribute('height', h);
                this.DOM.el.setAttribute('x', this.letterRect.left + (this.letterRect.width-w)/2);
                this.DOM.el.setAttribute('y', this.letterRect.top + (this.letterRect.height-h)/2);
            }
            else if ( this.type === 'polygon' ) {
                this.DOM.el.setAttribute('points', `${this.letterRect.left} ${this.letterRect.top+this.letterRect.height}, ${this.letterRect.left+this.letterRect.width/2} ${this.letterRect.bottom-this.letterRect.width}, ${this.letterRect.left+this.letterRect.width} ${this.letterRect.top+this.letterRect.height}`);
            }

            if (this.imgType) {
                this.DOM.imgEl.setAttribute('src', universalLink + 'element_' + this.randomType +'.png');
            }
        }
        onResize( letterRect ) {
            this.letterRect = letterRect;
            this.configureShapeType();
        }
    };

    class Letter {
        constructor(el, svg, options, imgContainer) {
            this.DOM = {};
            this.DOM.el = el;
            this.DOM.svg = svg;
            this.DOM.imgContainer = imgContainer;
            this.options = {
                totalShapes: 5
            }
            Object.assign(this.options, options);
            this.rect = this.DOM.el.getBoundingClientRect();
            this.totalShapes = this.options.totalShapes;
            this.init();
            this.initEvents();
        }
        init() {
            this.shapes = [];
            var imgType = this.options.imgType || false
            for (let i = 0; i <= this.totalShapes-1; ++i) {
                const shape = new Shape('random', this.rect, this.options, imgType);
                this.shapes.push(shape);
                this.DOM.svg.appendChild(shape.DOM.el);
                this.DOM.imgContainer.appendChild(shape.DOM.imgEl);
            }
        }
        initEvents() {
            window.addEventListener('resize', debounce(() => {
                this.rect = this.DOM.el.getBoundingClientRect();
                for (let i = 0; i <= this.totalShapes-1; ++i) {
                    const shape = this.shapes[i];
                    shape.onResize(this.rect);
                }
            }, 20));
        }
    };


    class Word {
        constructor(el, options) {
            this.DOM = {};
            this.DOM.el = el;
            this.options = {
                shapesOnTop: false
            }
            Object.assign(this.options, options);
            this.init();
            this.initEvents();
        }
        init() {
            this.createSVG();
            this.createElementContainer();
            charming(this.DOM.el);
            this.letters = [];
            Array.from(this.DOM.el.querySelectorAll('span')).forEach(letter => this.letters.push(new Letter(letter, this.DOM.svg, this.options, this.DOM.elementContainer)));
        }
        initEvents() {
            window.addEventListener('resize', debounce(() => {
                winsize = {width: window.innerWidth, height: window.innerHeight};
                this.DOM.svg.setAttribute('width', `${winsize.width}px`);
                this.DOM.svg.setAttribute('height',`${winsize.width}px`);
                this.DOM.svg.setAttribute('viewbox',`0 0 ${winsize.width} ${winsize.height}`);
            }, 20));
        }
        createSVG() {
            this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.DOM.svg.setAttribute('class', 'shapes');
            this.DOM.svg.setAttribute('width', `${winsize.width}px`);
            this.DOM.svg.setAttribute('height',`${winsize.width}px`);
            this.DOM.svg.setAttribute('viewbox',`0 0 ${winsize.width} ${winsize.height}`);
            if ( this.options.shapesOnTop ) {
                this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el.nextSibling);
            }
            else {
                this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el);
            }
        }
        createElementContainer() {
            this.DOM.elementContainer = document.createElement('div');
            this.DOM.elementContainer.setAttribute('class', 'img-list');
            this.DOM.elementContainer.setAttribute('style', `width: ${winsize.width}; height: ${winsize.width}; position: absolute; top: 0; left: 0`);
            if ( this.options.shapesOnTop ) {
                this.DOM.el.parentNode.insertBefore(this.DOM.elementContainer, this.DOM.el.nextSibling);
            }
            else {
                this.DOM.el.parentNode.insertBefore(this.DOM.elementContainer, this.DOM.el);
            }
        }
        show(config) {
            return this.toggle('show', config);
        }
        hide(config) {
            return this.toggle('hide', config);
        }
        toggle(action = 'show', config) {
            return new Promise((resolve, reject) => {
                const toggleNow = () => {
                    for (let i = 0, len = this.letters.length; i <= len-1; ++i) {
                        this.letters[i].DOM.el.style.opacity = action === 'show' ? 1 : 0;
                    }
                    resolve();
                };

                if ( config && Object.keys(config).length !== 0 ) {
                    if ( config.shapesAnimationOpts ) {
                        for (let i = 0, len = this.letters.length; i <= len-1; ++i) {
                            const letter = this.letters[i];
                            setTimeout( function(letter) {
                                return () => {
                                    // config.shapesAnimationOpts.targets = letter.shapes.map(shape => shape.DOM.el);
                                    config.shapesAnimationOpts.targets = letter.shapes.map(shape => shape.DOM.imgEl);
                                    anime.remove(config.shapesAnimationOpts.targets);
                                    anime(config.shapesAnimationOpts);
                                }
                            }(letter), config.lettersAnimationOpts && config.lettersAnimationOpts.delay ? config.lettersAnimationOpts.delay(letter.DOM.el,i) : 0);        
                        }
                    }
                    if ( config.lettersAnimationOpts ) {
                        config.lettersAnimationOpts.targets = this.letters.map(letter => letter.DOM.el);
                        config.lettersAnimationOpts.complete = () => {
                            if (action === 'hide' ) {
                                for (let i = 0, len = config.lettersAnimationOpts.targets.length; i <= len-1; ++i) {
                                    config.lettersAnimationOpts.targets[i].style.transform = 'none';
                                }
                            }
                            resolve();
                        };
                        anime(config.lettersAnimationOpts);
                    }
                    else {
                        toggleNow();
                    }
                }
                else {
                    toggleNow();
                }
            });
        }
    };


    window.Word = Word;
};