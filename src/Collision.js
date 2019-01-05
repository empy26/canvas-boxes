import Game from "./Game";

export default class Collision {

    /**
     * @param {Game} game 
     */
    constructor(game) {
        this.game = game;
    }

    process() {
        if (this.checkShipCollision()) {
            return this.game.stop();
        }
        this.checkBulletsCollision();
    }

    checkShipCollision() {
        let shipBorders = this.game.ship.borders;
        for (let i = 0; i < this.game.obstacles.length; i++) {
            let obstacleBorders = this.game.obstacles[i].borders;
            for (let s = 0; s < shipBorders.length; s++) {
                for (let o = 0; o < obstacleBorders.length; o++) {
                    if (this._checkCollision(shipBorders[s], obstacleBorders[o])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    checkBulletsCollision() {
        let bullets = this.game.bullets
        let obstacles = this.game.obstacles;
        bulletLoop:
        for (let i = 0; i < bullets.length; i++) {
            // remove bullets outside canvas
            if (bullets[i].x - bullets[i].size >= this.game.ctx.canvas.width) {
                this.game.bullets.splice(i, 1);
                continue;
            }
            // loop through obstacles
            for (let k = 0; k < obstacles.length; k++) {
                let obstacleBorders = obstacles[k].borders;
                // loop through obstacle borders
                for (let o = 0; o < obstacleBorders.length; o++) {
                    let bulletPos = [bullets[i].x, bullets[i].y];
                    let bulletRadius = bullets[i].size;
                    if (this._checkCircleCollision(bulletPos, bulletRadius, obstacleBorders[o])) {
                        let healthDiff = obstacles[k].health - bullets[i].health;
                        switch (true) {
                            case healthDiff < 0: 
                                obstacles[k].reset(); 
                                bullets[i].health = Math.abs(healthDiff);
                                break;
                            case healthDiff > 0: 
                                obstacles[k].health = healthDiff;
                                this.game.bullets.splice(i, 1);
                                break;
                            default:
                                obstacles[k].reset(); 
                                this.game.bullets.splice(i, 1);
                        }
                        continue bulletLoop;
                    }
                }
            }

        }
    }

    _checkCollision(firstSegment, secondSegment) {
        let	x,y = 1;
        let [x1,y1] = firstSegment[0];
        let [x2,y2] = firstSegment[1];
        let [x3,y3] = secondSegment[0];
        let [x4,y4] = secondSegment[1];
        let Ax = x2-x1;
        let Ay = y2-y1;
        let Bx = x4-x3;
        let By = y4-y3;			
        
        /*
        (x-x1) / Ax = (y-y1) / Ay  ->  Ay*x - Ay*x1 = Ax*y - Ax*y1  ->  Ay*x - Ax*y = Ay*x1-Ax*y1
        (x-x3) / Bx = (y-y3) / By  ->  By*x - By*x3 = Bx*y - Bx*y3  ->  By*x - Bx*y = By*x3 - Bx*y3
        */
        
        let coef = [[Ay,-Ax], [By, -Bx]];
        let res = [Ay*x1-Ax*y1, By*x3-Bx*y3];
        let [crossX, crossY] = this._gauss(coef, res);
        if (isNaN(crossX) || isNaN(crossY)) {
            return false;
        }
            
        let res1 = (crossX-x1)*Ay-(crossY-y1)*Ax == 0;
        let res2 = (crossX-x3)*By-(crossY-y3)*Bx == 0;
        
        let res3 = (crossX >= x1 && crossX <= x2) || (crossX >= x2 && crossX <= x1);
        let res4 = (crossX >= x3 && crossX <= x4) || (crossX >= x4 && crossX <= x3);
        let res5 = (crossY >= y1 && crossY <= y2) || (crossY >= y2 && crossY <= y1);
        let res6 = (crossY >= y3 && crossY <= y4) || (crossY >= y4 && crossY <= y3);  

        return res1 && res2 && res3 && res4 && res5 && res6;
    }

    _checkCircleCollision(center, r, segment) {
        let [xc, yc] = center;
        let [x1,y1] = segment[0];
        let [x2,y2] = segment[1];
        let a = x2 - x1;
        let b = y2 - y1;

        // sqr(x - xc) + sqr(y - yc) = sqr(r)

        // (x - x1)/a = (y - y1)/b  -->  bx - bx1 = ay - ay1  -->  bx - ay = bx1 - ay1
        // (x - xc)/b = (y - yc)/(-a) -->  -ax + axc = by - byc  -->   ax + by = axc + byc

        let coef = [[b,-a], [a, b]];
        let res = [b*x1-a*y1, a*xc+b*yc];
        let [crossX, crossY] = this._gauss(coef, res);
        if (isNaN(crossX) || isNaN(crossY)) {
            return false;
        }
        // let circleHasPoint = Math.pow(crossX - xc, 2) + Math.pow(crossY - yc, 2) == Math.pow(r, 2);
        let circleHasPointX = (crossX >= xc - r && crossX <= xc + r);
        let circleHasPointY = (crossY >= yc - r && crossY <= yc + r);
        let segmentHasPointX = (crossX >= x1 && crossX <= x2) || (crossX >= x2 && crossX <= x1);
        let segmentHasPointY = (crossY >= y1 && crossY <= y2) || (crossY >= y2 && crossY <= y1);
        return circleHasPointX && circleHasPointY && segmentHasPointX && segmentHasPointY;
    }

    /**
     * _gaussian elimination
     * @param  array A matrix
     * @param  array x vector
     * @return array x solution vector
     */
    _gauss(A, x) {

        var i, k, j;

        // Just make a single matrix
        for (i=0; i < A.length; i++) { 
            A[i].push(x[i]);
        }
        var n = A.length;

        for (i=0; i < n; i++) { 
            // Search for maximum in this column
            var maxEl = Math.abs(A[i][i]),
                maxRow = i;
            for (k=i+1; k < n; k++) { 
                if (Math.abs(A[k][i]) > maxEl) {
                    maxEl = Math.abs(A[k][i]);
                    maxRow = k;
                }
            }


            // Swap maximum row with current row (column by column)
            for (k=i; k < n+1; k++) { 
                var tmp = A[maxRow][k];
                A[maxRow][k] = A[i][k];
                A[i][k] = tmp;
            }

            // Make all rows below this one 0 in current column
            for (k=i+1; k < n; k++) { 
                var c = -A[k][i]/A[i][i];
                for (j=i; j < n+1; j++) { 
                    if (i===j) {
                        A[k][j] = 0;
                    } else {
                        A[k][j] += c * A[i][j];
                    }
                }
            }
        }

        // Solve equation Ax=b for an upper triangular matrix A
        x = this._arrayFill(0, n, 0);
        for (i=n-1; i > -1; i--) { 
            x[i] = A[i][n]/A[i][i];
            for (k=i-1; k > -1; k--) { 
                A[k][n] -= A[k][i] * x[i];
            }
        }

        return x;
    }

    _arrayFill(i, n, v) {
        var a = [];
        for (; i < n; i++) {
            a.push(v);
        }
        return a;
    }
    
}