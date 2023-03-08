let canvas;
let world;
let keyboard = new Keyboard();
let gameStarted = true;
let fullScreen = false;
let backgroundMusic = new Audio('audio/backgroundMusic.mp3')
let interlalIds = [];
/**
 * This function initializes the game
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}
/**
 * This function pushes all intervalls into a array 
 * @param {function} fn - This is the function to push
 * @param {number} time - This the interlal time 
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    interlalIds.push(id)
}
/**
 * This function is responsible for the full screen mode
 */
function goFullScreen() {
    var canvas = document.getElementById("canvas");
    if (canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if (canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if (canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
}
/**
 * This function starts the Game 
 */
function startGame() {
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('fullScreen').classList.remove('d-none');
    initLevel();
    init();
    backgroundMusic.play();
}
/**
 * This function restarts the game
 */
function reloadGame() {
    location.reload();
}
/**
 * This function ends the game
 */
function endGame() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('end-screen').classList.remove('d-none');
    document.getElementById('fullScreen').classList.add('d-none');
    clearAllIntervals();
}
/**
 * This funcion clears all intervals
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});


function mobileTouchBtn() {
    document.getElementById('buttonRight').addEventListener('touchstart', (e) => {
        keyboard.RIGHT = true;
    });

    document.getElementById('buttonRight').addEventListener('touchend', (e) => {
        keyboard.RIGHT = false;
    });

    document.getElementById('buttonLeft').addEventListener('touchstart', (e) => {
        keyboard.LEFT = true;
    });

    document.getElementById('buttonLeft').addEventListener('touchend', (e) => {
        keyboard.LEFT = false;
    });

    document.getElementById('buttonJump').addEventListener('touchstart', (e) => {
        keyboard.SPACE = true;
    });

    document.getElementById('buttonJump').addEventListener('touchend', (e) => {
        keyboard.SPACE = false;
    });

    document.getElementById('buttonThrow').addEventListener('touchstart', (e) => {
        keyboard.D = true;
    });

    document.getElementById('buttonThrow').addEventListener('touchend', (e) => {
        keyboard.D = false;
    });

}
