import { WebPlugin } from '@capacitor/core';

import type { VikirMobileNumberPlugin } from './definitions';

export class VikirMobileNumberWeb
  extends WebPlugin
  implements VikirMobileNumberPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
