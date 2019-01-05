import Game from './src/Game';

document.addEventListener('DOMContentLoaded', function() {
    let game = new Game({
        SHIP_COLOR: 'khaki',
        SHIP_SPEED: 5,
        CANVAS_WIDTH: 900,
        CANVAS_HEIGHT: 500,
        OBSTACLE_INIT_QUANTITY: 10,
    });
    game.start();
    window.game = game;
});