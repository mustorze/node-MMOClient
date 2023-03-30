class Player {
    constructor(id, x, y, color) {
        this.id = id;

        /** data */
        this.x = x;
        this.y = y;
        this.color = color
        this.score = 0;
    }
}

module.exports = Player;
