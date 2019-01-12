import Object from "./Object";
import Game from "./Game";

export default class Bullet extends Object {

    constructor(ctx, config) {
        super(ctx, config);
        this.speed = config.speed;
        this.position = config.position;
        this.health = config.health;
    }

    draw() {
        this._calculatePosition();

        let image = new Image(this.size, this.size);
        image.src = this.sprite;

        this.ctx.drawImage(image, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
    }

    _calculatePosition() {
        this.x += this.speed;
    }

    get sprite() {
        return Game.assets + `bullet.png`;
    }

}