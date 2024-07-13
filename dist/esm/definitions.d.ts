export interface VikirMobileNumberPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
