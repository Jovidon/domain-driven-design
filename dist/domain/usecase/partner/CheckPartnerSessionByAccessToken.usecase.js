"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPartnerSessionByAccessTokenUseCase = void 0;
const config_1 = require("../../../config");
const errors_1 = require("../../../errors");
const modules_1 = require("../../../modules");
class CheckPartnerSessionByAccessTokenUseCase {
    async execute(accessToken) {
        try {
            const sessionRepository = config_1.Repository.Session();
            const session = await sessionRepository.getByAccessToken(accessToken);
            if (!session)
                throw new errors_1.AuthorizationError('Incorrect accessToken');
            const payload = await new modules_1.Token(process.env.PARTNER_JWT_SECRET, Number(process.env.PARTNER_JWT_EXPIRES)).verify(session.getAccessToken());
            if (payload.ownerId != session.getOwnerId())
                throw new errors_1.AuthorizationError('Incorrect accessToken');
            return await config_1.Repository.Partner().getById(session.getOwnerId());
        }
        catch (e) {
            throw e;
        }
    }
}
exports.checkPartnerSessionByAccessTokenUseCase = new CheckPartnerSessionByAccessTokenUseCase();
