"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(field) {
        super();
        this.code = 1000;
        this.name = `ValidationError`;
        this.message = `Field '${field}' not validate`;
        this.translates = {
            en: `Field '${field}' not validate`,
            ru: `Поле '${field}' не проверено`,
            uz: `'${field}' maydon tasdiqlanmadi`,
        };
    }
}
exports.ValidationError = ValidationError;
