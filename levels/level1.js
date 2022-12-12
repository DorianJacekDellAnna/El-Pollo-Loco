let level1;
function initLevel() {

level1 = new level(

    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new JumpingChicken(),
        new JumpingChicken(),
        new JumpingChicken(),
    ],

    endboss = [
        new Endboss()
    ],

    clouds = [
        new Cloud()
    ],

    backgroundObjects = [

        new BackgroundObjects('img/5_background/layers/air.png', -719),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', -719),
        new BackgroundObjects('img/5_background/layers/air.png', 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObjects('img/5_background/layers/air.png', 719),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 719),
        new BackgroundObjects('img/5_background/layers/air.png', 719 * 2),
        new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 719 * 2),
        new BackgroundObjects('img/5_background/layers/air.png', 719 * 3),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 719 * 3),
    ],

    coins = [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ],
   
    bottles = [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ],
)
}