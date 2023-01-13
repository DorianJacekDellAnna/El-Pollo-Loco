class Bottle extends movableObjects {

    y = 360;
    height = 100;
    width = 100;
    IMAGES_BOTTOM = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ]
    offset = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    };

    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_BOTTOM)
        this.x = 200 + Math.random() * 1300; // Zahl zwischen 200 und 700 
        this.animate();
    }

    animate() {
        this.playInterval = setStoppableInterval(this.bottleAnimation.bind(this), 500)
    }

    bottleAnimation(){
        this.playAnimation(this.IMAGES_BOTTOM);    
    }


}