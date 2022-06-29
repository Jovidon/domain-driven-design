export declare class Token {
    protected secret: string;
    protected expires: number;
    constructor(secret?: string, expires?: number);
    create(payload?: {}): Promise<string>;
    verify(token: string): Promise<any>;
}
