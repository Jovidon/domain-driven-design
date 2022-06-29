import { TranslatesModelClass } from '../database';
export declare class ValidationError extends Error {
    code: number;
    translates: TranslatesModelClass;
    constructor(field: string);
}
