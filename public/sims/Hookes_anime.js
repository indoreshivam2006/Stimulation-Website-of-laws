//  F = -k * x Hooke's Law
// https://en.wikipedia.org/wiki/Hooke%27s_law

let bobby;
let anchor;
let restLength;
let isClicking = false;
let force;
let velocity;
let gravity;
let mass;


// can play with it
let springConstant = 0.01;
// 


function setup() {
  createCanvas(600, 600);
  bobby = createVector(width / 2, height / 2);
  restLength = height / 2;
  anchor = createVector(300, 0);
  velocity = createVector(0, 0);

  // Please Play with it
  mass = 1//(kg)
  // 
  // can play with it
  gravity = createVector(0, 0.01);
  // 
}

function draw() {
  background(0);

  strokeWeight(8);
  stroke(255);
  line(anchor.x, anchor.y, bobby.x, bobby.y);
  strokeWeight(0)
  fill('blue')
  circle(anchor.x, anchor.y, 20)
  stroke("red");
  strokeWeight(4);
  fill(200);
  circle(bobby.x, bobby.y, 40);
  
  
  strokeWeight(2);
  fill("rgba(151,255,255,0.1)");
  stroke("rgba(151,255,255,0.1)");
  circle(anchor.x, restLength, 40);
  line(anchor.x, anchor.y, anchor.x, restLength - 20);

  calculateForce();
  controlbobby();
}

function mouseClicked() {

  if (mouseX / width > 0 && mouseX / width < 1 && mouseY / height > 0 && mouseY / height < 1) {
    isClicking = !isClicking;
  }


}

function followbobby() {
  bobby.x = mouseX;
  bobby.y = mouseY;
}

function controlbobby() {
  isClicking ? followbobby() : addForceTobobby();
}

function calculateForce() {
  // F = -k * x

  force = p5.Vector.sub(bobby, anchor);
  let x = force.mag() - restLength;
  force.normalize();
  force.mult(-1 * springConstant * x);
  force.mult(1 / mass)
}

function addForceTobobby() {

  velocity.add(force);
  velocity.add(gravity);
  velocity.mult(0.99);
  bobby.add(velocity);
}


function inputChanged(e) {
  let value = e.target.value
  let id = e.target.id

  if (id == 'gravity') {
    gravity.y = parseFloat(value)
  }
  else if (id == 'mass') {
    mass = parseFloat(value)
  }
  else {
    springConstant = parseFloat(value)
  }

}

// Code by alex
