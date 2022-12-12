class Bottle extends movableObjects {

    y = 360;
    height = 100;
    width = 100;
    IMAGES_BOTTOM = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ]

    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_BOTTOM)
        this.x = 200 + Math.random() * 500; // Zahl zwischen 200 und 700 
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTOM);            
        }, 500);
    }


}