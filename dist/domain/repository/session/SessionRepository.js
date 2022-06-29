"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRepository = void 0;
const database_1 = require("../../../database");
const entity_1 = require("../../entity");
const definitions_1 = require("../../../definitions");
const base_1 = require("../base");
class SessionRepository extends base_1.ABaseRepository {
    async create(_session) {
        const requiredFields = ['_ownerId', '_type'];
        this.checkRequiredFields(requiredFields, _session);
        const sessionToCreate = _session.convertToModelClass();
        const created = await database_1.SessionModel.create(sessionToCreate);
        return new entity_1.Session().convertToEntity(created);
    }
    async update(_session) {
        const requiredFields = ['_id'];
        this.checkRequiredFields(requiredFields, _session);
        const userToUpdate = _session.convertToModelClass();
        const updated = await database_1.SessionModel.findOneAndUpdate({ _id: _session.getId() }, { $set: userToUpdate }, { new: true });
        return new entity_1.Session().convertToEntity(updated);
    }
    async getById(_id) {
        const found = await database_1.SessionModel.findOne({ _id });
        return new entity_1.Session().convertToEntity(found);
    }
    async getAll() {
        const query = {
            status: definitions_1.SessionStatus.ACTIVE,
        };
        return this.multipleConverter(await database_1.SessionModel.find(query), entity_1.Session);
    }
    async getByAccessToken(accessToken) {
        const found = await database_1.SessionModel.findOne({ accessToken });
        return new entity_1.Session().convertToEntity(found);
    }
}
exports.SessionRepository = SessionRepository;
