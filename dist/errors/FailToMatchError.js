"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailToMatchError = void 0;
class FailToMatchError extends Error {
    constructor(field) {
        super();
        this.code = 1001;
        this.name = `FailToMatchError`;
        this.message = `'${field}' is fail to match`;
        this.translates = {
            en: `'${field}' is fail to match`,
            ru: `'${field}' не соответствует`,
            uz: `'${field}' mos kelmadi`,
        };
    }
}
exports.FailToMatchError = FailToMatchError;
