"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = exports.CoreRepositoryClass = void 0;
const domain_1 = require("../domain");
class CoreRepositoryClass {
    constructor() {
        this._partnerRepository = null;
        this._userRepository = null;
        this._sessionRepository = null;
    }
    Partner() {
        if (!this._partnerRepository)
            this._partnerRepository = new domain_1.PartnerRepository();
        return this._partnerRepository;
    }
    User() {
        if (!this._userRepository)
            this._userRepository = new domain_1.UserRepository();
        return this._userRepository;
    }
    Session() {
        if (!this._sessionRepository)
            this._sessionRepository = new domain_1.SessionRepository();
        return this._sessionRepository;
    }
}
exports.CoreRepositoryClass = CoreRepositoryClass;
exports.Repository = new CoreRepositoryClass();
