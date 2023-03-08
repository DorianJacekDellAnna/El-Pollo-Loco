class JumpingChicken extends movableObjects {

    y = 360;
    height = 60;
    width = 80;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]
    speed = 1;
    energy = 100;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1000 + Math.random() * 1000; // Zahl zwischen 1000 und 1000 
        this.applyGravity();
        this.animate();
    }
    /**
     * This function checks if the jumping chicken is above the ground 
     * @returns true or the y-coordinate from the jumping chicken 
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y < 380;
        }
    }
    /**
     * This function strats the animations and the movement from the jumping chicken 
     */
    animate() {
        this.playInterval = setStoppableInterval(this.jumpingChickenAnimations.bind(this), 100)
        this.playInterval = setStoppableInterval(this.jumpingChickenMovement.bind(this), 1000 / 60)
        this.playInterval = setStoppableInterval(this.jumpingChickenJump.bind(this), Math.random() * 6000)
    }
    /**
     * This function crates the Animations for the jumping chicken 
     */
    jumpingChickenAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }
    /**
     * This function is responsible for the movement for the jumping chicken 
     */
    jumpingChickenMovement() {
        if (!this.isDead()) {
            if (this.characterAhead()) {
                this.otherDirection = false;
                this.moveLeft();
            }

            if (this.characterBehind()) {
                this.otherDirection = true;
                this.moveRight();
            }
        }
    }
    /**
     * this function let the jumping chicken jumps
     */
    jumpingChickenJump() {
        if (!this.isAboveGround() && !this.isDead()) {
            this.jump();
        }
    }
}