class Cloud extends movableObjects {
    y = 20;
    width = 500;
    height = 150;
    speed = 0.1;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = 200 + Math.random() * 500; // Zahl zwischen 200 und 700 
        this.animate();
        
    }

    animate() {
        this.playInterval = setStoppableInterval(this.cloudMovement.bind(this), 1000/60) 
    }

    cloudMovement(){
        this.moveLeft();
    }

}