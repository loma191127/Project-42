var hr,min,s;
function setup() {
  createCanvas(displayWidth+72,displayHeight);
}

function draw() {
  background(0);
  fill("red");
  textSize(128);
  textFont("Chiller");
  text("The Death Clock",400,90);
  hr = hour();
  min = minute();
  s = second();
  fill("orange");
  textSize(64);
  textFont("Chiller");
  text(hr,300,400);
  textSize(32);
  text("HOURS",300,450);
  nofill();
  stroke("orange");
  arc(300, 400, 50, 50, 3*(PI/2),hr*(PI/180));
  fill("purple");
  textSize(64);
  text(min,650,400);
  textSize(32);
  text("MINUTES",650,450);
  nofill();
  stroke("purple");
  arc(650, 400, 50, 50, 3*(PI/2),min*(PI/180));
  fill(rgb(0,255,0));
  textSize(64); 
  text(s,950,400);
  textSize(32);
  text("SECONDS",950,450);
  nofill();
  stroke(rgb(0,255,0));
  arc(950, 400, 50, 50, 3*(PI/2),s*(PI/180));
  drawSprites();
}