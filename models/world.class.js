class World {
    character = new Character();
    endboss = new Endboss()
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinStatusBar = new CoinStatusBar();
    bottleStatusBar = new BottleStatusBar();
    throwableObject = [];
    flyingBottles = new ThrowableObject();
    jumpingChicken = new JumpingChicken();
    canThrow = true;
    characterFallDown = false;
    pickCoin = new Audio('audio/coinPick.mp3')
    pickBottle = new Audio('audio/bottlePick.mp3')
    bottleHitSound = new Audio('audio/glass_break.mp3');
    bottleThrow = new Audio('audio/throw.mp3');
    chickenSqueeze = new Audio('audio/squeez.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        this.playInterval = setStoppableInterval(this.check.bind(this), 10)
    }

    check(){
        this.checkCollisions();
        this.checkThrowObjects();
        this.checkIfCharacterJumps();
    }

    characterCanThrow(){
        return this.keyboard.D && this.bottleStatusBar.percentage > 0 && this.canThrow
    }

    chickenCanAttack(){
        return !this.character.isAboveGround() && !enemy.isDead()
    }

    checkThrowObjects() {
        if (this.characterCanThrow()) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.throwableObject.push(bottle);
            this.bottleStatusBar.percentage -= 20;
            this.bottleStatusBar.setPercentage(this.bottleStatusBar.percentage);
            this.canThrow = false;
            this.bottleThrow.play();
            setTimeout(() => {
                this.canThrow = true;
            }, 1000);
        }
    }

    checkIfCharacterJumps() {
        if (this.character.y < -40) {
            this.characterFallDown = true;
        }

        if (this.character.y == 166) {
            this.characterFallDown = false;
        }
    }

    checkCollisions() {
        this.characterGetHit();
        this.characterPickCoin();
        this.characterPickBottle();
        this.endbossBottleHit();
        this.characterGetHitByEndboss();
    }

    characterGetHit() {
        return this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.isDead()) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy)
            }

            if (this.character.isColliding(enemy) && this.character.isAboveGround() && this.characterFallDown) {
                enemy.energy = 0;
                this.chickenSqueeze.volume = 0.1;
                this.chickenSqueeze.play();
            }
        });
    }

    characterPickCoin() {
        return this.level.coins.forEach((coin) => {
            if (this.character.isCollidingCharacterCoinBottle(coin)) {
                this.level.coins.splice(coins.indexOf(coin), 1)
                this.pickCoin.play();
                this.coinStatusBar.percentagcccde += 20;
                this.coinStatusBar.setPercentage(this.coinStatusBar.percentage)
            }
        });
    }

    characterPickBottle() {
        return this.level.bottles.forEach((bottle) => {
            if (this.character.isCollidingCharacterCoinBottle(bottle)) {
                this.level.bottles.splice(bottles.indexOf(bottle), 1)
                this.pickBottle.play();
                this.bottleStatusBar.percentage += 20;
                this.bottleStatusBar.setPercentage(this.bottleStatusBar.percentage)
            }
        });
    }

    endbossBottleHit() {
        return this.throwableObject.forEach((bottle) => {
            this.level.endboss.forEach((endboss) => {
                if (endboss.isColliding(bottle)) {
                    this.level.endboss.forEach(endboss => {
                        endboss.energy -= 5;
                        endboss.hit();
                        this.throwableObject.splice(bottle)
                        this.bottleHitSound.play()
                    });

                }
            })
        });
    }

    characterGetHitByEndboss() {
        return this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy)
            }
        });
    }

    // draw wird immer wieder aufgerufen 
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects);

        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.endboss)
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.throwableObject);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinStatusBar);
        this.addToMap(this.bottleStatusBar);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        let self = this

        requestAnimationFrame(
            function () {
                self.draw();
            }
        );
    }

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
         /* mo.drawFrame(this.ctx);
          mo.drawFrameCoinAndBottle(this.ctx);
          mo.drawFrameThrowableObject(this.ctx);
          mo.drawFrameCharacter(this.ctx); */// Only if you want to see the Hitbox


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }

    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}

