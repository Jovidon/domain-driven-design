import { TranslatesModelClass } from '../database';
export declare class FailToMatchError extends Error {
    code: number;
    translates: TranslatesModelClass;
    constructor(field: string);
}
