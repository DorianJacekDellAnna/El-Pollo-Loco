let level1;
function initLevel() {

    level1 = new level(

        createLevel1Enemies(),
        createLevel1Endboss(),
        createLevel1Clouds(),
        createLevel1Background(),
        createLevel1Coins(),
        createLevel1Bottles(),

    )
}

function createLevel1Enemies() {
    return enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new JumpingChicken(),
        new JumpingChicken(),
        new JumpingChicken(),
        new JumpingChicken(),
        new JumpingChicken(),
        new JumpingChicken(),
    ]
}

function createLevel1Endboss() {
    return endboss = [
        new Endboss()
    ]
}

function createLevel1Clouds() {
    return clouds = [
        new Cloud()
    ]
}

function createLevel1Background() {
    return backgroundObjects = [

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
    ]
}

function createLevel1Coins() {
    return coins = [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
}

function createLevel1Bottles() {
    return bottles = [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ]
}