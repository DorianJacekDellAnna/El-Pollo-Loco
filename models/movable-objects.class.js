class movableObjects extends DrawableObjects {

    speed = 3;
    otherDirection = false;
    speedY = 5;
    acceleration = 1;
    energy = 100;
    endbossEnergy = 600;
    lastHit = 0;
    /**
     * This function applies gravity to the objects
     * @param {y-coordintae} bottomPosition - This is the bottom position of the repective object
     */
    applyGravity(bottomPosition) {
        this.playInterval = setStoppableInterval(this.gravityApplyer.bind(this), 1000 / 50)
    }
    /**
     * This is the function for the gravity 
     */
    gravityApplyer() {
        if (this.moIsAboveGround()) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    }
    /**
     * This function checks if the movable object is above ground
     * @returns true or false 
     */
    moIsAboveGround() {
        return this.isAboveGround(this.bottomPosition) || this.speedY > 0
    }
    /**
     * This function checks if the character is ahead 
     * @returns true or false 
     */
    characterAhead() {
        return world.character.x < this.x
    }
    /**
     * This function checks if the character is ahead 
     * @returns true or false 
     */
    characterBehind() {
        return world.character.x > this.x
    }
    /**
     * This function checks if the object is above ground and returns a value 
     * @param {y-coordinate} bottomPosition 
     * @returns true or the bottom y-coordinate
     */
    isAboveGround(bottomPosition) {
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y < 155;
        }
    }
    /**
     * This function checks the collision of the respective objects
     * @param {movable object} mo - This is the respective movable object
     * @returns the function to detect the collision 
     */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }
    /**
     * This function checks the collision of the pickable items 
     * @param {movable object} mo - This is the respective movable object
     * @returns the function to detect the collision 
     */
    isCollidingCharacterCoinBottle(mo) {
        return (this.x + this.width - this.offset.right) > mo.x + mo.offset.left &&
            this.x + this.offset.left < (mo.x + mo.width - mo.offset.right) &&
            (this.y + this.height - this.offset.bottom) > mo.y + mo.offset.top &&
            (this.y + this.offset.top) < (mo.y + mo.height - mo.offset.bottom);
    }
    /**
     * This function reduces the energy for each hit
     */
    hit() {
        this.energy -= 0.5;
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * This function sets the condition of a dead paricipant
     * @returns  the character energy
     */
    isDead() {
        return this.energy == 0
    }
    /**
     * This function sets the condition of a dead endboss
     * @returns  the endboss energy
     */
    endbossIsDead() {
        return this.endboss.energy == 0
    }
    /**
     * This function checks if the paricipant is hurt 
     * @returns the time passed 
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
        timePassed = timePassed / 1000; // Difference in s
        return timePassed < 0.5;
    }
    /**
     * This function moves the paricipant to the left 
     */
    moveLeft() {
        this.x -= this.speed;
    }
    /**
     * This function moves the paricipant to the right 
     */
    moveRight() {
        this.x += this.speed;
    }
    /**
     * This function let the paricipant jump
     * @returns jumpspeed 
     */
    jump() {
        return this.speedY = 20;
    }
    /**
     * This function plays the animation frame for frame
     * @param {images} images - This is the array with the pictures for the animation
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 7 % 6; => 1 Rest 1 
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 2, 3, 4, 5...
        let path = images[i];
        this.img = this.imageCache[path]
        this.currentImage++;
    }
}