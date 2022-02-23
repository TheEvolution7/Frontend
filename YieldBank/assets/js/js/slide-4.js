"use strict";

const {
  PI,
  cos,
  sin,
  abs,
  round } =
Math;
const TAU = 2 * PI;
const rand = n => Math.random() * n;
const fadeInOut = (t, m) => abs((t + 0.5 * m) % m - 0.5 * m) / (0.5 * m);

let emitter, mouse;

class Mouse {
  constructor(x, y) {
    this.hover = false;
    this.targetPosition = new Vector2(
    0.5 * window.innerWidth,
    0.6 * window.innerHeight);

    this.position = new Vector2(
    0.5 * window.innerWidth,
    0.4 * window.innerHeight);

    window.addEventListener("mousemove", e => {
      this.targetPosition.x = e.clientX;
      this.targetPosition.y = e.clientY;
      this.hover = true;
    });

    window.addEventListener("mouseout", () => {
      this.targetPosition.x = 0.5 * window.innerWidth;
      this.targetPosition.y = 0.6 * window.innerHeight;
      this.hover = false;
    });

    window.addEventListener("resize", this.resize.bind(this));
  }
  resize() {
    this.targetPosition.x = 0.5 * window.innerWidth;
    this.targetPosition.y = 0.6 * window.innerHeight;
  }
  update() {
    this.position.lerp(this.targetPosition, 0.025);
  }}


class Ray {
  constructor() {
    this.init();
  }
  init() {
    this.ttl = 100 + rand(200);
    this.life = 0;
    this.growth = round(rand(1)) ? 0.5 : -0.5;
    this.len = round(0.35 * window.innerHeight * rand(1)) + 100;
    this.width = 3 * rand(0.5);
    this.velocity = 0.25 - rand(0.5);
    this.position = {};
    this.position.start = new Vector2(
    window.innerWidth * rand(1),
    window.innerHeight * 0.5 + (15 - rand(30)));

    this.angle = this.position.start.angleTo(mouse.position);
    this.position.end = new Vector2(
    this.position.start.x + this.len * cos(this.angle),
    this.position.start.y + this.len * sin(this.angle));

    this.hue = round(40 + rand(20));
    this.saturation = round(50 + rand(20));
  }
  color(ctx) {
    this.alpha = fadeInOut(this.life, this.ttl);

    let color1 = `hsla(${this.hue},100%,100%,0)`,
    color2 = `hsla(${this.hue},${this.saturation}%,70%,${this.alpha})`,
    color3 = `hsla(${this.hue},50%,70%,0)`,
    gradient = ctx.createLinearGradient(
    this.position.start.x,
    this.position.start.y,
    this.position.end.x,
    this.position.end.y);


    gradient.addColorStop(0, color1);
    gradient.addColorStop(0.25, color2);
    gradient.addColorStop(1, color3);

    return gradient;
  }
  update() {
    this.life++;
    this.len += this.growth;
    this.angle = mouse.position.angleTo(this.position.start);
    this.position.end.x = this.position.start.x + this.len * cos(this.angle);
    this.position.end.y = this.position.start.y + this.len * sin(this.angle);
    this.position.start.addScalarX(this.velocity);
    this.position.end.addScalarX(this.velocity);
    if (this.life > this.ttl) this.init();
  }
  draw(canvas) {
    canvas.line(
    this.position.start.x,
    this.position.start.y,
    this.position.end.x,
    this.position.end.y,
    this.width,
    this.color(canvas.buffer));

  }}


class Particle {
  constructor() {
    this.life = Math.round(rand(200));
    this.init();
  }
  init() {
    this.ttl = 100 + rand(300);
    this.radius = 3 + rand(3);
    this.position = new Vector2(
    window.innerWidth * rand(1),
    window.innerHeight * 0.5 + (15 - rand(30)));

    this.velocity = new Vector2(0.25 - rand(0.5), 0.25 - rand(0.5));
    this.hue = Math.round(50 + rand(20));
  }
  color(ctx) {
    this.alpha = 0.65 * this.wave;
    return `rgb(209, 139, 54)`;
  }
  update() {
    this.life++;
    this.wave = fadeInOut(this.life, this.ttl);
    let nTheta =
    noise.simplex3(
    this.position.x * 0.0025,
    this.position.y * 0.0025,
    this.life * 0.0025) *
    TAU;
    let mTheta = mouse.position.angleTo(this.position);
    this.velocity.
    lerp(
    {
      x: cos(nTheta),
      y: sin(nTheta) },

    0.05).

    lerp(
    {
      x: cos(mTheta),
      y: sin(mTheta) },

    0.075);

    this.position.add(this.velocity);
    if (this.life > this.ttl) {
      this.life = 0;
      this.init();
    }
  }
  draw(canvas) {
    canvas.arc(
    this.position.x,
    this.position.y,
    this.radius * this.wave + 1,
    0,
    TAU,
    this.color(canvas.buffer));

  }}


