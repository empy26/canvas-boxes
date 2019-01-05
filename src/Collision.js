import Game from "./Game";
import ShipCollision from "./collision/ShipCollision";
import BulletCollision from "./collision/BulletCollision";

export default class Collision {

    /**
     * @param {Game} game 
     */
    constructor(game) {
        this.game = game;
        this.shipCollision = new ShipCollision(game);
        this.bulletCollision = new BulletCollision(game);
    }

    process() {
        for (let i = 0; i < this.collisionObjects.length; i++) {
            this.collisionObjects[i].process();
        }
    }
    
    get collisionObjects() {
        return [
            this.shipCollision,
            this.bulletCollision,
        ];
    }
}