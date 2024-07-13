import { registerPlugin } from '@capacitor/core';
const VikirMobileNumber = registerPlugin('VikirMobileNumber', {
    web: () => import('./web').then(m => new m.VikirMobileNumberWeb()),
});
export * from './definitions';
export { VikirMobileNumber };
//# sourceMappingURL=index.js.map