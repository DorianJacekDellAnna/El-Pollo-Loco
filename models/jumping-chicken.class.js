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
        this.x = 700 + Math.random() * 1000; // Zahl zwischen 700 und 1700 
        this.applyGravity();
        this.animate();
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y < 380;
        }
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
        setInterval(() => {
            if (!this.isDead()) {
                if (world.character.x < this.x) {
                    this.otherDirection = false;
                    this.moveLeft();
                }

                if (world.character.x > this.x) {
                    this.otherDirection = true;
                    this.moveRight();
                }
            }
        }, 1000 / 60);
        setInterval(() => {
            if (!this.isAboveGround() && !this.isDead()) {
                this.jump();
            }
        }, Math.random() * 6000);
    }
}