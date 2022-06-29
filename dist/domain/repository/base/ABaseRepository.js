"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABaseRepository = void 0;
const errors_1 = require("../../../errors");
class ABaseRepository {
    checkRequiredFields(fields, obj) {
        for (const field of fields) {
            if (obj[field] === null || obj[field] === undefined)
                throw new errors_1.RequirementError(field);
        }
    }
    multipleConverter(_modelClassItems, TCreator) {
        const entities = [];
        for (const item of _modelClassItems) {
            const entityObject = new TCreator().convertToEntity(item);
            entities.push(entityObject);
        }
        return entities;
    }
}
exports.ABaseRepository = ABaseRepository;
