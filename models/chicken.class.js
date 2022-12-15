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
        this.x = 700 + Math.random() * 1000; // Zahl zwischen 700 und 1700 
        this.animate();
    }

    animate() {
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
            if (this.isDead()) {
                this.playAnimation(this.IMAGE_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    }
}

