"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirementError = void 0;
class RequirementError extends Error {
    constructor(field) {
        super();
        this.code = 1000;
        this.name = `RequirementError`;
        this.message = `'${field}' is required field`;
        this.translates = {
            en: `'${field}' is required field`,
            ru: `'${field}' обязательное поле`,
            uz: `'${field}' majburiy maydon`,
        };
    }
}
exports.RequirementError = RequirementError;
