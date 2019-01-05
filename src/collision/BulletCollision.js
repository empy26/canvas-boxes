import BaseCollision from "./BaseCollision";
import Bullet from "../Bullet";
import Obstacle from "../Obstacle";

export default class BulletCollision extends BaseCollision {

    process() {
        let bullets = this.game.bullets
        let obstacles = this.game.obstacles;
        bulletLoop:
        for (let i = 0; i < bullets.length; i++) {
            // remove bullets outside canvas
            if (bullets[i].x - bullets[i].size >= this.game.ctx.canvas.width) {
                this.game.bullets.splice(i, 1);
                continue;
            }
            // loop through obstacles
            for (let k = 0; k < obstacles.length; k++) {
                let obstacleBorders = obstacles[k].borders;
                // loop through obstacle borders
                for (let o = 0; o < obstacleBorders.length; o++) {
                    let bulletPos = [bullets[i].x, bullets[i].y];
                    let bulletRadius = bullets[i].size;
                    if (this._checkCircleCollision(bulletPos, bulletRadius, obstacleBorders[o])) {
                        this.handleBulletCollision(obstacles[k], bullets[i], i);
                        continue bulletLoop;
                    }
                }
            }
        }
    }
    /**
     * 
     * @param {Obstacle} obstacle 
     * @param {Bullet} bullet 
     * @param {Number} bulletIndex
     */
    handleBulletCollision(obstacle, bullet, bulletIndex) {
        let healthDiff = obstacle.health - bullet.health;
        switch (true) {
            case healthDiff < 0: 
                obstacle.reset(); 
                bullet.health = Math.abs(healthDiff);
                break;
            case healthDiff > 0: 
                obstacle.health = healthDiff;
                this.game.bullets.splice(bulletIndex, 1);
                break;
            default:
                obstacle.reset(); 
                this.game.bullets.splice(bulletIndex, 1);
        }
    }
}