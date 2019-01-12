/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Game */ \"./src/Game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    let game = new _src_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        SHIP_COLOR: 'khaki',\n        SHIP_SPEED: 5,\n        CANVAS_WIDTH: 900,\n        CANVAS_HEIGHT: 500,\n    });\n    game.start();\n    window.game = game;\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/Background.js":
/*!***************************!*\
  !*** ./src/Background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object */ \"./src/Object.js\");\n\n\n\nclass Background extends _Object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    constructor(ctx, config) {\n        super(ctx, config);\n        this.speed = config.speed;\n        this.width = this.ctx.canvas.width;\n        this.height = this.ctx.canvas.height;\n    }\n\n    draw() {\n        this._calculatePosition();\n        // draw two images for infinite animation effect\n        let image = new Image();\n        image.src = _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].assets + 'bg_.jpg';\n        this.ctx.drawImage(image, this.x, this.y);\n\n        image = new Image();\n        image.src = _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].assets + 'bg_1.jpg';\n        this.ctx.drawImage(image, this.x1, this.y);\n    }\n\n    get sprite() {\n        return _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].assets + 'bg_.jpg';\n    }\n\n    _calculatePosition() {\n        let image = new Image();\n        image.src = _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].assets + 'bg_.jpg';\n        if (typeof this.x1 == 'undefined') {\n            this.x1 = this.x + image.width;\n        }\n        if (this.x1 <= 0) {\n            this.x = this.x1 + image.width;\n        }\n        if (this.x1 + image.width <= 0) {\n            this.x1 = this.x + image.width;\n        }\n        this.x -= this.speed;\n        this.x1-= this.speed;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Background.js?");

/***/ }),

/***/ "./src/Bullet.js":
/*!***********************!*\
  !*** ./src/Bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bullet; });\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object */ \"./src/Object.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\n\nclass Bullet extends _Object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(ctx, config) {\n        super(ctx, config);\n        this.speed = config.speed;\n        this.position = config.position;\n        this.health = config.health;\n    }\n\n    draw() {\n        this._calculatePosition();\n\n        let image = new Image(this.size, this.size);\n        image.src = this.sprite;\n\n        this.ctx.drawImage(image, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);\n    }\n\n    _calculatePosition() {\n        this.x += this.speed;\n    }\n\n    get sprite() {\n        return _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].assets + `bullet.png`;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Bullet.js?");

/***/ }),

