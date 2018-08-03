class Drawing {
  draw() {
    Self.canvas.clearRect(0, 0, 500, 500);

    /** Player */
    for (const i in Players) {
      const player = Players[i];
      Self.canvas.beginPath();
      Self.canvas.arc(player.x, player.y, 10, 0, Math.PI * 2, true);
      Self.canvas.closePath();
      Self.canvas.fill();
    }

    /** Bullet */
    for (const i in Bullets) {
      const bullet = Bullets[i];
      Self.canvas.beginPath();
      Self.canvas.arc(bullet.x, bullet.y, 2, 0, Math.PI * 2, true);
      Self.canvas.closePath();
      Self.canvas.fill();
    }

    Self.canvas.stroke();
  }
}

export {Drawing as default};
