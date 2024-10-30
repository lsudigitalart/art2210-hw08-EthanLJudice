let generateCreature = false;
let creatureW = 0;
let creatureH = 0;
let creatureM = 50;
let creatureLL1 = 50;
let creatureLL2 = 50;
let creatureRL1 = 50;
let creatureRL2 = 50;
let creatureEW = 50;
let creatureEH = 50;
let imgBackdrop;

function preload() {
  imgBackdrop = loadImage("backdrop.webp");
}


function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  image(imgBackdrop, 0, 0, 400, 400);
  translate(width/2, height/2);

  if(generateCreature){
    creatureBuilder(creatureW, creatureH, creatureM);
  }

}

function creatureBuilder(creatureWidth, creatureHeight, creatureMouth) {
  
  // BODY
  fill(255)
  ellipse(0, 0, creatureWidth, creatureHeight);

  // EYES
  fill(0)
  circle(-creatureWidth/8, -creatureHeight/4, 20)
  circle(creatureWidth/8, -creatureHeight/4, 20)
  fill(225)
  circle(-creatureWidth/8, -creatureHeight/4, 4)
  circle(creatureWidth/8, -creatureHeight/4, 4)

  // MOUTH
  fill(0)
  circle(0, creatureHeight/4, creatureMouth);

  // EARS
  ellipse(15-creatureW/2, -50, creatureEW, creatureEH);
  ellipse(-15+creatureW/2, -50, creatureEW, creatureEH);

}

function mousePressed() {
  generateCreature = true;
  creatureM = random(0, 50);
  creatureW = random(100, 250);
  creatureH = random(25, 150);
  creatureEW = random(10, 50);
  creatureEH = random(50, 150);
}