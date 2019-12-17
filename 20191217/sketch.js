function setup() {
  createCanvas(500, 200);
  background('#ccffcc');
}

class Human {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  moveRight(spd) {
    this.x += spd;
  }
}

var a_san = new Human(55, 100);
var b_san = new Human(5, 100);
var x = 0;

function draw() {
  // 道
  line(0, 100, 500, 100);
  // 駅
  ellipse(155, 100, 50, 50);
  // Aさん
  ellipse(a_san.x, a_san.y, 10, 10);
  // Bさん
  ellipse(b_san.x, b_san.y, 10, 10);
  a_san.moveRight(1);
  b_san.moveRight(1.5);
}
