var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
}

function draw() {
background("white");

  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }

  if(keyIsDown(LEFT_ARROW)){
    background("blue")
  }

  if(keyIsDown(DOWN_ARROW)){
    background("orange")
  }

  if(keyIsDown(UP_ARROW)){
    background("yellow")
  }
}

