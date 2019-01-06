import Game from "./Game";
import ObstacleCollision from "./collision/ObstacleCollision";
import BulletCollision from "./collision/BulletCollision";
import BorderCollision from "./collision/BorderCollision";
import KitCollision from "./collision/KitCollision";

export default class Collision {

    /**
     * @param {Game} game 
     */
    constructor(game) {
        this.game = game;
        this.obstacleCollision = new ObstacleCollision(game);
        this.bulletCollision = new BulletCollision(game);
        this.borderCollision = new BorderCollision(game);
        this.kitCollision = new KitCollision(game);
    }

    process() {
        for (let i = 0; i < this.collisionObjects.length; i++) {
            if (!this.collisionObjects[i].enabled) continue;
            this.collisionObjects[i].process();
        }
    }
    
    get collisionObjects() {
        return [
            this.obstacleCollision,
            this.bulletCollision,
            this.borderCollision,
            this.kitCollision,
        ];
    }
}