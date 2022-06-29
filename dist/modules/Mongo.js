"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongo = void 0;
const mongoose_1 = require("mongoose");
class Mongo {
    constructor(uri) {
        this.uri = uri;
        this.options = {
            autoIndex: true,
            poolSize: 10,
            bufferMaxEntries: 0,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        };
    }
    async connect() {
        this.db = await mongoose_1.connect(this.uri, this.options);
    }
    async disconnect() {
        await this.db.disconnect();
    }
}
exports.Mongo = Mongo;
