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

   bottleAboveGround = this.y < 400;

    throw() {
        this.playInterval = setStoppableInterval(this.throwableObjectPhysics.bind(this), 1000 / 50) 
        this.playInterval = setStoppableInterval(this.throwableObjectFlightDirection.bind(this), 25) 
        this.playInterval = setStoppableInterval(this.throwableObjectAnimations.bind(this), 50) 
        this.speedY = 10;
    }

    throwableObjectPhysics(){
        if (this.bottleAboveGround) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    }

    throwableObjectFlightDirection(){
        if (this.bottleDirectionRight()) {
            this.x += 10;
        }

        if (this.bottleDirectionLeft()) {
            this.x -= 10;
        }
    }

    throwableObjectAnimations(){
        if (this.bottleAboveGround) {
            this.playAnimation(this.IMAGES_THROWING);
        }
    }

    bottleAboveGround(){
        return this.y < 400
    }

    bottleDirectionRight(){
        return !this.direction && this.bottleAboveGround
    }

    bottleDirectionLeft(){
        return this.direction && this.bottleAboveGround
    }




}