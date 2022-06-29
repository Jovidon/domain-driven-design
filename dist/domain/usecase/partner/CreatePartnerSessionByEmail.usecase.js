"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPartnerSessionByEmailUseCase = void 0;
const entity_1 = require("../../entity");
const config_1 = require("../../../config");
const errors_1 = require("../../../errors");
const modules_1 = require("../../../modules");
const definitions_1 = require("../../../definitions");
class CreatePartnerSessionByEmailUseCase {
    async execute(params) {
        try {
            const partnerRepository = config_1.Repository.Partner();
            const partner = await partnerRepository.getByEmail(params.email);
            if (!partner)
                throw new errors_1.AuthorizationError('Login or password incorrect');
            if (!new modules_1.Password(params.password).decode(partner.getPassword()))
                throw new errors_1.AuthorizationError('Login or password incorrect');
            const _session = new entity_1.Session()
                .buildAccessToken(await new modules_1.Token(process.env.PARTNER_JWT_SECRET, Number(process.env.PARTNER_JWT_EXPIRES)).create({
                ownerId: partner.getId(),
                type: definitions_1.SessionType.PARTNER,
            }))
                .buildType(definitions_1.SessionType.PARTNER)
                .buildOwnerId(partner.getId());
            return await config_1.Repository.Session().create(_session);
        }
        catch (e) {
            throw e;
        }
    }
}
exports.createPartnerSessionByEmailUseCase = new CreatePartnerSessionByEmailUseCase();
