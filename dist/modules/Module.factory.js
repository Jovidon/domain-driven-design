"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = exports.ModuleClass = void 0;
const Redis_1 = require("./Redis");
class ModuleClass {
    constructor() {
        this._redisModule = null;
    }
    Redis() {
        if (!this._redisModule)
            this._redisModule = new Redis_1.Redis();
        return this._redisModule;
    }
}
exports.ModuleClass = ModuleClass;
exports.Module = new ModuleClass();
