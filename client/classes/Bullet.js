class Bullet {
  constructor(id, x, y, angle) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.angle = angle;

    this.spdX = Math.cos(this.angle / 180 * Math.PI) * 10;
    this.spdY = Math.sin(this.angle / 180 * Math.PI) * 10;
  }

  move() {
    this.x += this.spdX;
    this.y += this.spdY;
  }
}

module.exports = Bullet;
