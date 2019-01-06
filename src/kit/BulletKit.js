import Game from "../Game";
import BaseKit from "./BaseKit";

export default class BulletKit extends BaseKit {

    /**
     * @param {Game} game 
     */
    apply(game) {
        game.bulletsCount += this.value;
    }

}