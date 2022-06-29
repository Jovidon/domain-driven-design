export declare class Password {
    protected value: any;
    constructor(value: string);
    encode(): string;
    decode(hash: string): boolean;
}
