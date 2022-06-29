import { TranslatesModelClass } from '../database';
export declare class AuthorizationError extends Error {
    code: number;
    translates: TranslatesModelClass;
    constructor(message: string);
}