/***/ "./src/Collision.js":
/*!**************************!*\
  !*** ./src/Collision.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Collision; });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _collision_ObstacleCollision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collision/ObstacleCollision */ \"./src/collision/ObstacleCollision.js\");\n/* harmony import */ var _collision_BulletCollision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collision/BulletCollision */ \"./src/collision/BulletCollision.js\");\n/* harmony import */ var _collision_BorderCollision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collision/BorderCollision */ \"./src/collision/BorderCollision.js\");\n/* harmony import */ var _collision_KitCollision__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collision/KitCollision */ \"./src/collision/KitCollision.js\");\n\n\n\n\n\n\nclass Collision {\n\n    /**\n     * @param {Game} game \n     */\n    constructor(game) {\n        this.game = game;\n        this.obstacleCollision = new _collision_ObstacleCollision__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game);\n        this.bulletCollision = new _collision_BulletCollision__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game);\n        this.borderCollision = new _collision_BorderCollision__WEBPACK_IMPORTED_MODULE_3__[\"default\"](game);\n        this.kitCollision = new _collision_KitCollision__WEBPACK_IMPORTED_MODULE_4__[\"default\"](game);\n    }\n\n    process() {\n        for (let i = 0; i < this.collisionObjects.length; i++) {\n            if (!this.collisionObjects[i].enabled) continue;\n            this.collisionObjects[i].process();\n        }\n    }\n    \n    get collisionObjects() {\n        return [\n            this.obstacleCollision,\n            this.bulletCollision,\n            this.borderCollision,\n            this.kitCollision,\n        ];\n    }\n}\n\n//# sourceURL=webpack:///./src/Collision.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collision */ \"./src/Collision.js\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score */ \"./src/Score.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Obstacle */ \"./src/Obstacle.js\");\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Bullet */ \"./src/Bullet.js\");\n/* harmony import */ var _kit_BulletKit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kit/BulletKit */ \"./src/kit/BulletKit.js\");\n/* harmony import */ var _kit_HealthKit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kit/HealthKit */ \"./src/kit/HealthKit.js\");\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Background */ \"./src/Background.js\");\n\n\n\n\n\n\n\n\n\nclass Game {\n\n    constructor(config) {\n        this.config = Object.assign({}, this._defaultConfig(), config);\n        this.ctx = this._initCanvas().getContext('2d');\n        this.collision = new _Collision__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n        this.lastObstacleStep = 0;\n        this.paused = false;\n        this.gameOver = false;\n        this.bulletsCount = Infinity;\n        this.collision.borderCollision.enabled = !this.config.SURVIVAL;\n        this._initHandlers();\n    }\n\n    start() {\n        this.background = this._initBackground();\n        this.ship = this._initShip();\n        this.obstacles = this._initObstacles();\n        this.score = this._initScore();\n        this.kits = this._initKits();\n        this.bullets = [];\n        if (this.config.SURVIVAL) {\n            this.bulletsCount = this.config.BULLET_COUNT;\n        }\n        this.draw();\n    }\n\n    stop() {\n        this.drawGameOverBox();\n        this.gameOver = true;\n        // stop game\n    }\n\n    pause() {\n        this.paused = !this.paused;\n        if (this.paused) {\n            this.drawPause();\n        } else {\n            this.score.start();\n            this.draw();\n        }\n    }\n\n    draw() {\n        if (this.paused || this.gameOver) {\n            return;\n        }\n        for (let i = 0; i < this.objects.length; i++) {\n            this.objects[i].draw();\n        }\n        this.collision.process();\n        this.addObstacle();\n        this.drawBulletsCount();\n        requestAnimationFrame(this.draw.bind(this));\n    }\n\n    drawPause() {\n        this.ctx.font = `36px sans-serif`;\n        this.ctx.fillStyle = this.config.SCORE_COLOR;\n        this.ctx.strokeStyle = 'white';\n        this.ctx.textAlign = 'center';\n        this.ctx.lineWidth = 2;\n        this.ctx.strokeText('Pause', this.ctx.canvas.width / 2, 50);\n        this.ctx.fillText('Pause', this.ctx.canvas.width / 2, 50);\n        this.score.stop();\n    }\n\n    drawGameOverBox() {\n        let text = `Your score: ${this.score.value}`;\n        let boxX = this.ctx.canvas.width / 2 - 150;\n        let boxY = this.ctx.canvas.height / 2 - 75;\n        this.ctx.fillStyle = 'white';\n        this.ctx.strokeStyle = this.config.SCORE_COLOR;\n        this.ctx.fillRect(boxX, boxY, 300, 150);\n        this.ctx.strokeRect(boxX, boxY, 300, 150);\n        this.ctx.font = `36px sans-serif`;\n        this.ctx.fillStyle = this.config.SCORE_COLOR;\n        this.ctx.textAlign = 'center';\n        this.ctx.fillText(text, this.ctx.canvas.width / 2, boxY + 75);\n        this.ctx.font = `18px sans-serif`;\n        this.ctx.fillText('Press space to replay', this.ctx.canvas.width / 2, boxY + 120);\n    }\n\n    drawBulletsCount() {\n        let [x, y] = this.config.SCORE_POSITION;\n        this.ctx.font = `${this.size}px sans-serif`;\n        this.ctx.fillStyle = 'forestgreen';\n        this.ctx.lineWidth = 2;\n        this.ctx.strokeStyle = 'white';\n        this.ctx.textAlign = 'left';\n\t    this.ctx.strokeText(this.bulletsCount, x, y + 30);\n\t    this.ctx.fillText(this.bulletsCount, x, y + 30);\n    }\n\n    addObstacle() {\n        if (this.score.value % this.config.OBSTACLE_STEP !== 0) {\n            return;\n        }\n        if (this.lastObstacleStep === this.score.value) {\n            return;\n        }\n        this.lastObstacleStep = this.score.value;\n        this.obstacles.push(this._initObstacle());\n        this.obstacles.push(this._initObstacle());\n    }\n\n    addBullet() {\n        if (this.bulletsCount <= 0) {\n            return;\n        }\n        this.bullets.push(\n            new _Bullet__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.ctx, {\n                position: [this.ship.x + this.ship.size, this.ship.y],\n                speed: this.config.BULLET_SPEED,\n                size: this.config.BULLET_SIZE,\n                health: this.config.BULLET_HEALTH,\n            }\n        ));\n        this.bulletsCount--;\n    }\n\n    get objects() {\n        // background object must be first\n        return [this.background].concat(\n            this.obstacles,\n            [this.ship, this.score], \n            this.bullets,\n            this.kits,\n        );\n    }\n\n    _initShip() {\n        return new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, {\n            speed: this.config.SHIP_SPEED,\n            size: this.config.SHIP_SIZE,\n            color: this.config.SHIP_COLOR,\n            colorBorder: this.config.SHIP_COLOR_BORDER,\n            health: this.config.SURVIVAL ? \n                    this.config.SHIP_HEALTH_SURVIVAL : \n                    this.config.SHIP_HEALTH_CLASSIC,\n        });\n    }\n\n    _initObstacles() {\n        let obstacles = [];\n        for (let i = 0; i < this.config.OBSTACLE_INIT_QUANTITY; i++) {\n            obstacles.push(this._initObstacle());\n        }\n        return obstacles;\n    }\n\n    _initObstacle() {\n        return new _Obstacle__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx, {\n            speed: this.config.OBSTACLE_SPEED,\n            minSize: this.config.OBSTACLE_MIN_SIZE,\n            maxSize: this.config.OBSTACLE_MAX_SIZE,\n            color: this.config.OBSTACLE_COLOR,\n            colorBorder: this.config.OBSTACLE_COLOR_BORDER\n        });\n    }\n\n    _initKits() {\n        return [\n            new _kit_BulletKit__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.ctx, {\n                color: 'forestgreen',\n                colorBorder: 'darkgreen',\n                speed: this.config.OBSTACLE_SPEED,\n            }),\n            new _kit_HealthKit__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.ctx, {\n                color: 'red',\n                colorBorder: 'maroon',\n                speed: this.config.OBSTACLE_SPEED,\n            })\n        ];\n    }\n\n    _initScore() {\n        return new _Score__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, {\n            position: this.config.SCORE_POSITION,\n            size: this.config.SCORE_SIZE,\n            timeout: this.config.SCORE_TIMEOUT,\n            color: this.config.SCORE_COLOR,\n        });\n    }\n\n    _initBackground() {\n        return new _Background__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.ctx, {\n            speed: this.config.OBSTACLE_SPEED\n        });\n    }\n\n    _initCanvas() {\n        const canvas = document.createElement('canvas');\n        canvas.width = this.config.CANVAS_WIDTH;\n        canvas.height = this.config.CANVAS_HEIGHT;\n        document.body.append(canvas);\n\n        return canvas;\n    }\n\n    _initHandlers() {\n        document.addEventListener('keydown', e => {\n            switch(e.code) {\n                case 'ArrowLeft':\n                case 'ArrowRight':\n                case 'ArrowUp':\n                case 'ArrowDown':\n                    this.ship.addKey(e.key);\n                    break;\n                case 'Escape':\n                    this.pause();\n                    break;\n                case 'Space':\n                    if (this.gameOver) {\n                        this.gameOver = false;\n                        this.start();\n                        break;\n                    }\n                    this.addBullet();\n                    break;\n            }\n        });\n        document.addEventListener('keyup', e => {\n            switch(e.key) {\n            case 'ArrowLeft':\n            case 'ArrowRight':\n            case 'ArrowUp':\n            case 'ArrowDown':\n                this.ship.removeKey(e.key);\n            }\n        });\n    }\n\n    _defaultConfig() {\n        return {\n            SURVIVAL: 1,\n\n            SHIP_SPEED: 2,\n            SHIP_SIZE: 25,\n            SHIP_HEALTH_CLASSIC: 1,\n            SHIP_HEALTH_SURVIVAL: 100,\n            SHIP_COLOR: 'peachpuff',\n            SHIP_COLOR_BORDER: 'tomato',\n\n            OBSTACLE_SPEED: 3,\n            OBSTACLE_MIN_SIZE: 15,\n            OBSTACLE_MAX_SIZE: 80,\n            OBSTACLE_INIT_QUANTITY: 10,\n            OBSTACLE_STEP: 150,\n            OBSTACLE_COLOR: 'crimson',\n            OBSTACLE_COLOR_BORDER: 'white',\n\n            BULLET_SPEED: 7,\n            BULLET_SIZE: 5,\n            BULLET_HEALTH: 20,\n            BULLET_COUNT:10,\n\n            SCORE_TIMEOUT: 100,\n            SCORE_POSITION: [35, 30],\n            SCORE_SIZE: 24,\n            SCORE_COLOR: 'tomato',\n\n            CANVAS_WIDTH: 800,\n            CANVAS_HEIGHT: 500,\n            CANVAS_BACKGROUND: 'honeydew',\n        };\n    }\n\n    static get assets() {\n        return 'assets/';\n    };\n}\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/Object.js":
