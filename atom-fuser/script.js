/**
 * ATOMFUSER SCRIPT SRC
 * --------------------
 * @author mp3e
 */
// ---- VARIABLES ---- //
let hypo_quark,
up_down_quark_pair,
up_up_down_quark_pair
/**
 * @param {String} obj
 */
function getObjectProperty1(obj) {
    return obj.split("_")[0]
}
/**
 * @param {String} obj
 */
function getObjectProperty2(obj) {
    return obj.split("_")[1]
}
/**
 * @param {String} obj
 */
function incstat(obj) {
    switch (obj) {
        case obj.split("_")[0] == "Quark":
            switch (obj.split("_")[1]) {
                case "hypothetical":

            }
    }
}