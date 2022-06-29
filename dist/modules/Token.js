"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class Token {
    constructor(secret = 'KfRxG+dZjjASpnGdxL%-@W33@42Ah7Z$', expires = 632448000000) {
        this.secret = secret;
        this.expires = expires;
    }
    async create(payload = {}) {
        return jsonwebtoken_1.sign(payload, this.secret, { expiresIn: this.expires });
    }
    async verify(token) {
        return jsonwebtoken_1.verify(token, this.secret);
    }
}
exports.Token = Token;
