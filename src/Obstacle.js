import Object from './Object';

export default class Obstacle extends Object {
    
    constructor(ctx, config) {
        super(ctx, config);
        this.reset();
        this.speed = config.speed;
    }

    draw() {
        this._calculatePosition();

        let x = this.x - this.size / 2;
        let y = this.y - this.size / 2;
        this.ctx.fillStyle = this.config.color;
        this.ctx.strokeStyle = this.config.colorBorder;
        this.ctx.fillRect(x, y, this.size, this.size);
        this.ctx.strokeRect(x, y, this.size, this.size);
    }

    reset() {
        this.size = this._getRandomValue(this.config.minSize, this.config.maxSize);
        this.position = this._initPosition();
        this.health = this.size;
    }

    get borders() {
        let x = this.x - this.size / 2;
        let y = this.y - this.size / 2;
        return [
            [
                [x, y],
                [x + this.size, y] 
            ],
            [
                [x + this.size, y],
                [x + this.size, y + this.size]
            ],
            [
                [x + this.size, y + this.size],
                [x, y + this.size]
            ],
            [
                [x, y + this.size],
                [x, y]
            ]
        ];
    }

    _calculatePosition() {
        this.x -= this.speed;
        if (this.x + this.size <= 0) {
            this.reset();
        }
    }

    _getRandomValue(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    _initPosition() {
        let minX = this.ctx.canvas.width + this.size;
        let maxX = this.ctx.canvas.width * 3;
        let x = this._getRandomValue(minX, maxX);
        let y = this._getRandomValue(0, this.ctx.canvas.height);
        return [x, y];
    }

}