/*!***********************!*\
  !*** ./src/Object.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Object; });\nclass Object {\n\n    /**\n     * @param {CanvasRenderingContext2D} ctx \n     * @param {*} config \n     */\n    constructor(ctx, config) {\n        this.ctx = ctx;\n        this.position = [0, 0];\n        this.size = config.size;\n        this.config = config;\n    }\n\n    get x() {\n        return this.position[0];\n    }\n\n    get y() {\n        return this.position[1];\n    }\n\n    set x(value) {\n        this.position[0] = value;\n    }\n\n    set y(value) {\n        this.position[1] = value;\n    }\n\n    draw() {\n        this.ctx.fillRect(this.x, this.y, this.size, this.size);\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/Object.js?");

/***/ }),

/***/ "./src/Obstacle.js":
/*!*************************!*\
  !*** ./src/Obstacle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Obstacle; });\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object */ \"./src/Object.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\n\nclass Obstacle extends _Object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    \n    constructor(ctx, config) {\n        super(ctx, config);\n        this.reset();\n        this.speed = config.speed;\n    }\n\n    draw() {\n        this._calculatePosition();\n\n        let x = this.x - this.size / 2;\n        let y = this.y - this.size / 2;\n        let image = new Image(this.size, this.size);\n        image.src = this.sprite;\n\n        this.ctx.drawImage(image, x, y, this.size, this.size);\n    }\n\n    reset() {\n        this.size = this._getRandomValue(this.config.minSize, this.config.maxSize);\n        this.position = this._initPosition();\n        this.health = this.size;\n    }\n\n    get borders() {\n        let x = this.x - this.size / 2;\n        let y = this.y - this.size / 2;\n        return [\n            [\n                [x, y],\n                [x + this.size, y] \n            ],\n            [\n                [x + this.size, y],\n                [x + this.size, y + this.size]\n            ],\n            [\n                [x + this.size, y + this.size],\n                [x, y + this.size]\n            ],\n            [\n                [x, y + this.size],\n                [x, y]\n            ]\n        ];\n    }\n\n    _calculatePosition() {\n        this.x -= this.speed;\n        if (this.x + this.size <= 0) {\n            this.reset();\n        }\n    }\n\n    _getRandomValue(min, max) {\n        return Math.floor(Math.random()*(max-min+1)+min);\n    }\n\n    _initPosition() {\n        let minX = this.ctx.canvas.width + this.size;\n        let maxX = this.ctx.canvas.width * 3;\n        let x = this._getRandomValue(minX, maxX);\n        let y = this._getRandomValue(0, this.ctx.canvas.height);\n        return [x, y];\n    }\n\n    get sprite() {\n        let i = Math.ceil(this.size / (this.config.maxSize / 3));\n        if (i > 3) {\n            i = 3;\n        }\n        if (isNaN(i)) {\n            i = 1;\n        }\n        return _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].assets + `box-${i}.jpg`;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Obstacle.js?");

