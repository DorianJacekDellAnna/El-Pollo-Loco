class movableObjects extends DrawableObjects {
    speed = 3;
    otherDirection = false;
    speedY = 5;
    acceleration = 1;
    energy = 100;
    endbossEnergy = 600;
    lastHit = 0;

    applyGravity(bottomPosition) {
        setInterval(() => {
            if (this.isAboveGround(bottomPosition) || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 50);
    }

    isAboveGround(bottomPosition) {
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y < 155;
        }
    }

    //Character. isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    isCollidingCharacterCoinBottle(mo) {
        return (this.x + this.width - this.offset.right) > mo.x + mo.offset.left &&
            this.x + this.offset.left < (mo.x + mo.width - mo.offset.right) &&
            (this.y + this.height - this.offset.bottom) > mo.y + mo.offset.top &&
            (this.y + this.offset.top) < (mo.y + mo.height - mo.offset.bottom);
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0
    }

    endbossIsDead() {
        return this.endboss.energy == 0
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
        timePassed = timePassed / 1000; // Difference in s
        return timePassed < 0.5;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    jump() {
        return this.speedY = 20;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 7 % 6; => 1 Rest 1 
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 2, 3, 4, 5...
        let path = images[i];
        this.img = this.imageCache[path]
        this.currentImage++;
    }
}