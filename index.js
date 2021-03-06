'use strict';

const { __awaiter, __generator } = require('./generator');

exports.__esModule = true;
exports.translate = void 0;

var axios_1 = require('axios');

function translate(textBase, from, to) {
    return __awaiter(this, void 0, void 0, function() {
        var textTest, rep, textss, _i, textTest_1, _a;
        return __generator(this, function(_b) {
            switch(_b.label) {
                case 0:
                    if (!textBase) throw new Error('Can you specify text please !');
                    if(!to) throw new Error('Can you specify lang please !');

                    textTest = textBase.split('\n');
                    rep = '';

                    if(!(textTest.length !== 1)) return [3, 6];

                    textss = void 0;

                    _i = 0, textTest_1 = textTest;
                    _b.label = 1;
                case 1:
                    if(!(_i < textTest_1.length)) return [3, 4];

                    textss = textTest_1[_i];
                    _a = rep;

                    return [4, translateOne(textss, from, to)];
                case 2:
                    rep = _a + ((_b.sent()) + '\n');
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [4, rep];
                case 5: return [2, _b.sent()];
                case 6: return [4, translateOne(textBase, from, to)];
                case 7: return [2, _b.sent()];
            }
        });
    });
}

exports.translate = translate;

function translateOne(text, from, lang) {
    return __awaiter(this, void 0, void 0, function() {
        var body, err_1;
        return __generator(this, function(_a) {
            switch(_a.label) {
                case 0:
                    if (text == '')
                        return [2, ''];
                    if (!lang)
                        return [2];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);

                    return [4, axios_1["default"].get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=".concat(from, "&tl=").concat(lang, "&dt=t&q=").concat(text))];
                case 2:
                    body = _a.sent();
                    return [2, body.data[0][0][0]];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3, 4];
                case 4: return [2];
            }
        });
    });
}