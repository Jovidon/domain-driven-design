"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const classes_1 = require("../classes");
exports.SessionModel = typegoose_1.getModelForClass(classes_1.SessionModelClass, {
    schemaOptions: {
        collection: 'sessions',
        timestamps: true,
        minimize: true,
        versionKey: false,
    },
});
