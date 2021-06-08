let posX = 0;
let posY = 0;
let speedX = 0;
let speedY = 0;
let firstGame = true;
let gameOver = true;
let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.958);
  posX = width / 2;
  posy = height / 2;
  score = 0;
  rectMode(CENTER);
}

function draw() {
  background(125);
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
    rect(mouseX, height*0.9, 60, 10);
    ellipse(posX, posY, 10, 10);
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
    if(posX > mouseX - 30 && posX < mouseX + 30 && posY > 0.9 * height - 5 && posY < 0.9 * height + 5){
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
    speedX = random(5);
    speedY = random(5);
    score = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.958);
}