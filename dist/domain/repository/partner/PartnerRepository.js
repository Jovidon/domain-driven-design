"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerRepository = void 0;
const entity_1 = require("../../entity");
const database_1 = require("../../../database");
const base_1 = require("../base");
const modules_1 = require("../../../modules");
class PartnerRepository extends base_1.ABaseRepository {
    async updatePassword() {
        throw new Error('Method not implemented.');
    }
    async getByEmail(email) {
        const query = { email };
        return new entity_1.Partner().convertToEntity(await database_1.PartnerModel.findOne(query));
    }
    async create(_partner) {
        const fields = ['_fullName', '_email', '_password'];
        this.checkRequiredFields(fields, _partner);
        _partner.buildPassword(new modules_1.Password(_partner.getPassword()).encode());
        const partnerToCreate = _partner.convertToModelClass();
        return new entity_1.Partner().convertToEntity(await database_1.PartnerModel.create(partnerToCreate));
    }
    async update(_partner) {
        const fields = ['_id'];
        this.checkRequiredFields(fields, _partner);
        const partnerToUpdate = _partner.convertToModelClass();
        const query = {
            _id: _partner.getId(),
        };
        return new entity_1.Partner().convertToEntity(await database_1.PartnerModel.findOneAndUpdate(query, { $set: partnerToUpdate }, { new: true }));
    }
    async getById(_id) {
        const query = { _id };
        return new entity_1.Partner().convertToEntity(await database_1.PartnerModel.findOne(query));
    }
    async getAll() {
        return this.multipleConverter(await database_1.PartnerModel.find(), entity_1.Partner);
    }
}
exports.PartnerRepository = PartnerRepository;
