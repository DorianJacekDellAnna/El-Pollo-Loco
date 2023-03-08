class Endboss extends movableObjects {

    height = 400;
    width = 250;
    y = 55;
    speed = 20;
    energy = 20;
    i = 0;
    hadFirstContact = false;
    deathSoundPlayed = false;

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

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    enbossAlertSound = new Audio('audio/endboss_chicken.mp3');
    endbossHurt = new Audio('audio/endbossHurt.mp3');
    endbossDead = new Audio('audio/endbossDead.mp3');

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_DIEING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_ATTACK)
        this.x = 2000; //2000
        this.animate();
    }
    /**
     * This function strats the animations and the movement from the endboss
     */
    animate() {
        this.playInterval = setStoppableInterval(this.enbossMovement.bind(this), 200)
        this.playInterval = setStoppableInterval(this.endbossAnimations.bind(this), 100)
    }
    /**
     * This function is responsible for the movement for the endboss 
     */
    enbossMovement() {
        if (this.isDead()) {
            this.DisplayDeadEndbossAndEndGame();
        }

        else if (this.characterFirstContact()) {
            this.i = 0;
            this.hadFirstContact = true;
        }

        else if (this.endbossIsAlert()) {
            this.playAnimation(this.IMAGES_ALERT);
            this.enbossAlertSound.play();
        }

        else if (this.characterHadFirstContact()) {
            if (this.characterAhead()) {
                this.otherDirection = false;
                this.moveLeft();
            }

            if (this.characterBehind()) {
                this.otherDirection = true;
                this.moveRight();
            }
        }
        this.i++;
    }
    /**
     * This function crates the Animations for the jumping chicken 
     */
    endbossAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DIEING)
        }

        else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.endbossHurt.play();
        }

        else if (this.endbossCanAttack()) {
            this.playAnimation(this.IMAGES_ATTACK);
        }

        else if (this.characterHadFirstContact()) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }
    /**
     * This function detects the first contact from the character and the endboss
     * @returns the condition for this event 
     */
    characterFirstContact() {
        return world.character.x > 1600 && !this.hadFirstContact
    }
    /**
     * This function returns the endboss Alern condition 
     * @returns the condition for endboss Alert
     */
    endbossIsAlert() {
        return this.i < 8 && this.hadFirstContact
    }
    /**
     * This function checks if the character and the endboss had their first contact 
     * @returns the condition for this event 
     */
    characterHadFirstContact() {
        return this.i > 8 && this.hadFirstContact
    }
    /**
     * This function checks if the endboss can attack 
     * @returns the condition for this event 
     */
    endbossCanAttack() {
        return this.x - world.character.x < 50 && this.x - world.character.x > 0
    }
    /**
     * This function ends the game after the endboss dies 
     */
    DisplayDeadEndbossAndEndGame() {
        if (!this.deathSoundPlayed) {
            this.endbossDead.volume = 0.1;
            this.endbossDead.play();
            this.deathSoundPlayed = true;
        }
        this.playAnimation(this.IMAGES_DIEING);
        setTimeout(() => { endGame(); }, 3000);
    }
}
