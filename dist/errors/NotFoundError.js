"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
class NotFoundError extends Error {
    constructor(target = 'Target') {
        super();
        this.code = 1000;
        this.name = `NotFoundError`;
        this.message = `${target} not found`;
        this.translates = {
            en: `${target} not found`,
            ru: `${target} не найден`,
            uz: `${target} topilmadi`,
        };
    }
}
exports.NotFoundError = NotFoundError;
