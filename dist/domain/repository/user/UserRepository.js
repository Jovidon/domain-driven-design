"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = require("../../../database");
const entity_1 = require("../../entity");
const definitions_1 = require("../../../definitions");
const base_1 = require("../base");
class UserRepository extends base_1.ABaseRepository {
    async create(_user) {
        const requiredFields = [
            '_fullName',
            '_phone',
            '_password',
            '_tokenExpireMinutes',
            '_type',
            '_twoStepAuthorizationEnabled',
        ];
        this.checkRequiredFields(requiredFields, _user);
        const userToCreate = _user.convertToModelClass();
        const created = await database_1.UserModel.create(userToCreate);
        return new entity_1.User().convertToEntity(created);
    }
    async update(_user) {
        const requiredFields = ['_id'];
        this.checkRequiredFields(requiredFields, _user);
        const userToUpdate = _user.convertToModelClass();
        const updated = await database_1.UserModel.findOneAndUpdate({ _id: _user.getId() }, { $set: userToUpdate }, { new: true });
        return new entity_1.User().convertToEntity(updated);
    }
    async getById(_id) {
        const found = await database_1.UserModel.findOne({
            _id,
            status: { $ne: definitions_1.UserStatus.DELETED },
        });
        return new entity_1.User().convertToEntity(found);
    }
    async getByEmail(email) {
        const found = await database_1.UserModel.findOne({
            email,
            status: { $ne: definitions_1.UserStatus.DELETED },
        });
        return new entity_1.User().convertToEntity(found);
    }
    async getAll() {
        const query = {
            status: definitions_1.UserStatus.ACTIVE,
        };
        return this.multipleConverter(await database_1.UserModel.find(query), entity_1.User);
    }
    async updatePassword() {
    }
}
exports.UserRepository = UserRepository;
