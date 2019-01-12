import Object from './Object';
import Game from './Game';

export default class Ship extends Object {
    
    constructor(ctx, config) {
        super(ctx, config);
        this.speed = config.speed;
        this.position = this._initPosition();
        this.health = config.health;
        this.keyPressed = [];
        this.frame = 0;
        this.ticks = 0;
        this.ticksPerFrame = 2;
    }

    draw() {
        this._calculatePosition();
        
        // ship
        let image = new Image(this.size * 2, this.size * 2);
        image.src = this.sprite;

        if (this.keyPressed.indexOf('ArrowRight') !== -1) {
            this.frame = 3;
        }

        let sW = 70 + 10, sH = 74,
            sx = (70 + 28) * this.frame, sy = 0,
            dW = this.size * 2 + 10, dH = this.size * 2,
            dx = this.x - this.size,
            dy = this.y - this.size;
        
        this.ctx.drawImage(image, sx, sy, sW, sH, dx, dy, dW, dH);
        // sprite animation
        this.ticks++;
        if (this.ticks > this.ticksPerFrame) {
            this.ticks = 0;
            this.frame++;
        }
        if (this.frame > 2) {
            this.frame = 0;
        }

        // healthbar
        let height = this.health * 2;
        let yPos = 200 + 10 - height;
        this.ctx.fillStyle = 'red';
        this.ctx.strokeStyle = 'white';
        this.ctx.strokeRect(10, yPos, 10, height);
        this.ctx.fillRect(10, yPos, 10, height);


    }

    addKey(key) {
        let index = this.keyPressed.indexOf(key);
        if (index === -1) {
            this.keyPressed.push(key);
        }
    }

    removeKey(key) {
        let index = this.keyPressed.indexOf(key);
        if (index !== -1) {
            this.keyPressed.splice(index, 1);
        }
    }

    get borders() {
        return [
            [
                [this.x - this.size, this.y - this.size],
                [this.x + this.size, this.y] 
            ],
            [
                [this.x + this.size, this.y],
                [this.x - this.size, this.y + this.size]
            ],
            [
                [this.x - this.size, this.y + this.size],
                [this.x - this.size, this.y - this.size]
            ]
        ];
    }

    get sprite() {
        return Game.assets + 'ship.png'
    }

    _calculatePosition() {
        for (let i = 0; i < this.keyPressed.length; i++) {
            switch(this.keyPressed[i]) {
            case 'ArrowLeft':
                this.x -= this.speed;
                break;
            case 'ArrowRight':
                this.x += this.speed;
                break;
            case 'ArrowUp':
                this.y -= this.speed;
                break;
            case 'ArrowDown':
                this.y += this.speed;
                break;
          }
        }
        // restrict position by canvas borders
        this.x = this.x < 0 ? 0 : this.x;
        this.x = this.x > this.ctx.canvas.width ? this.ctx.canvas.width : this.x;
        this.y = this.y < 0 ? 0 : this.y;
        this.y = this.y > this.ctx.canvas.height ? this.ctx.canvas.height : this.y;
    }

    _initPosition() {
        return [100, this.ctx.canvas.height / 2];
    }
}