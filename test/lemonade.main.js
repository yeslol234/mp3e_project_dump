/* lemonade - make games lol */
/**
 * use it lol
 * author - mp3e / ghostedbread
 * ----------------------------------------------------------------
 * use wgdk for 3D graphics
 */
// js version //
function check(el) {
    if (el instanceof HTMLCanvasElement) {
        return 1;
    } else if (el instanceof HTMLDivElement) {
        return 0;
    }
}
let _lemonade = {canvas: false}
function init(el) {
    switch(check(el)) {
        case 1:
            _lemonade.canvas = true;
        break;
        case 0:
            _lemonade.canvas = false;
        break;
    }
    
}
function generateSprite(position, fallbackColor) {

}
