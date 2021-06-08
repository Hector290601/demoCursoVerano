let posX = 0;
let posY = 0;
let speedX = 0;
let speedY = 0;
let firstGame = true;
let gameOver = true;
let score = 0;
let atemnea;
let makarenko;

function preload(){
  atemnea = loadImage("../img/isotipo_rgb_png_atemnea_fondoblanco.png")
  makarenko = loadImage("../img/makarenko.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight * 0.958);
  posX = width / 2;
  posy = height / 2;
  score = 0;
  imageMode(CENTER);
}

function draw() {
  background(255);
  if(gameOver == true){
    textAlign(CENTER);
    textSize(14);
    text("PRESIONA CUALQUIER TECLA", width/2, height/2 - 20);
    if(firstGame == false) {
      textSize(20);
      text("GAME OVER", width / 2, height / 2 + 20);
    }
  }else{
    fill(255);
    image(makarenko, mouseX, height*0.9, width*0.1, height*0.05);
    image(atemnea, posX, posY, width*0.07, width*0.07);
    if(posY < 0){
      speedY = - speedY;
      posY = 0;
    }
    if(posX > width){
      speedX = - speedX;
      posX = width;
    }
    if(posX < 0){
      speedX = - speedX;
      posX = 0;
    }
    if(posY > height){
      posX = width/2;
      posY = height/2;
      gameOver = true;
      speedX = speedX;
      speedY = speedY;
    }
    if(posX > mouseX - width*0.1 && posX < mouseX + width*0.1 && posY > 0.9 * height - 5 && posY < 0.9 * height + 5){
      speedX = speedX;
      speedY = -1 * speedY;
      score += 1;
    }else{
      text(score, 320, 30);
    }
    posX+=speedX;
    posY+=speedY;
  }
}

function keyPressed(){
  if(gameOver == true){
    gameOver = false;
    firstGame = false;
    speedX = random(5, 10);
    speedY = random(5, 10);
    score = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.958);
}