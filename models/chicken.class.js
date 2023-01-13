class Chicken extends movableObjects {

    y = 360;
    height = 60;
    width = 80;
    speed = 1;
    energy = 100;
    IMAGE_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGE_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1000 + Math.random() * 1000; // Zahl zwischen 1000 und 1000 
        this.animate();
    }

    animate() {
        this.playInterval = setStoppableInterval(this.chickenMovement.bind(this), 1000 / 60)
        this.playInterval = setStoppableInterval(this.chickenAnimation.bind(this), 100)
    }

    chickenMovement(){
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

    chickenAnimation(){
        if (this.isDead()) {
            this.playAnimation(this.IMAGE_DEAD);
        } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }
}

