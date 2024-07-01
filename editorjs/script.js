/**
 * GraphicsJS - Graphics For Node
 * @version 1.0.6
 * @lisence MIT
 * @author ghostedbread
 * feedback email: graphicsjsf@gmail.com
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANSIColor = ANSIColor;
exports.ANSILabel = ANSILabel;
exports.ANSIError = ANSIError;
exports.YELLOW_T = exports.RESETTEXT_ = exports.RED_T = exports.GREEN_T = exports.BLUE_T = exports.MAGENTA_T = exports.CYAN_T = exports.WHITE_T = exports.BLACK_T = void 0;
var RESETTEXT_ = '\u001b[0m';
exports.RESETTEXT_ = RESETTEXT_;
var RED_T = '\u001b[31m';
exports.RED_T = RED_T;
var BLUE_T = '\u001b[34m';
exports.BLUE_T = BLUE_T;
var GREEN_T = '\u001b[32m';
exports.GREEN_T = GREEN_T;
var YELLOW_T = '\u001b[33m';
exports.YELLOW_T = YELLOW_T;
var MAGENTA_T = '\u001b[35m';
exports.MAGENTA_T = MAGENTA_T;
var CYAN_T = '\u001b[36m';
exports.CYAN_T = CYAN_T;
var WHITE_T = '\u001b[37m';
exports.WHITE_T = WHITE_T;
var BLACK_T = '\u001b[30m';
exports.BLACK_T = BLACK_T
// Bright Colors
// too lazy lol
/**
 * 
 * @param {number} code the code for the ANSI Color.
 * @returns the full ANSI color code, fully working if code exists
 */
function ANSIColor(code) {
    return `\u001b[${code}`;
}
/**
 * 
 * @param {string} text Text to display.
 * @param {number} bg ANSI Code for the background color.
 */
 // NOTE: BG CODES 40 - 49, FG CODES 30 - 39
function ANSILabel(text, bgcode, fgcode) {
    let result = `\u001b[${bgcode};1m${fgcode}${text}${RESETTEXT_}`
    if (!bgcode && !fgcode) {
        bgcode = 47
        result = `\u001b[${bgcode};1m\u001b[${BLACK_T}${text}${RESETTEXT_}`
    }
    if (!bgcode) {
        result = `\u001b[${bgcode};1m\u001b[${fgcode}${text}${RESETTEXT_}`
    }

    console.log(result)
}
/**
 * 
 * @param {string} errorType Error Type To Show.
 */
function ANSIError(errorType) {
    console.log(`\u001b[31mAn Error Has Occured: ${errorType}${RESETTEXT_}`)
}