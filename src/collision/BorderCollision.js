import BaseCollision from "./BaseCollision";

export default class BorderCollision extends BaseCollision {

    process() {
        let leftBorder = [[0,0], [0, this.game.ctx.canvas.height]];
        for (let i = 0; i < this.game.obstacles.length; i++) {
            let obstacleBorders = this.game.obstacles[i].borders;
            if (this._checkCollision(leftBorder, obstacleBorders[0])) {
                this.game.stop();
            }
        }
    }
}