/***/ }),

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Score; });\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object */ \"./src/Object.js\");\n\n\nclass Score extends _Object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(ctx, config) {\n        super(ctx, config);\n        this.value = config.value || 0;\n        this.timeout = config.timeout;\n        this.position = config.position;\n        this.start();\n    }\n\n    draw() {\n        this.ctx.font = `${this.size}px sans-serif`;\n        this.ctx.fillStyle = this.config.color;\n        this.ctx.lineWidth = 2;\n        this.ctx.strokeStyle = 'white';\n        this.ctx.textAlign = 'left';\n\t    this.ctx.strokeText(this.value, this.x, this.y);\n\t    this.ctx.fillText(this.value, this.x, this.y);\n    }\n\n    start() {\n        this.interval = setInterval(() => {\n            this.value += 1;\n        }, this.timeout);\n    }\n\n    stop() {\n        clearInterval(this.interval);\n    }\n}\n\n//# sourceURL=webpack:///./src/Score.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ship; });\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object */ \"./src/Object.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\n\nclass Ship extends _Object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    \n    constructor(ctx, config) {\n        super(ctx, config);\n        this.speed = config.speed;\n        this.position = this._initPosition();\n        this.health = config.health;\n        this.keyPressed = [];\n        this.frame = 0;\n        this.ticks = 0;\n        this.ticksPerFrame = 2;\n    }\n\n    draw() {\n        this._calculatePosition();\n        \n        // ship\n        let image = new Image(this.size * 2, this.size * 2);\n        image.src = this.sprite;\n\n        if (this.keyPressed.indexOf('ArrowRight') !== -1) {\n            this.frame = 3;\n        }\n\n        let sW = 70 + 10, sH = 74,\n            sx = (70 + 28) * this.frame, sy = 0,\n            dW = this.size * 2 + 10, dH = this.size * 2,\n            dx = this.x - this.size,\n            dy = this.y - this.size;\n        \n        this.ctx.drawImage(image, sx, sy, sW, sH, dx, dy, dW, dH);\n        // sprite animation\n        this.ticks++;\n        if (this.ticks > this.ticksPerFrame) {\n            this.ticks = 0;\n            this.frame++;\n        }\n        if (this.frame > 2) {\n            this.frame = 0;\n        }\n\n        // healthbar\n        let height = this.health * 2;\n        let yPos = 200 + 10 - height;\n        this.ctx.fillStyle = 'red';\n        this.ctx.strokeStyle = 'white';\n        this.ctx.strokeRect(10, yPos, 10, height);\n        this.ctx.fillRect(10, yPos, 10, height);\n\n\n    }\n\n    addKey(key) {\n        let index = this.keyPressed.indexOf(key);\n        if (index === -1) {\n            this.keyPressed.push(key);\n        }\n    }\n\n    removeKey(key) {\n        let index = this.keyPressed.indexOf(key);\n        if (index !== -1) {\n            this.keyPressed.splice(index, 1);\n        }\n    }\n\n    get borders() {\n        return [\n            [\n                [this.x - this.size, this.y - this.size],\n                [this.x + this.size, this.y] \n            ],\n            [\n                [this.x + this.size, this.y],\n                [this.x - this.size, this.y + this.size]\n            ],\n            [\n                [this.x - this.size, this.y + this.size],\n                [this.x - this.size, this.y - this.size]\n            ]\n        ];\n    }\n\n    get sprite() {\n        return _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].assets + 'ship.png'\n    }\n\n    _calculatePosition() {\n        for (let i = 0; i < this.keyPressed.length; i++) {\n            switch(this.keyPressed[i]) {\n            case 'ArrowLeft':\n                this.x -= this.speed;\n                break;\n            case 'ArrowRight':\n                this.x += this.speed;\n                break;\n            case 'ArrowUp':\n                this.y -= this.speed;\n                break;\n            case 'ArrowDown':\n                this.y += this.speed;\n                break;\n          }\n        }\n        // restrict position by canvas borders\n        this.x = this.x < 0 ? 0 : this.x;\n        this.x = this.x > this.ctx.canvas.width ? this.ctx.canvas.width : this.x;\n        this.y = this.y < 0 ? 0 : this.y;\n        this.y = this.y > this.ctx.canvas.height ? this.ctx.canvas.height : this.y;\n    }\n\n    _initPosition() {\n        return [100, this.ctx.canvas.height / 2];\n    }\n}\n\n//# sourceURL=webpack:///./src/Ship.js?");

