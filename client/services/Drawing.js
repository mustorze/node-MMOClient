class Drawing {
  draw() {


    Self.canvas.clearRect(0, 0, 1000, 500);

    Self.canvas.beginPath();
    Self.canvas.moveTo(500, 0);
    Self.canvas.lineTo(500, 500);
    Self.canvas.stroke();
    Self.canvas.closePath();

    /** Player */
    for (const i in Players) {
      const player = Players[i];
      Self.canvas.fillStyle = '#' + player.color;
      Self.canvas.beginPath();
      Self.canvas.arc(player.x, player.y, 10, 0, Math.PI * 2, true);
      Self.canvas.closePath();
      Self.canvas.fill();
    }

    /** Bullet */
    for (const i in Bullets) {
      const bullet = Bullets[i];
      Self.canvas.fillStyle = '#' + bullet.color;
      Self.canvas.beginPath();
      Self.canvas.arc(bullet.x, bullet.y, 2, 0, Math.PI * 2, true);
      Self.canvas.closePath();
      Self.canvas.fill();
    }

    Self.canvas.font = "30px Arial";
    Self.canvas.strokeText("HP: " + Self.hp, 510, 50);
    Self.canvas.strokeText("SCORE: " + Self.score, 510, 150);
    Self.canvas.strokeText("Ranking", 710, 30);

    let x = 1;

    let p = Players.sort((p1, p2) => {
      if (p1.score < p2.score) {
        return 1;
      }
      if (p1.score > p2.score) {
        return -1;
      }
      return 0;
    });

    for (const i in p) {
      const player = p[i];

      let y = 30 + (30 * x);
      Self.canvas.fillStyle = '#' + player.color;
      Self.canvas.beginPath();
      Self.canvas.arc(750, y, 10, 0, Math.PI * 2, true);
      Self.canvas.closePath();
      Self.canvas.fill();

      Self.canvas.font = "10px Arial";
      Self.canvas.strokeText(player.score, 765, y + 3);
      x++;
    }
    x = 0;
  }
}

export {Drawing as default};
