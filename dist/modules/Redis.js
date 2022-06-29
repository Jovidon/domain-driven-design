"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = void 0;
const asyncRedis = require('async-redis');
class Redis {
    constructor() {
        try {
            this.client = asyncRedis.createClient();
        }
        catch (error) {
            console.error('REDIS ERROR', error);
            throw error;
        }
    }
    async set(key, value, duration) {
        try {
            this.client.set(key, value);
            this.client.expire(key, duration);
        }
        catch (error) {
            console.error('REDIS ERROR', error);
            throw error;
        }
    }
    async get(field) {
        try {
            return await this.client.get(field);
        }
        catch (error) {
            console.error('REDIS ERROR', error);
            throw error;
        }
    }
}
exports.Redis = Redis;
