import { IPartnerRepository, IUserRepository, ISessionRepository } from '../domain';
export declare class CoreRepositoryClass {
    private _partnerRepository;
    private _userRepository;
    private _sessionRepository;
    constructor();
    Partner(): IPartnerRepository;
    User(): IUserRepository;
    Session(): ISessionRepository;
}
export declare const Repository: CoreRepositoryClass;
