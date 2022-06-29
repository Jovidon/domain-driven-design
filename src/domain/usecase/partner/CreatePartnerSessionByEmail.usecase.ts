import { IBaseUseCase } from '../base';
import { Session } from '../../entity';
import { SessionModelClass } from '../../../database';
import { Repository } from '../../../config';
import { AuthorizationError } from '../../../errors';
import { Password, Token } from '../../../modules';
import { SessionType } from '../../../definitions';

class CreatePartnerSessionByEmailUseCase implements IBaseUseCase<SessionModelClass, Session> {
  async execute(params: any): Promise<Session> {
    try {
      const partnerRepository = Repository.Partner();
      const partner = await partnerRepository.getByEmail(params.email);

      if (!partner) throw new AuthorizationError('Login or password incorrect');
      if (!new Password(params.password).decode(partner.getPassword()))
        throw new AuthorizationError('Login or password incorrect');

      const _session = new Session()
        .buildAccessToken(
          await new Token(process.env.PARTNER_JWT_SECRET, Number(process.env.PARTNER_JWT_EXPIRES)).create({
            ownerId: partner.getId(),
            type: SessionType.PARTNER,
          }),
        )
        .buildType(SessionType.PARTNER)
        .buildOwnerId(partner.getId());
      return await Repository.Session().create(_session);
    } catch (e) {
      throw e;
    }
  }
}

export const createPartnerSessionByEmailUseCase: IBaseUseCase<
  SessionModelClass,
  Session
> = new CreatePartnerSessionByEmailUseCase();
