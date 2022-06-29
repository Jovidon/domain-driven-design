"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const bcrypt_1 = require("bcrypt");
class Password {
    constructor(value) {
        this.value = value;
    }
    encode() {
        return bcrypt_1.hashSync(this.value, bcrypt_1.genSaltSync());
    }
    decode(hash) {
        return bcrypt_1.compareSync(this.value, hash);
    }
}
exports.Password = Password;
