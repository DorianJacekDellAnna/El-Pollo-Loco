class Endboss extends movableObjects {

    height = 400;
    width = 250;
    y = 55;
    speed = 20;
    energy = 20;


    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_DIEING = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_DIEING);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1000; //2000
        this.animate();
    }

    animate() {
        let i = 0
        let hadFirstContact = false;
        setInterval(() => {
            if (this.isDead()) {
                this.DisplayDeadEndbossAndEndGame();
            }

            else if (world.character.x > 600 && !hadFirstContact) {
                i = 0;
                hadFirstContact = true;
            }

            else if (i < 8) {
                this.playAnimation(this.IMAGES_ALERT);
            }

            else if (i > 8 && hadFirstContact) {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            }
            i++;
        }, 200);
    }

    DisplayDeadEndbossAndEndGame() {
        this.playAnimation(this.IMAGES_DIEING);
        setTimeout(() => {
            endGame();
        }, 5000);
    }
}
