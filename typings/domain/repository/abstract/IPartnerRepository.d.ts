import { IBaseRepository } from './IBaseRepository';
import { Partner } from '../../entity';
export interface IPartnerRepository extends IBaseRepository<Partner> {
    updatePassword(): any;
    getByEmail(email: string): Promise<Partner>;
}
