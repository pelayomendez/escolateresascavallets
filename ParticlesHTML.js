let img = [];
let particles = [];
let scale = 0.75;

function setup() {
  createCanvas(1280, 720);
  for (let i = 0; i < 23; i++) {
    img[i] = loadImage("data/" + i + ".png"); // replace with your images' path and format
    particles[i] = new Particle(random(width * 0.75), random(height * 0.75), img[i]);
  }
}

function draw() {
  background(220);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > (width - this.img.width*scale)) this.speedX *= -1;
    if (this.y < 0 || this.y > (height - this.img.height*scale)) this.speedY *= -1;
  }

  show() {
    image(this.img, this.x, this.y, this.img.width*scale, this.img.height*scale);
  }
}
