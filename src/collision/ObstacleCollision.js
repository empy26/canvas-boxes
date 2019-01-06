import BaseCollision from "./BaseCollision";
import Obstacle from "../Obstacle";
import Ship from "../Ship";

export default class ObstacleCollision extends BaseCollision {

    get obstacles() {
        return this.game.obstacles;
    }

    process() {
        let shipBorders = this.game.ship.borders;
        let obstacles = this.obstacles;
        for (let i = 0; i < obstacles.length; i++) {
            let obstacleBorders = obstacles[i].borders;
            for (let s = 0; s < shipBorders.length; s++) {
                for (let o = 0; o < obstacleBorders.length; o++) {
                    if (this._checkCollision(shipBorders[s], obstacleBorders[o])) {
                        this.handleShipCollision(this.game.ship, obstacles[i]);
                        return;
                    }
                }
            }
        }
    }
    /**
     * @param {Ship} obstacle 
     * @param {Obstacle} obstacle 
     */
    handleShipCollision(ship, obstacle) {
        let healthDiff = ship.health - obstacle.health;
        switch (true) {
            case healthDiff <= 0: 
                this.game.stop();
                break;
            default:
                ship.health = healthDiff;
                obstacle.reset();
        }
    }
}