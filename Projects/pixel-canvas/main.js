// WEB GAME DEVELOPMENT KIT (JS) 1.0 //
// TODO: Create a version of WGDK, but only for node.
// WGDK JS 1.0 //
// Variables // 
var canvas;
// canvas version for platformers, etc.
function initializewdgk(options) {
    // Checks if the options are valid (if they are an object)
    if (typeof options === 'object') {
        /* The reason why this uses "if" is because the switch statement
        does not work with using the keys of an object. (As far as I know.) - mp3e */
        if (options.hasOwnProperty('canvas')) {
            /* Instead of using 2 keys to signify if the canvas is a class or id and what name it is,
            I use substring, the key would be "id clickergame " ["type of canvas", "canvas name", "canvastypename"].
            This way, I can use the same key to signify if the canvas is a class or id and what name it is,
            - ghostedbread :) */
            var canvasType = options.canvas.substring(0, options.canvas.indexOf(' '));
            var canvasName = options.canvas.substring(options.canvas.indexOf(' ') + 1);
            // Adds canvas type to element.
            switch (canvasType) {
                case 'id':
                    canvas = document.getElementById(canvasName);
                    break;
                case 'class':
                    canvas = document.getElementsByClassName(canvasName);
                    break;
            }
            // also, class kinda don't work for now in 1.0 //
        } else {
            // Automatic canvas creation.
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
        }

    }
}
let WDGKDisplay = {
    canvas: canvas,
    /**
     * @param {string} text
     * @param {string} color
     * @param {string} font
     * @param {string} size
     * @param {string} x
     * @param {string} y
     * @param {function} specialassignc
     * @param {function} specialassign
    **/
    square: function (x, y, width, height, color, specialassign) {
        // Creates a square.
        this.canvas.fillStyle = color;
        this.canvas.fillRect(x, y, width, height);
        if (specialassign) {
            specialassign();
        }
    },
    circle: function (x, y, width, height, color,specialassign) {
        // Creates a circle.
        this.canvas.fillStyle = color;
        this.canvas.beginPath();
        this.canvas.arc(x, y, width, 0, 2 * Math.PI);
        this.canvas.fill();
        if (specialassign) {
            specialassign();
        }
    }
}
function GWDK_mouse_INIT() {
    // Mouse object.
    var mouse = {
        x: 0,
        y: 0,
        down: false,
        up: false,
        left: false,
        right: false,
        middle: false,
        wheel: 0,
        click: false,
        release: false,
        position: function (event) {
            // Gets the mouse position.
            var rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        },
        button: function (event) {
            // Gets the mouse button.
            switch (event.button) {
                case 0:
                    mouse.left = true;
                    break;
                case 1:
                    mouse.middle = true;
                    break;
                case 2:
                    mouse.right = true;
                    break;
            }
        },
        wheel: function (event) {
            // Gets the mouse wheel.
            mouse.wheel = event.wheelDelta;
        },
        click: function (event) {
            // Gets the mouse click.
            mouse.click = true;
        },
        release: function (event) {
            // Gets the mouse release.
            mouse.release = true;
        }
    }
    return mouse;
}
function GWDK_keyboard_INIT() {
    // Keyboard object.
    var keyboard = {
        key: [],
        down: function (event) {
            // Gets the keyboard key.
            keyboard.key[event.keyCode] = true;
        },
        up: function (event) {
            // Gets the keyboard key.
            keyboard.key[event.keyCode] = false;
        }
    }
    return keyboard;
}
function GWDK_sprite_INIT(img) {
    // Sprite object.
    var sprite = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        image: new Image(),
        draw: function () {
            // Draws the sprite.
            WDGKDisplay.canvas.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    return sprite;
}

// export the functions.
module.exports = {
    initializewdgk: initializewdgk,
    WDGKDisplay: WDGKDisplay,
    GWDK_mouse_INIT: GWDK_mouse_INIT,
    GWDK_keyboard_INIT: GWDK_keyboard_INIT,
    GWDK_sprite_INIT: GWDK_sprite_INIT
}
