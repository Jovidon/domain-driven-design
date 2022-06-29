import { Partner } from '../../entity';
import { Types } from 'mongoose';
import { ABaseRepository } from '../base';
import { PartnerModelClass } from '../../../database';
import { IPartnerRepository } from '../abstract';
export declare class PartnerRepository extends ABaseRepository<Partner, PartnerModelClass> implements IPartnerRepository {
    updatePassword(): Promise<void>;
    getByEmail(email: string): Promise<Partner>;
    create(_partner: Partner): Promise<Partner>;
    update(_partner: Partner): Promise<Partner>;
    getById(_id: Types.ObjectId): Promise<Partner>;
    getAll(): Promise<Array<Partner>>;
}