/***/ }),

/***/ "./src/collision/BaseCollision.js":
/*!****************************************!*\
  !*** ./src/collision/BaseCollision.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseCollision; });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Game */ \"./src/Game.js\");\n\n\nclass BaseCollision {\n\n    /**\n     * @param {Game} game \n     */\n    constructor(game) {\n        this.game = game;\n        this.enabled = true;\n    }\n\n    process() {\n        // ...\n    }\n\n    _checkCollision(firstSegment, secondSegment) {\n        let\tx,y = 1;\n        let [x1,y1] = firstSegment[0];\n        let [x2,y2] = firstSegment[1];\n        let [x3,y3] = secondSegment[0];\n        let [x4,y4] = secondSegment[1];\n        let Ax = x2-x1;\n        let Ay = y2-y1;\n        let Bx = x4-x3;\n        let By = y4-y3;\t\t\t\n        \n        /*\n        (x-x1) / Ax = (y-y1) / Ay  ->  Ay*x - Ay*x1 = Ax*y - Ax*y1  ->  Ay*x - Ax*y = Ay*x1-Ax*y1\n        (x-x3) / Bx = (y-y3) / By  ->  By*x - By*x3 = Bx*y - Bx*y3  ->  By*x - Bx*y = By*x3 - Bx*y3\n        */\n        \n        let coef = [[Ay,-Ax], [By, -Bx]];\n        let res = [Ay*x1-Ax*y1, By*x3-Bx*y3];\n        let [crossX, crossY] = this._gauss(coef, res);\n        if (isNaN(crossX) || isNaN(crossY)) {\n            return false;\n        }\n            \n        let res1 = (crossX-x1)*Ay-(crossY-y1)*Ax == 0;\n        let res2 = (crossX-x3)*By-(crossY-y3)*Bx == 0;\n        \n        let res3 = (crossX >= x1 && crossX <= x2) || (crossX >= x2 && crossX <= x1);\n        let res4 = (crossX >= x3 && crossX <= x4) || (crossX >= x4 && crossX <= x3);\n        let res5 = (crossY >= y1 && crossY <= y2) || (crossY >= y2 && crossY <= y1);\n        let res6 = (crossY >= y3 && crossY <= y4) || (crossY >= y4 && crossY <= y3);  \n\n        return res1 && res2 && res3 && res4 && res5 && res6;\n    }\n\n    _checkCircleCollision(center, r, segment) {\n        let [xc, yc] = center;\n        let [x1,y1] = segment[0];\n        let [x2,y2] = segment[1];\n        let a = x2 - x1;\n        let b = y2 - y1;\n\n        // sqr(x - xc) + sqr(y - yc) = sqr(r)\n\n        // (x - x1)/a = (y - y1)/b  -->  bx - bx1 = ay - ay1  -->  bx - ay = bx1 - ay1\n        // (x - xc)/b = (y - yc)/(-a) -->  -ax + axc = by - byc  -->   ax + by = axc + byc\n\n        let coef = [[b,-a], [a, b]];\n        let res = [b*x1-a*y1, a*xc+b*yc];\n        let [crossX, crossY] = this._gauss(coef, res);\n        if (isNaN(crossX) || isNaN(crossY)) {\n            return false;\n        }\n        // let circleHasPoint = Math.pow(crossX - xc, 2) + Math.pow(crossY - yc, 2) == Math.pow(r, 2);\n        let circleHasPointX = (crossX >= xc - r && crossX <= xc + r);\n        let circleHasPointY = (crossY >= yc - r && crossY <= yc + r);\n        let segmentHasPointX = (crossX >= x1 && crossX <= x2) || (crossX >= x2 && crossX <= x1);\n        let segmentHasPointY = (crossY >= y1 && crossY <= y2) || (crossY >= y2 && crossY <= y1);\n        return circleHasPointX && circleHasPointY && segmentHasPointX && segmentHasPointY;\n    }\n\n    /**\n     * _gaussian elimination\n     * @param  array A matrix\n     * @param  array x vector\n     * @return array x solution vector\n     */\n    _gauss(A, x) {\n\n        var i, k, j;\n\n        // Just make a single matrix\n        for (i=0; i < A.length; i++) { \n            A[i].push(x[i]);\n        }\n        var n = A.length;\n\n        for (i=0; i < n; i++) { \n            // Search for maximum in this column\n            var maxEl = Math.abs(A[i][i]),\n                maxRow = i;\n            for (k=i+1; k < n; k++) { \n                if (Math.abs(A[k][i]) > maxEl) {\n                    maxEl = Math.abs(A[k][i]);\n                    maxRow = k;\n                }\n            }\n\n\n            // Swap maximum row with current row (column by column)\n            for (k=i; k < n+1; k++) { \n                var tmp = A[maxRow][k];\n                A[maxRow][k] = A[i][k];\n                A[i][k] = tmp;\n            }\n\n            // Make all rows below this one 0 in current column\n            for (k=i+1; k < n; k++) { \n                var c = -A[k][i]/A[i][i];\n                for (j=i; j < n+1; j++) { \n                    if (i===j) {\n                        A[k][j] = 0;\n                    } else {\n                        A[k][j] += c * A[i][j];\n                    }\n                }\n            }\n        }\n\n        // Solve equation Ax=b for an upper triangular matrix A\n        x = this._arrayFill(0, n, 0);\n        for (i=n-1; i > -1; i--) { \n            x[i] = A[i][n]/A[i][i];\n            for (k=i-1; k > -1; k--) { \n                A[k][n] -= A[k][i] * x[i];\n            }\n        }\n\n        return x;\n    }\n\n    _arrayFill(i, n, v) {\n        var a = [];\n        for (; i < n; i++) {\n            a.push(v);\n        }\n        return a;\n    }\n}\n\n//# sourceURL=webpack:///./src/collision/BaseCollision.js?");

