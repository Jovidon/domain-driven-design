import {
  IPartnerRepository,
  IUserRepository,
  ISessionRepository,
  PartnerRepository,
  UserRepository,
  SessionRepository,
} from '../domain';

export class CoreRepositoryClass {
  private _partnerRepository: IPartnerRepository;
  private _userRepository: IUserRepository;
  private _sessionRepository: ISessionRepository;

  constructor() {
    this._partnerRepository = null;
    this._userRepository = null;
    this._sessionRepository = null;
  }

  public Partner(): IPartnerRepository {
    if (!this._partnerRepository) this._partnerRepository = new PartnerRepository();
    return this._partnerRepository;
  }

  public User(): IUserRepository {
    if (!this._userRepository) this._userRepository = new UserRepository();
    return this._userRepository;
  }

  public Session(): ISessionRepository {
    if (!this._sessionRepository) this._sessionRepository = new SessionRepository();
    return this._sessionRepository;
  }
}

export const Repository: CoreRepositoryClass = new CoreRepositoryClass();
