import { IBaseRepository } from './IBaseRepository';
import { Partner } from '../../entity';

export interface IPartnerRepository extends IBaseRepository<Partner> {
  updatePassword();
  getByEmail(email: string): Promise<Partner>;
}
