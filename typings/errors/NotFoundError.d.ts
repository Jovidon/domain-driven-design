import { TranslatesModelClass } from '../database';
export declare class NotFoundError extends Error {
    code: number;
    translates: TranslatesModelClass;
    constructor(target?: string);
}
