let posX = 0;
let posY = 0;
let baseX = 0;
let topX = 0
let speedX = 0;
let speedY = 0;
let firstGame = true;
let gameOver = true;
let score1 = 0;
let score2 = 0;
let atemnea;
let base;
let bg;

function preload(){
  atemnea = loadImage("../img/isotipo_rgb_png_atemnea_fondoblanco.png")
  base = loadImage("../img/base.png");
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
      if(score1 >= 10) {
        text("FIN DEL JUEGO", width / 2, height / 2 + 20);
        text("GANÓ EL JUGADOR 1", width / 2, height / 2 + 40);
      }else if(score2 >= 10) {
        text("FIN DEL JUEGO", width / 2, height / 2 + 20);
        text("GANÓ EL JUGADOR 2", width / 2, height / 2 + 40);
      }
    }
  }else{
    image(base, baseX, height*0.9, width*0.1, height*0.05);
    image(base, topX, height*0.1, width*0.1, height*0.05);
    image(atemnea, posX, posY, width*0.07, width*0.07);
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
      speedX = random(5, 10);
      speedY = random(5, 10);
      score2 += 1;
    }else if(posY < height * 0.1){
      posX = width/2;
      posY = height/2;
      speedX = -random(5, 10);
      speedY = -random(5, 10);
      score1 += 1;
    }
    if(posX > baseX - width*0.1 && posX < baseX + width*0.1 && posY > 0.9 * height - 5 && posY < 0.9 * height + 5){
      speedX = speedX;
      speedY = -1 * speedY;
    }else if(posX > topX - width*0.1 && posX < topX + width*0.1 && posY > 0.1 * height - 5 && posY < 0.1 * height + 5){
      speedX = speedX;
      speedY = -1 * speedY;
    }else{
      text(score1, 320, 30);
      text(score2, width - 320, 30);
    }
    if(score1 >= 10){
      gameOver = true;
    }else if(score2 >= 10){
      gameOver = true;
    }
    posX+=speedX;
    posY+=speedY;
  }
}

function keyPressed(){
  if(keyCode == LEFT_ARROW && (baseX - windowWidth*0.05) > 0 && gameOver == false){
    baseX -= windowWidth*0.1;
  }else if(keyCode == RIGHT_ARROW && (baseX - windowWidth*0.1) < (windowWidth - width*0.15) && gameOver == false){
    baseX += windowWidth*0.1;
  }else if(keyCode == UP_ARROW && (topX - windowWidth*0.05) > 0 && gameOver == false){
    topX -= windowWidth*0.1;
  }else if(keyCode == DOWN_ARROW && (topX - windowWidth*0.1) < (windowWidth - width*0.15) && gameOver == false){
    topX += windowWidth*0.1;
  }else{
    if(gameOver == true){
      gameOver = false;
      firstGame = false;
      speedX = random(5, 10);
      speedY = random(5, 10);
      score1 = 0;
      score2 = 0;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.958);
}