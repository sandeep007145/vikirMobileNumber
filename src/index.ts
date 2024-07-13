import { registerPlugin } from '@capacitor/core';

import type { VikirMobileNumberPlugin } from './definitions';

const VikirMobileNumber = registerPlugin<VikirMobileNumberPlugin>(
  'VikirMobileNumber',
  {
    web: () => import('./web').then(m => new m.VikirMobileNumberWeb()),
  },
);

export * from './definitions';
export { VikirMobileNumber };
