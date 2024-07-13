import { WebPlugin } from '@capacitor/core';
import type { VikirMobileNumberPlugin } from './definitions';
export declare class VikirMobileNumberWeb extends WebPlugin implements VikirMobileNumberPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
