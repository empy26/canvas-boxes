import Obstacle from "../Obstacle";
import Game from "../Game";

export default class BaseKit extends Obstacle {

    /**
     * @param {Game} game 
     */
    apply(game) {
        // ...
    }

    reset() {
        this.position = this._initPosition();
        this.size = 25;
        this.health = 0;
        this.value = 1;
    }

    _initPosition() {
        let minX = this.ctx.canvas.width * 3;
        let maxX = this.ctx.canvas.width * 10;
        let x = this._getRandomValue(minX, maxX);
        let y = this._getRandomValue(0, this.ctx.canvas.height);
        return [x, y];
    }
}