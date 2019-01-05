import Object from './Object';

export default class Ship extends Object {
    
    constructor(ctx, config) {
        super(ctx, config);
        this.speed = config.speed;
        this.position = this._initPosition();
        this.keyPressed = [];
    }

    draw() {
        this._calculatePosition();
        this.ctx.fillStyle = this.config.color;
        this.ctx.strokeStyle = this.config.colorBorder;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x - this.size, this.y - this.size);
        this.ctx.lineTo(this.x + this.size, this.y);
        this.ctx.lineTo(this.x - this.size, this.y + this.size);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fill();
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