/***/ }),

/***/ "./src/collision/BorderCollision.js":
/*!******************************************!*\
  !*** ./src/collision/BorderCollision.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BorderCollision; });\n/* harmony import */ var _BaseCollision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseCollision */ \"./src/collision/BaseCollision.js\");\n\n\nclass BorderCollision extends _BaseCollision__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    process() {\n        let leftBorder = [[0,0], [0, this.game.ctx.canvas.height]];\n        for (let i = 0; i < this.game.obstacles.length; i++) {\n            let obstacleBorders = this.game.obstacles[i].borders;\n            if (this._checkCollision(leftBorder, obstacleBorders[0])) {\n                this.game.stop();\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/collision/BorderCollision.js?");

/***/ }),

/***/ "./src/collision/BulletCollision.js":
/*!******************************************!*\
  !*** ./src/collision/BulletCollision.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BulletCollision; });\n/* harmony import */ var _BaseCollision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseCollision */ \"./src/collision/BaseCollision.js\");\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Bullet */ \"./src/Bullet.js\");\n/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Obstacle */ \"./src/Obstacle.js\");\n\n\n\n\nclass BulletCollision extends _BaseCollision__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    process() {\n        let bullets = this.game.bullets\n        let obstacles = this.game.obstacles;\n        bulletLoop:\n        for (let i = 0; i < bullets.length; i++) {\n            // remove bullets outside canvas\n            if (bullets[i].x - bullets[i].size >= this.game.ctx.canvas.width) {\n                this.game.bullets.splice(i, 1);\n                continue;\n            }\n            // loop through obstacles\n            for (let k = 0; k < obstacles.length; k++) {\n                let obstacleBorders = obstacles[k].borders;\n                // loop through obstacle borders\n                for (let o = 0; o < obstacleBorders.length; o++) {\n                    let bulletPos = [bullets[i].x, bullets[i].y];\n                    let bulletRadius = bullets[i].size;\n                    if (this._checkCircleCollision(bulletPos, bulletRadius, obstacleBorders[o])) {\n                        this.handleBulletCollision(obstacles[k], bullets[i], i);\n                        continue bulletLoop;\n                    }\n                }\n            }\n        }\n    }\n    /**\n     * \n     * @param {Obstacle} obstacle \n     * @param {Bullet} bullet \n     * @param {Number} bulletIndex\n     */\n    handleBulletCollision(obstacle, bullet, bulletIndex) {\n        let healthDiff = obstacle.health - bullet.health;\n        switch (true) {\n            case healthDiff < 0: \n                obstacle.reset(); \n                bullet.health = Math.abs(healthDiff);\n                break;\n            case healthDiff > 0: \n                obstacle.health = healthDiff;\n                this.game.bullets.splice(bulletIndex, 1);\n                break;\n            default:\n                obstacle.reset(); \n                this.game.bullets.splice(bulletIndex, 1);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/collision/BulletCollision.js?");

