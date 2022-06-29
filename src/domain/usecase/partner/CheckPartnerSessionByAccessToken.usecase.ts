import { IBaseUseCase } from '../base';
import { Partner } from '../../entity';
import { Repository } from '../../../config';
import { AuthorizationError } from '../../../errors';
import { Token } from '../../../modules';

class CheckPartnerSessionByAccessTokenUseCase implements IBaseUseCase<string, Partner> {
  async execute(accessToken: string): Promise<Partner> {
    try {
      const sessionRepository = Repository.Session();
      const session = await sessionRepository.getByAccessToken(accessToken);

      if (!session) throw new AuthorizationError('Incorrect accessToken');

      const payload = await new Token(process.env.PARTNER_JWT_SECRET, Number(process.env.PARTNER_JWT_EXPIRES)).verify(
        session.getAccessToken(),
      );

      if (payload.ownerId != session.getOwnerId()) throw new AuthorizationError('Incorrect accessToken');

      return await Repository.Partner().getById(session.getOwnerId());
    } catch (e) {
      throw e;
    }
  }
}

export const checkPartnerSessionByAccessTokenUseCase: IBaseUseCase<
  string,
  Partner
> = new CheckPartnerSessionByAccessTokenUseCase();
