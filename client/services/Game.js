import Drawing from './Drawing';

class Game {
  constructor() {
    this.drawing = new Drawing();
    this.loop();
  }

  loop() {
    const $this = this;

    setInterval(function () {
      for (const i in Bullets) {
        const bullet = Bullets[i];
        bullet.move();
      }
    }, 1000 / 25);

    setInterval(function () {
      $this.drawing.draw();
    }, 20);
  }
}

export {Game as default};
