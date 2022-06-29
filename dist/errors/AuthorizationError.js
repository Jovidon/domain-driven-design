"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = void 0;
class AuthorizationError extends Error {
    constructor(message) {
        super();
        this.code = 1004;
        this.name = `AuthorizationError`;
        this.message = message;
        this.translates = {
            en: `Authorization error`,
            ru: `Ошибка авторизации`,
            uz: `Avtorizatsiya xatosi`,
        };
    }
}
exports.AuthorizationError = AuthorizationError;
