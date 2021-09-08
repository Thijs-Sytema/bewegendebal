var x, y, vx, vy;

function setup() {
  createCanvas(400,500);

  x = 0;
  y = 200;
  vx = 5;
  vy = 5;
}

function draw() {
  background (220);

  ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;

  if(y <= 0 || y > 500) {
    vy = vy * -1;
  }

  if(x <=0 || x > 400) {
    vx = vx * -1;
  }
}