var capacitorVikirMobileNumber = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
