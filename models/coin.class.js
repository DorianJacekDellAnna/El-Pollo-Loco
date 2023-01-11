class Coin extends movableObjects {

    y = 360;
    height = 100;
    width = 100;
    offset = {
        top: 15,
        left: 10,
        right: 10,
        bottom: 15
    };

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 200 + Math.random() * 500; // Zahl zwischen 200 und 700 1800 ist ein guter wert um es auf die komplette map zu verteilen 
        this.y = 60 + Math.random() * 300; // Zahl zwischen 200 und 700 
    }
}