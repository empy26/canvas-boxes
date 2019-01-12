import Game from "../Game";
import BaseKit from "./BaseKit";

export default class BulletKit extends BaseKit {

    /**
     * @param {Game} game 
     */
    apply(game) {
        game.bulletsCount += this.value;
    }

    reset() {
        super.reset();
        this.value = this._getRandomValue(5, 20);
    }

    get sprite() {
        let i = Math.ceil(this.value / 6);
        if (i > 3) {
            i = 3;
        }
        if (isNaN(i)) {
            i = 1;
        }
        return Game.assets + `kit-ammo-${i}.jpg`;
    }

}