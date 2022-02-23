function getMousePos(e) {
	let posx = 0
	let posy = 0;
	if (!e) { e = window.event };
	if (e.pageX || e.pageY) 	{
		posx = e.pageX;
		posy = e.pageY;
	}
	else if (e.clientX || e.clientY) 	{
		posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	return { x : posx, y : posy }
}
let Ob = function(elNode, {direction, radius}) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.rotateX = 0;
	this.rotateY = 0;
	this.rotateZ = 0;
	this.origin = {x: 0, y: 0, z: 0};
	this.rotation = {x: 30, y: 25, z: 0}
	this.speed = 0x3f;
	this.radius = radius || 33;
	this.direction = direction || 1;
	this.el = elNode;
}

Ob.prototype.update = function(affectVector) {
	this.x = this.direction * affectVector.x * this.radius * affectVector.percentage;
	this.y = this.direction * affectVector.y * this.radius * affectVector.percentage;
	this.z = this.direction * this.radius * affectVector.percentage;

	this.rotateX = this.rotation.x * this.direction * affectVector.percentage;
	this.rotateY = this.rotation.y * this.direction * affectVector.percentage;
	// console.log(this.rotateX, this.rotateY)
	this._updatePosition();
}

Ob.prototype._updatePosition = function() {

	this.el.style.WebkitTransform = 
	this.el.style.transform = `
		translate3d(${this.x}px, ${this.y}px, ${this.z}px)
	`;

}

let FxWrap = function(el) {
	this.el = document.querySelector(el);
	this.unitVector = {x: 0, y: 0};
	this.bound = this.el.getBoundingClientRect();
	this.radius = this.bound.width;
	this.objects = [];
	this._getObjects();
	this._initEvent();
}
FxWrap.prototype._getObjects = function() {
	let self = this;

	self.objects = [...self.el.querySelectorAll('.js-object-wrap')].map(function(item) {
		let radius = item.getAttribute('radius') ;
		let direction = item.getAttribute('direction') == 0 ? -1 : 1;
		let ob = item.querySelector('.js-effect-wrap');
		return new Ob(ob, {direction, radius});
	});
}

FxWrap.prototype._initEvent = function() {

	let self = this;

	self.mouseenterFn = function(e) {
		let mousePos = getMousePos(e);
		
		// calculating affect vector
		let affectVector = {x: 0, y: 0, percentage: 0}; // unit vector and affect percentage
		let vector = {
			x: mousePos.x - (self.bound.width/2),
			y: mousePos.y - (self.bound.height/2)
		}

		// find length of "vector"
		let length = Math.sqrt(vector.x*vector.x + vector.y*vector.y)

		// calculating unit vector
		affectVector.x = vector.x / length;
		affectVector.y = vector.y / length;

		// find percentage, max is 1
		affectVector.percentage = Math.min(1, length / self.radius)


		// updateObject
		self.objects.map(function(ob) {
			ob.update(affectVector);
		})

	}

	self.el.addEventListener('mousemove', self.mouseenterFn);
}


// self move Object
let SelfMoveOb = function(elNode, {radius, speed, direction, path}) {
	this.el = elNode;
	this.radius = radius || 5;
	this.direction = direction || 1;
	this.speed = speed || 3; // deg
	this.path = path || 'circle';
	this.isMoveForward = false;
	this.x = 0;
	this.y = 0;
	this.unitVector = {x: Math.cos(-Math.PI / 4), y: Math.sin(-Math.PI / 4)}
}
SelfMoveOb.prototype.updateDirection = function() {
	let self = this;
	if (self.path == 'fix' ) {
		self.isMoveForward = !self.isMoveForward;
	}
}
SelfMoveOb.prototype.update = function(process) {
	let self = this;
	let rotationProcess = process * Math.PI * 2;
	let unitVector = {
		x: Math.cos(rotationProcess * self.direction),
		y: Math.sin(rotationProcess * self.direction)
	}
	if(self.isMoveForward) {
		process = 1 - process;
	}
	if (this.path == 'fix') {
		unitVector = { x: process * this.unitVector.x * this.direction, y: process * this.unitVector.y * this.direction};
	}
	
	self.x = unitVector.x * self.radius ;
	self.y = unitVector.y * self.radius ;
	self.el.style.WebkitTransform = 
	self.el.style.transform = `
		translate(${self.x}px, ${self.y}px)
	`;

}

// seflMove object manager, combine selfMove Object to 1 group
let SelfMoveObManager = function({duration}) {
	this.obs = [];
	this._progressTween = null;
	this._progress = 0;
	this.duration = duration || 2;
	this._init();
}
SelfMoveObManager.prototype.addObject = function(ob) {
	this.obs.push(ob);
}
SelfMoveObManager.prototype._init = function() {

}
SelfMoveObManager.prototype.startProcess = function() {
	let self = this;
	self._progressTween && self._progressTween.kill(),
	// console.log(self.duration)
	self._progressTween = TweenMax.to(self, self.duration, {
		_progress: 1,
		ease: Power0.easeNone,
		onUpdate: function() {
			// console.log(self._progress);
		},
		onComplete: function() {
			TweenMax.delayedCall(0 * Math.random(), function() {
				self._progress = 0,
				self.startProcess();
				self.obs.map((ob) => {
					ob.updateDirection();
					// console.log(ob)
				})
			})
		}
	})
}
SelfMoveObManager.prototype.update = function() {
	let self = this;
	// console.log(self._progress);
	self.obs.map((ob) => {
		ob.update(self._progress);
		// console.log(ob)
	})
}
SelfMoveObManager.prototype.loop = function() {
	let self = this;
	requestAnimationFrame(this.loop.bind(this));
	// update here
	this.update();
}
SelfMoveObManager.prototype.run = function() {
	this.startProcess();
	this.loop();
}


