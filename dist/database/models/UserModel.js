"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const classes_1 = require("../classes");
exports.UserModel = typegoose_1.getModelForClass(classes_1.UserModelClass, {
    schemaOptions: {
        collection: 'users',
        timestamps: true,
        minimize: true,
        versionKey: false,
    },
});
