"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionModelClass = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const definitions_1 = require("../../../definitions");
let SessionModelClass = class SessionModelClass {
};
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], SessionModelClass.prototype, "ownerId", void 0);
__decorate([
    typegoose_1.prop({ enum: definitions_1.SessionType }),
    __metadata("design:type", Number)
], SessionModelClass.prototype, "type", void 0);
__decorate([
    typegoose_1.prop({ enum: definitions_1.SessionStatus, default: definitions_1.SessionStatus.ACTIVE }),
    __metadata("design:type", Number)
], SessionModelClass.prototype, "status", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], SessionModelClass.prototype, "accessToken", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], SessionModelClass.prototype, "useragent", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], SessionModelClass.prototype, "expires", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], SessionModelClass.prototype, "usedAt", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], SessionModelClass.prototype, "expiresAt", void 0);
SessionModelClass = __decorate([
    typegoose_1.index({ ownerId: 1 }),
    typegoose_1.index({ accessToken: 1 }, { unique: true })
], SessionModelClass);
exports.SessionModelClass = SessionModelClass;
