import ObstacleCollision from "./ObstacleCollision";
import Ship from "../Ship";
import BulletKit from "../kit/BulletKit";

export default class KitCollision extends ObstacleCollision {

    get obstacles() {
        return this.game.kits;
    }

    /**
     * @param {Ship} ship 
     * @param {BulletKit} kit 
     */
    handleShipCollision(ship, kit) {
        kit.apply(this.game);
        super.handleShipCollision(ship, kit);
    }
}