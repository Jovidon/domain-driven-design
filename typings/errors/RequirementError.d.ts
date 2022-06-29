import { TranslatesModelClass } from '../database';
export declare class RequirementError extends Error {
    code: number;
    translates: TranslatesModelClass;
    constructor(field: string);
}
