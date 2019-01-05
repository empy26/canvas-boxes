import Collision from './Collision';
import Score from './Score';
import Ship from './Ship';
import Obstacle from './Obstacle';
import Bullet from './Bullet';

export default class Game {

    constructor(config) {
        this.config = Object.assign({}, this._defaultConfig(), config);
        this.ctx = this._initCanvas().getContext('2d');
        this.collision = new Collision(this);
        this.lastObstacleStep = 0;
        this.paused = false;
        this.gameOver = false;
        this._initHandlers();
    }

    start() {
        this.ship = this._initShip();
        this.obstacles = this._initObstacles();
        this.score = this._initScore();
        this.bullets = [];
        this.draw();
    }

    stop() {
        this.drawGameOverBox();
        this.gameOver = true;
        // stop game
    }

    pause() {
        this.paused = !this.paused;
        if (this.paused) {
            this.drawPause();
        } else {
            this.score.start();
            this.draw();
        }
    }

    draw() {
        if (this.paused || this.gameOver) {
            return;
        }
        this.clearCanvas();
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].draw();
        }
        // if (this.collision.exists()) {
        //     return this.stop();
        // }
        this.collision.process();
        this.addObstacle();
        requestAnimationFrame(this.draw.bind(this));
    }

    drawPause() {
        this.ctx.font = `36px sans-serif`;
        this.ctx.fillStyle = this.config.SCORE_COLOR;
        this.ctx.strokeStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.lineWidth = 2;
        this.ctx.strokeText('Pause', this.ctx.canvas.width / 2, 50);
        this.ctx.fillText('Pause', this.ctx.canvas.width / 2, 50);
        this.score.stop();
    }

    drawGameOverBox() {
        let text = `Your score: ${this.score.value}`;
        let boxX = this.ctx.canvas.width / 2 - 150;
        let boxY = this.ctx.canvas.height / 2 - 75;
        this.ctx.fillStyle = 'white';
        this.ctx.strokeStyle = this.config.SCORE_COLOR;
        this.ctx.fillRect(boxX, boxY, 300, 150);
        this.ctx.strokeRect(boxX, boxY, 300, 150);
        this.ctx.font = `36px sans-serif`;
        this.ctx.fillStyle = this.config.SCORE_COLOR;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(text, this.ctx.canvas.width / 2, boxY + 75);
        this.ctx.font = `18px sans-serif`;
        this.ctx.fillText('Press space to replay', this.ctx.canvas.width / 2, boxY + 120);
    }

    clearCanvas() {
        this.ctx.fillStyle = this.config.CANVAS_BACKGROUND;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    addObstacle() {
        if (this.score.value % this.config.OBSTACLE_STEP !== 0) {
            return;
        }
        if (this.lastObstacleStep === this.score.value) {
            return;
        }
        this.lastObstacleStep = this.score.value;
        this.obstacles.push(this._initObstacle());
        this.obstacles.push(this._initObstacle());
    }

    addBullet() {
        this.bullets.push(
            new Bullet(this.ctx, {
                position: [this.ship.x + this.ship.size, this.ship.y],
                speed: this.config.BULLET_SPEED,
                size: this.config.BULLET_SIZE,
                health: this.config.BULLET_HEALTH,
            }
        ));
    }

    get objects() {
        return this.obstacles.concat([this.ship, this.score], this.bullets);
    }

    _initShip() {
        return new Ship(this.ctx, {
            speed: this.config.SHIP_SPEED,
            size: this.config.SHIP_SIZE,
            color: this.config.SHIP_COLOR,
            colorBorder: this.config.SHIP_COLOR_BORDER
        });
    }

    _initObstacles() {
        let obstacles = [];
        for (let i = 0; i < this.config.OBSTACLE_INIT_QUANTITY; i++) {
            obstacles.push(this._initObstacle());
        }
        return obstacles;
    }

    _initObstacle() {
        return new Obstacle(this.ctx, {
            speed: this.config.OBSTACLE_SPEED,
            minSize: this.config.OBSTACLE_MIN_SIZE,
            maxSize: this.config.OBSTACLE_MAX_SIZE,
            color: this.config.OBSTACLE_COLOR,
            colorBorder: this.config.OBSTACLE_COLOR_BORDER
        });
    }

    _initScore() {
        return new Score(this.ctx, {
            position: this.config.SCORE_POSITION,
            size: this.config.SCORE_SIZE,
            timeout: this.config.SCORE_TIMEOUT,
            color: this.config.SCORE_COLOR,
        });
    }

    _initCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = this.config.CANVAS_WIDTH;
        canvas.height = this.config.CANVAS_HEIGHT;
        document.body.append(canvas);

        return canvas;
    }

    _initHandlers() {
        document.addEventListener('keydown', e => {
            switch(e.code) {
                case 'ArrowLeft':
                case 'ArrowRight':
                case 'ArrowUp':
                case 'ArrowDown':
                    this.ship.addKey(e.key);
                    break;
                case 'Escape':
                    this.pause();
                    break;
                case 'Space':
                    if (this.gameOver) {
                        this.gameOver = false;
                        this.start();
                        break;
                    }
                    this.addBullet();
                    break;
            }
        });
        document.addEventListener('keyup', e => {
            switch(e.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
                this.ship.removeKey(e.key);
            }
        });
    }

    _defaultConfig() {
        return {
            SHIP_SPEED: 2,
            SHIP_SIZE: 25,
            SHIP_COLOR: 'peachpuff',
            SHIP_COLOR_BORDER: 'tomato',

            OBSTACLE_SPEED: 3,
            OBSTACLE_MIN_SIZE: 10,
            OBSTACLE_MAX_SIZE: 80,
            OBSTACLE_INIT_QUANTITY: 10,
            OBSTACLE_STEP: 150,
            OBSTACLE_COLOR: 'crimson',
            OBSTACLE_COLOR_BORDER: 'darkred',

            BULLET_SPEED: 7,
            BULLET_SIZE: 5,
            BULLET_HEALTH: 20,

            SCORE_TIMEOUT: 100,
            SCORE_POSITION: [50, 70],
            SCORE_SIZE: 24,
            SCORE_COLOR: 'tomato',

            CANVAS_WIDTH: 800,
            CANVAS_HEIGHT: 500,
            CANVAS_BACKGROUND: 'honeydew',
        };
    }
}