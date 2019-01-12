import Game from "./Game";
import Object from "./Object";

export default class Background extends Object {

    constructor(ctx, config) {
        super(ctx, config);
        this.speed = config.speed;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
    }

    draw() {
        this._calculatePosition();
        // draw two images for infinite animation effect
        let image = new Image();
        image.src = Game.assets + 'bg_.jpg';
        this.ctx.drawImage(image, this.x, this.y);

        image = new Image();
        image.src = Game.assets + 'bg_1.jpg';
        this.ctx.drawImage(image, this.x1, this.y);
    }

    get sprite() {
        return Game.assets + 'bg_.jpg';
    }

    _calculatePosition() {
        let image = new Image();
        image.src = Game.assets + 'bg_.jpg';
        if (typeof this.x1 == 'undefined') {
            this.x1 = this.x + image.width;
        }
        if (this.x1 <= 0) {
            this.x = this.x1 + image.width;
        }
        if (this.x1 + image.width <= 0) {
            this.x1 = this.x + image.width;
        }
        this.x -= this.speed;
        this.x1-= this.speed;
    }

}