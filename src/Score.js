import Object from './Object';

export default class Score extends Object {

    constructor(ctx, config) {
        super(ctx, config);
        this.value = config.value || 0;
        this.timeout = config.timeout;
        this.position = config.position;
        this.start();
    }

    draw() {
        this.ctx.font = `${this.size}px sans-serif`;
        this.ctx.fillStyle = this.config.color;
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'white';
        this.ctx.textAlign = 'left';
	    this.ctx.strokeText(this.value, this.x, this.y);
	    this.ctx.fillText(this.value, this.x, this.y);
    }

    start() {
        this.interval = setInterval(() => {
            this.value += 1;
        }, this.timeout);
    }

    stop() {
        clearInterval(this.interval);
    }
}