/***/ }),

/***/ "./src/collision/KitCollision.js":
/*!***************************************!*\
  !*** ./src/collision/KitCollision.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KitCollision; });\n/* harmony import */ var _ObstacleCollision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObstacleCollision */ \"./src/collision/ObstacleCollision.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Ship */ \"./src/Ship.js\");\n/* harmony import */ var _kit_BulletKit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/BulletKit */ \"./src/kit/BulletKit.js\");\n\n\n\n\nclass KitCollision extends _ObstacleCollision__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    get obstacles() {\n        return this.game.kits;\n    }\n\n    /**\n     * @param {Ship} ship \n     * @param {BulletKit} kit \n     */\n    handleShipCollision(ship, kit) {\n        kit.apply(this.game);\n        super.handleShipCollision(ship, kit);\n    }\n}\n\n//# sourceURL=webpack:///./src/collision/KitCollision.js?");

/***/ }),

/***/ "./src/collision/ObstacleCollision.js":
/*!********************************************!*\
  !*** ./src/collision/ObstacleCollision.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ObstacleCollision; });\n/* harmony import */ var _BaseCollision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseCollision */ \"./src/collision/BaseCollision.js\");\n/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Obstacle */ \"./src/Obstacle.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Ship */ \"./src/Ship.js\");\n\n\n\n\nclass ObstacleCollision extends _BaseCollision__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    get obstacles() {\n        return this.game.obstacles;\n    }\n\n    process() {\n        let shipBorders = this.game.ship.borders;\n        let obstacles = this.obstacles;\n        for (let i = 0; i < obstacles.length; i++) {\n            let obstacleBorders = obstacles[i].borders;\n            for (let s = 0; s < shipBorders.length; s++) {\n                for (let o = 0; o < obstacleBorders.length; o++) {\n                    if (this._checkCollision(shipBorders[s], obstacleBorders[o])) {\n                        this.handleShipCollision(this.game.ship, obstacles[i]);\n                        return;\n                    }\n                }\n            }\n        }\n    }\n    /**\n     * @param {Ship} obstacle \n     * @param {Obstacle} obstacle \n     */\n    handleShipCollision(ship, obstacle) {\n        let healthDiff = ship.health - obstacle.health;\n        switch (true) {\n            case healthDiff <= 0: \n                this.game.stop();\n                break;\n            default:\n                ship.health = healthDiff;\n                obstacle.reset();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/collision/ObstacleCollision.js?");

