export declare class Redis {
    client: any;
    constructor();
    set(key: string, value: string, duration: number): Promise<void>;
    get(field: string): Promise<any>;
}
