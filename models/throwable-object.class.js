class ThrowableObject extends movableObjects {
IMAGES_THROWING = [
    'img/6_salsa_bottle/salsa_bottle1.png',
    'img/6_salsa_bottle/salsa_bottle2.png',
    'img/6_salsa_bottle/salsa_bottle3.png',
    'img/6_salsa_bottle/salsa_bottle4.png',
    'img/6_salsa_bottle/salsa_bottle5.png',
    'img/6_salsa_bottle/salsa_bottle6.png',
    'img/6_salsa_bottle/salsa_bottle7.png'
]

    constructor(x, y, direction) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle4.png');
        this.loadImages(this.IMAGES_THROWING)
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            if (!this.direction) {
                this.x += 10;
            }

            if (this.direction) {
                this.x -= 10;
            }
        }, 25);
        setInterval(() => {
            this.playAnimation(this.IMAGES_THROWING);
        }, 50);
    }


}