/***/ }),

/***/ "./src/kit/BaseKit.js":
/*!****************************!*\
  !*** ./src/kit/BaseKit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseKit; });\n/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Obstacle */ \"./src/Obstacle.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game */ \"./src/Game.js\");\n\n\n\nclass BaseKit extends _Obstacle__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    /**\n     * @param {Game} game \n     */\n    apply(game) {\n        // ...\n    }\n\n    reset() {\n        this.position = this._initPosition();\n        this.size = 25;\n        this.health = 0;\n        this.value = 1;\n    }\n\n    _initPosition() {\n        let minX = this.ctx.canvas.width * 3;\n        let maxX = this.ctx.canvas.width * 10;\n        let x = this._getRandomValue(minX, maxX);\n        let y = this._getRandomValue(0, this.ctx.canvas.height);\n        return [x, y];\n    }\n}\n\n//# sourceURL=webpack:///./src/kit/BaseKit.js?");

/***/ }),

/***/ "./src/kit/BulletKit.js":
/*!******************************!*\
  !*** ./src/kit/BulletKit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BulletKit; });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Game */ \"./src/Game.js\");\n/* harmony import */ var _BaseKit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseKit */ \"./src/kit/BaseKit.js\");\n\n\n\nclass BulletKit extends _BaseKit__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    /**\n     * @param {Game} game \n     */\n    apply(game) {\n        game.bulletsCount += this.value;\n    }\n\n    reset() {\n        super.reset();\n        this.value = this._getRandomValue(5, 20);\n    }\n\n    get sprite() {\n        let i = Math.ceil(this.value / 6);\n        if (i > 3) {\n            i = 3;\n        }\n        if (isNaN(i)) {\n            i = 1;\n        }\n        return _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].assets + `kit-ammo-${i}.jpg`;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/kit/BulletKit.js?");

/***/ }),

/***/ "./src/kit/HealthKit.js":
/*!******************************!*\
  !*** ./src/kit/HealthKit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HealthKit; });\n/* harmony import */ var _BaseKit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseKit */ \"./src/kit/BaseKit.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game */ \"./src/Game.js\");\n\n\n\nclass HealthKit extends _BaseKit__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    /**\n     * @param {Game} game \n     */\n    apply(game) {\n        game.ship.health += this.value;\n        if (game.ship.health > 100) {\n            game.ship.health = 100;\n        }\n    }\n\n    reset() {\n        super.reset();\n        this.value = 35;\n    }\n\n    get sprite() {\n        return _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].assets + `kit-health.jpg`;\n    }\n}\n\n//# sourceURL=webpack:///./src/kit/HealthKit.js?");

/***/ })

/******/ });