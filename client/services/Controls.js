class Controls {
  keyDown(e) {
    if (e.key == 'w' && !Self.up) {
      Self.socket.emit('keyPress', {
        inputId: 'up',
        state: true
      });
      Self.up = true;
    }

    if (e.key == 'a' && !Self.left) {
      Self.socket.emit('keyPress', {
        inputId: 'left',
        state: true
      });
      Self.left = true;
    }

    if (e.key == 's' && !Self.down) {
      Self.socket.emit('keyPress', {
        inputId: 'down',
        state: true
      });
      Self.down = true;
    }

    if (e.key == 'd' && !Self.right) {
      Self.socket.emit('keyPress', {
        inputId: 'right',
        state: true
      });
      Self.right = true;
    }
  }

  keyUp(e) {
    if (e.key == 'w' && Self.up) {
      Self.socket.emit('keyPress', {
        inputId: 'up',
        state: false
      });
      Self.up = false;
    }

    if (e.key == 'a' && Self.left) {
      Self.socket.emit('keyPress', {
        inputId: 'left',
        state: false
      });
      Self.left = false;
    }

    if (e.key == 's' && Self.down) {
      Self.socket.emit('keyPress', {
        inputId: 'down',
        state: false
      });
      Self.down = false;
    }

    if (e.key == 'd' && Self.right) {
      Self.socket.emit('keyPress', {
        inputId: 'right',
        state: false
      });
      Self.right = false;
    }
  }

  mouseMove(e) {
    if (Self.Player) {
      const X = -Self.Player.x + e.offsetX;
      const Y = -Self.Player.y + e.offsetY;
      var angle = Math.atan2(Y, X) / Math.PI * 180;

      Self.socket.emit('keyPress', {
        inputId: 'mouseAngle',
        state: angle
      });
    }
  }

  mouseDown(e) {
    if (!Self.attack) {
      Self.socket.emit('keyPress', {
        inputId: 'attack',
        state: true
      });
      Self.attack = true;
    }
  }

  mouseUp(e) {
    if (Self.attack) {
      Self.socket.emit('keyPress', {
        inputId: 'attack',
        state: false
      });
      Self.attack = false;
    }
  }
}

export {Controls as default};