// manage selfmove object groups
let ObGroupManager = function() {
	this.groups = [];
	this._init();
	this._run();
}
ObGroupManager.prototype._init = function() {
	[...document.querySelectorAll('.js-self-move')].map((el) => {
		let group_id = 'group-' + el.getAttribute('group');
		let direction = el.getAttribute('direction') ? -1 : 1;
		let radius = el.getAttribute('radius');
		let path = el.getAttribute('path');
		if (!this.groups[group_id]) {
			this.groups[group_id] = new SelfMoveObManager({});
			this.groups.push(group_id)
		} 
		let ob = new SelfMoveOb(el, {path, direction, radius});
		this.groups[group_id].addObject(ob);
	})
	console.log(this.groups);
}
ObGroupManager.prototype._run = function() {
	let self = this;
	self.groups.map((group_id) => {
		self.groups[group_id].run();
	})
}

// start fx
new FxWrap('.js-wrap-box');
new ObGroupManager();

$('.js-wrap-box ').hide();
$('.bubble').hide();
$(window).on('load', function(){
	$('.preloader').fadeOut();
	setTimeout(() => {
		$('.js-wrap-box ').fadeIn();
		$('.bubble').fadeIn();
	}, 400);
	
	
})



// if you want to learn all my GreenSock tips and tricks, I got loads of training at
// https://www.creativecodingclub.com


function init() {
	let width = window.innerWidth
let height = window.innerHeight
let centerX = width/2
let centerY = height/2
let toggle_btn = document.querySelector("#toggle")
console.log(width)
let master = gsap.timeline()

// CustomEase.create("large", { //name
//   wiggles: 8, //number of wiggles/oscilations 
//   type:"easeInOut" 
// });

// CustomEase.create("medium", { //name
//   wiggles: 8, //number of wiggles/oscilations 
//   type:"easeInOut" 
// });

// CustomEase.create("small", { //name
//   wiggles: 20, //number of wiggles/oscilations 
//   type:"easeInOut" 
// });

let small = {
	ease:"small",
	duration:2,
	min:0.1,
	max:0.3,
	scaleEase:"none"
}

let medium = {
	ease:"medium",
	duration:4,
	min:0.4,
	max:0.6,
	scaleEase:"power2.in"
	
}

let large = {
	ease:"large",
	duration:5,
	min:0.7,
	max:1	,
	scaleEase:"power4.in"
}

let configs = [small, medium, large]


















function weightedRandom(collection, ease) {
	return gsap.utils.pipe(
		Math.random,            //random number between 0 and 1
		gsap.parseEase(ease),   //apply the ease
		gsap.utils.mapRange(0, 1, -0.5, collection.length-0.5), //map to the index range of the array, stretched by 0.5 each direction because we'll round and want to keep distribution (otherwise linear distribution would be center-weighted slightly)
		gsap.utils.snap(1),     //snap to the closest integer
		i => collection[i]      //return that element from the array
	);
}

// usage:
let getRandomConfig = weightedRandom(configs, "power4.in");



function createBubbles(amount) {
	for(let i = 0; i < amount; i++){
		let bubble = document.createElement("div")
		
		let bubbleType = getRandomConfig()
		let scale = gsap.utils.random(bubbleType.min, bubbleType.max)
		let ease = bubbleType.ease
		let scaleEase = bubbleType.scaleEase
		let duration = bubbleType.duration
		let tl = gsap.timeline({repeat:-1, repeatDelay:Math.random() * 3})
		let relativeDirection = Math.random() < 0.5 ? "+=" : "-="
		//console.log(bubbleType.ease, scale)
		
		bubble.setAttribute("class", "bubble")
		document.body.appendChild(bubble)
	   tl.set(bubble, {x:gsap.utils.random(0,width), y:height+(100 * scale), xPercent:-50, yPercent:-50, scale:0})
		
		tl.to(bubble, {y:-200, duration:duration, ease:"power1.in"})
		tl.to(bubble, {duration:1, scale:scale, ease:scaleEase}, gsap.utils.random(0, 0.5))
		
		tl.to(bubble, {x:relativeDirection + scale * 80, ease:ease, duration:duration * 2, }, gsap.utils.random(0.3, 1.5))
		
		master.add(tl, i * 0.1)
		

		
	}
	master.timeScale(200/height)
	master.time(100000)
}

// toggle_btn.addEventListener("click", () => {
// 	master.reversed(!master.reversed())
// })


createBubbles(50)
	gsap.to(".js-wrap-box", {opacity:1, duration:10})
}


gsap.delayedCall(0.1, init)
