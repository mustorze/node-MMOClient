import io from 'socket.io-client';
import * as classes from '../classes';
import Game from './Game';

class Connection {
  constructor() {
    const socket = io(':5000');
    Self.socket = socket;

    this.game = new Game();
    this.receiving();
  }

  receiving() {
    Self.socket.on('connect', function () {
      console.log('connected!');

      Self.socket.on('bigPack', function (data) {
        // Player
        if (data.init.players.length > 0) {
          for (const i in data.init.players) {
            const player = data.init.players[i];
            const p = new classes.Player(player.id, player.x, player.y, player.color);
            Players.push(p);
            const P = Players.find(item => item.id === Self.id);
            Self.Player = P;
          }
        }

        if (data.update.players.length > 0) {
          for (const i in data.update.players) {
            const player = data.update.players[i];
            const p = Players.find(item => item.id === player.id);
            p.x = player.x;
            p.y = player.y;
            const P = Players.find(item => item.id === Self.id);
            Self.Player = P;
          }
        }

        if (data.remove.players.length > 0) {
          for (const i in data.remove.players) {
            const player = data.remove.players[i];
            var P = Players.find(item => item.id === player.id);
            Players.splice(Players.indexOf(P), 1);
          }
        }

        // Bullet
        if (data.init.bullets.length > 0) {
          for (const i in data.init.bullets) {
            const bullet = data.init.bullets[i];
            const p = new classes.Bullet(bullet.id, bullet.x, bullet.y, bullet.angle, bullet.color);
            Bullets.push(p);
          }
        }

        if (data.remove.bullets.length > 0) {
          for (const i in data.remove.bullets) {
            const bullet = data.remove.bullets[i];
            const B = Bullets.find(item => item.id === bullet.id);
            Bullets.splice(Bullets.indexOf(B), 1);
          }
        }
      });

      Self.socket.on('primaryPack', function (data) {
        Self.id = data.self.id;

        for (const i in data.players) {
          const player = data.players[i];
          Players.push(new classes.Player(player.id, player.x, player.y, player.color));
        }

        for (const i in data.bullets) {
          const bullet = data.bullets[i];
          Bullets.push(new classes.Bullet(bullet.id, bullet.x, bullet.y, bullet.angle, bullet.color));
        }
      });

      Self.socket.on('selfUpdate', function (data) {
        Self.hp = data.hp ? data.hp : Self.hp;
        Self.score = data.score ? data.score : Self.score;
      });
    });
  }
}

export {Connection as default};
