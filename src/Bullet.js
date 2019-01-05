import Object from "./Object";

export default class Bullet extends Object {

    constructor(ctx, config) {
        super(ctx, config);
        this.speed = config.speed;
        this.position = config.position;
        this.health = config.health;
    }

    draw() {
        this._calculatePosition();

        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    _calculatePosition() {
        this.x += this.speed;
    }
}