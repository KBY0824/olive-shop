let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let state = 0;

function preload() {
  img1 = loadImage('01.png');
  img2 = loadImage('02.png');
  img3 = loadImage('03.png');
  img4 = loadImage('04.png');
  img5 = loadImage('05.png');
  img6 = loadImage('06.png');
}

function setup() {
 createCanvas(393,852);
}

function mouseClicked(){
  if(mouseX >= 320 && mouseX <= 380){
    if(mouseY >=688 && mouseY <= 748){
      console.log('a');
      if(state == 0){
        state = 1;
      }else if(state == 1){
        state=0;
      }
    }
  }
}

function draw() {
  background(255);
  if(state == 0){
    image(img1,0,0,393,128);
    image(img2,0,128,393,284);
    image(img3,0,412,393,440);
    image(img4,0,764,393,90);
    image(img5,320,688,60,60);
 }else if(state == 1){
    image(img1,0,0,393,128);
    image(img2,0,128,393,284);
    image(img3,0,412,393,440);
    image(img4,0,764,393,90);
    image(img5,320,688,60,60);
    image(img6,0,612,393,152);
  } 
}

