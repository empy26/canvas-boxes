import BaseKit from "./BaseKit";
import Game from "../Game";

export default class HealthKit extends BaseKit {

    /**
     * @param {Game} game 
     */
    apply(game) {
        game.ship.health += this.value;
        if (game.ship.health > 100) {
            game.ship.health = 100;
        }
    }

    reset() {
        super.reset();
        this.value = 35;
    }

    get sprite() {
        return Game.assets + `kit-health.jpg`;
    }
}