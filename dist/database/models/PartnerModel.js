"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const classes_1 = require("../classes");
exports.PartnerModel = typegoose_1.getModelForClass(classes_1.PartnerModelClass, {
    schemaOptions: {
        collection: 'partners',
        timestamps: true,
        minimize: true,
        versionKey: false,
    },
});
