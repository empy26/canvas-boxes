export default class Object {

    /**
     * @param {CanvasRenderingContext2D} ctx 
     * @param {*} config 
     */
    constructor(ctx, config) {
        this.ctx = ctx;
        this.position = [0, 0];
        this.size = config.size;
        this.config = config;
    }

    get x() {
        return this.position[0];
    }

    get y() {
        return this.position[1];
    }

    set x(value) {
        this.position[0] = value;
    }

    set y(value) {
        this.position[1] = value;
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }


}