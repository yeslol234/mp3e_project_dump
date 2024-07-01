function _0x3a81(_0x1c01e2, _0x4f8a3b) {
    const _0x14120f = _0x1412();
    return _0x3a81 = function (_0x3a8134, _0x3bcf4c) {
        _0x3a8134 = _0x3a8134 - 0x13c;
        let _0x4ead08 = _0x14120f[_0x3a8134];
        return _0x4ead08;
    }, _0x3a81(_0x1c01e2, _0x4f8a3b);
}
(function (_0x184fe0, _0x4b507c) {
    const _0x203a89 = _0x3a81, _0x12bf71 = _0x184fe0();
    while (!![]) {
        try {
            const _0x31e370 = parseInt(_0x203a89(0x145)) / 0x1 * (parseInt(_0x203a89(0x149)) / 0x2) + -parseInt(_0x203a89(0x148)) / 0x3 * (parseInt(_0x203a89(0x13c)) / 0x4) + parseInt(_0x203a89(0x147)) / 0x5 * (-parseInt(_0x203a89(0x14d)) / 0x6) + -parseInt(_0x203a89(0x146)) / 0x7 * (parseInt(_0x203a89(0x143)) / 0x8) + parseInt(_0x203a89(0x13f)) / 0x9 * (parseInt(_0x203a89(0x141)) / 0xa) + parseInt(_0x203a89(0x13e)) / 0xb * (parseInt(_0x203a89(0x144)) / 0xc) + parseInt(_0x203a89(0x14a)) / 0xd;
            if (_0x31e370 === _0x4b507c)
                break;
            else
                _0x12bf71['push'](_0x12bf71['shift']());
        } catch (_0x1d61a4) {
            _0x12bf71['push'](_0x12bf71['shift']());
        }
    }
}(_0x1412, 0x32f39));
function _0x1412() {
    const _0x458f67 = [
        'getItem',
        '1256iiCQOk',
        '2059212WeYUHC',
        '15AQAMAj',
        '17472iXcFaz',
        '43405lttMAz',
        '117363yKuXte',
        '18422jchGQv',
        '4151628haSjRA',
        'setItem',
        'parse',
        '264RhLGfE',
        '20RjoinQ',
        'stringify',
        '22LEeWpM',
        '45hbHbxI',
        'error',
        '754830MBpOPS'
    ];
    _0x1412 = function () {
        return _0x458f67;
    };
    return _0x1412();
}
export let saveload = {
    'save'(key, value) {
        const _0x1de64f = _0x3a81;
        localStorage[_0x1de64f(0x14b)](key, JSON[_0x1de64f(0x13d)](value));
    },
    'load'(key, defaultValue) {
        const _0x323ef2 = _0x3a81, _0xc1b4e3 = localStorage[_0x323ef2(0x142)](key);
        if (_0xc1b4e3 === null)
            return defaultValue;
        try {
            const _0x39eb1b = JSON[_0x323ef2(0x14c)](_0xc1b4e3);
            return typeof _0x39eb1b === typeof _0x4ecdb7 ? _0x39eb1b : (console[_0x323ef2(0x140)]('Type mismatch. Using default value.'), _0x4ecdb7);
        } catch (_0x5d4370) {
            return console[_0x323ef2(0x140)]('Error parsing JSON. Using default value.'), _0x4ecdb7;
        }
    }
};