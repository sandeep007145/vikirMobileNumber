'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const VikirMobileNumber = core.registerPlugin('VikirMobileNumber', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.VikirMobileNumberWeb()),
});

class VikirMobileNumberWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    VikirMobileNumberWeb: VikirMobileNumberWeb
});

exports.VikirMobileNumber = VikirMobileNumber;
//# sourceMappingURL=plugin.cjs.js.map
