class Character extends movableObjects {

    height = 280;
    y = 10; // 155
    speed = 8;
    i = 0;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];
    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_LONGIDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'

    ];
    offset = {
        top: 120,
        left: 20, //70
        right: 20, //50
        bottom: 20 //20
    };
    world;
    currentImage = 0;
    walkSound = new Audio('audio/walk.mp3');
    hurtSound = new Audio('audio/characterHurt.mp3');
    jumpSound = new Audio('audio/characterJump.mp3')


    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_JUMPING)
        this.loadImages(this.IMAGES_DEAD)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_IDLE)
        this.loadImages(this.IMAGES_LONGIDLE)
        this.applyGravity();
        this.animate();
    }
    /**
     * This function strats the animations and the movement from the character
     */
    animate() {
        this.playInterval = setStoppableInterval(this.characterMovement.bind(this), 1000 / 60)
        this.playInterval = setStoppableInterval(this.characterAnimation.bind(this), 100)
    }
    /**
     * This function is responsible for the movement for the character
     */
    characterMovement() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.otherDirection = false;
            this.moveRight();
            this.walkSound.play();
        }

        if (this.world.keyboard.LEFT && this.x > 0) {
            this.otherDirection = true;
            this.moveLeft();
            this.walkSound.play();
        }

        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            this.jumpSound.volume = 0.5;
            this.jumpSound.play();
        }

        this.world.camera_x = -this.x + 100;
    }
    /**
     * This function crates the Animations for the character
     */
    characterAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            endGame();
        }
        else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.hurtSound.play();
            this.i = 0;
        }
        else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
            this.i = 0;
        }
        else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
            this.i = 0;
        }
        else if (this.i > 30) {
            this.playAnimation(this.IMAGES_LONGIDLE);
        }
        else {
            this.playAnimation(this.IMAGES_IDLE);
        }
        this.i++;
    }
/**
 * This function checks if the character sleeps
 * @returns the i value in idle
 */
    characterSleeps() {
        return this.i > 30
    }
}