class Canvas {
  constructor(selector) {
    this.element =
    document.querySelector(selector) ||
    (() => {
      let element = document.createElement("canvas");
      element.style = `position: absolute; width: 100vw; height: 100vh;`;
      document.body.appendChild(element);
      return element;
    })();
    this.ctx = this.element.getContext("2d");
    this.frame = document.createElement("canvas");
    this.buffer = this.frame.getContext("2d");
    this.dimensions = new Vector2();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.dimensions.x = this.frame.width = this.element.width = window.innerWidth;
    this.dimensions.y = this.frame.height = this.element.height =
    window.innerHeight;
  }
  clear() {
    this.ctx.clearRect(0, 0, this.dimensions.x, this.dimensions.y);
    this.buffer.clearRect(0, 0, this.dimensions.x, this.dimensions.y);
  }
  line(x1, y1, x2, y2, w, c) {
    this.buffer.beginPath();
    this.buffer.strokeStyle = c;
    this.buffer.lineWidth = w;
    this.buffer.moveTo(x1, y1);
    this.buffer.lineTo(x2, y2);
    this.buffer.stroke();
    this.buffer.closePath();
  }
  rect(x, y, w, h, c) {
    this.buffer.fillStyle = c;
    this.buffer.fillRect(x, y, w, h);
  }
  arc(x, y, r, s, e, c) {
    this.buffer.beginPath();
    this.buffer.fillStyle = c;
    this.buffer.arc(x, y, r, s, e);
    this.buffer.fill();
    this.buffer.closePath();
  }
  render() {
    this.ctx.drawImage(this.frame, 0, 0);
  }
  drawImage(image, x = 0, y = 0) {
    this.buffer.drawImage(image, x, y);
  }}


class Emitter {
  constructor() {
    this.background = new Canvas(".background");
    this.canvas = new Canvas(".canvas");
    this.title = {
      element: document.querySelector(".title"),
      value: "Rays & Particles" };

    this.input = {
      rays: {
        element: document.querySelector("#ray-input"),
        label: document.querySelector(".ray-count"),
        value: `Rays: ${this.rayCount}` },

      particles: {
        element: document.querySelector("#particle-input"),
        label: document.querySelector(".particle-count"),
        value: `Particles: ${this.particleCount}` } };


    this.rayCount = this.input.rays.element.value;
    this.particleCount = this.input.particles.element.value;
    this.input.rays.element.addEventListener("input", e => {
      this.rayCount = e.target.value;
      this.updateLabels();
    });
    this.input.particles.element.addEventListener("input", e => {
      this.particleCount = e.target.value;
      this.updateLabels();
    });
    this.input.rays.element.addEventListener("change", this.init.bind(this));
    this.input.particles.element.addEventListener("change", this.init.bind(this));
    this.init();
  }
  init() {
    this.objects = [];
    for (let i = 0; i < this.rayCount; i++) {
      this.objects.push(new Ray());
    }
    for (let i = 0; i < this.particleCount; i++) {
      this.objects.push(new Particle());
    }
    this.updateTitle();
    this.updateLabels();
  }
  updateLabels() {
    this.input.rays.value = `Rays: ${this.rayCount}`;
    this.input.rays.label.innerHTML = this.input.rays.value;
    this.input.particles.value = `Particles: ${this.particleCount}`;
    this.input.particles.label.innerHTML = this.input.particles.value;
  }
  updateTitle() {
    if (this.rayCount > 0 || this.particleCount > 0) {
      this.title.value = `
				${this.rayCount > 0 ? "Rays" : ""}
				${this.rayCount > 0 && this.particleCount > 0 ? " & " : ""}
				${this.particleCount > 0 ? "Particles" : ""}
			`;
    } else {
      this.title.value = "(╯°□°）╯︵ ┻━┻";
    }
    this.title.element.innerHTML = this.title.value;
  }
  drawBackground() {
    let color1 = "rgb(31,31,18)",
    color2 = "#d28d37",
    gradient = this.canvas.buffer.createLinearGradient(
    0.5 * this.canvas.dimensions.x,
    0,
    0.5 * this.canvas.dimensions.x,
    this.canvas.dimensions.y);

    gradient.addColorStop(0, color1);
    gradient.addColorStop(0.5, color2);
    gradient.addColorStop(1, color1);
    this.background.rect(
    0,
    0,
    this.canvas.dimensions.x,
    this.canvas.dimensions.y,
    gradient);

    this.background.buffer.save();
    this.background.buffer.filter = "blur(6px)";
    this.background.buffer.globalCompositeOperation = "lighter";
    this.background.drawImage(this.canvas.frame);
    this.background.buffer.restore();
    this.background.render();
  }
  render() {
    this.canvas.clear();
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].update();
      this.objects[i].draw(this.canvas);
    }
    this.canvas.render();
    this.drawBackground();
  }}


function loop() {
  mouse.update();
  emitter.render();
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame = (() => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    });

})();

window.onload = () => {
  noise.seed(Math.round(2000 * rand(1)));
  mouse = new Mouse();
  emitter = new Emitter();
  loop();
};