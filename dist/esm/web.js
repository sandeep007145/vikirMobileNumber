import { WebPlugin } from '@capacitor/core';
export class VikirMobileNumberWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map