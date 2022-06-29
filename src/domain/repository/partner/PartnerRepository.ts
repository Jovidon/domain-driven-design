import { Partner } from '../../entity';
import { FilterQuery, Types } from 'mongoose';
import { PartnerModel } from '../../../database';
import { ABaseRepository } from '../base';
import { PartnerModelClass } from '../../../database';
import { IPartnerRepository } from '../abstract';
import { Password } from '../../../modules';

export class PartnerRepository extends ABaseRepository<Partner, PartnerModelClass> implements IPartnerRepository {
  async updatePassword() {
    throw new Error('Method not implemented.');
  }

  async getByEmail(email: string): Promise<Partner> {
    const query: FilterQuery<any> = { email };
    return new Partner().convertToEntity(await PartnerModel.findOne(query));
  }

  async create(_partner: Partner): Promise<Partner> {
    const fields: string[] = ['_fullName', '_email', '_password'];
    this.checkRequiredFields(fields, _partner);
    _partner.buildPassword(new Password(_partner.getPassword()).encode());
    const partnerToCreate: PartnerModelClass = _partner.convertToModelClass();
    return new Partner().convertToEntity(await PartnerModel.create(partnerToCreate));
  }

  async update(_partner: Partner): Promise<Partner> {
    const fields: string[] = ['_id'];
    this.checkRequiredFields(fields, _partner);
    const partnerToUpdate: PartnerModelClass = _partner.convertToModelClass();
    const query: FilterQuery<any> = {
      _id: _partner.getId(),
    };
    return new Partner().convertToEntity(
      await PartnerModel.findOneAndUpdate(query, { $set: partnerToUpdate }, { new: true }),
    );
  }

  async getById(_id: Types.ObjectId): Promise<Partner> {
    const query: FilterQuery<any> = { _id };
    return new Partner().convertToEntity(await PartnerModel.findOne(query));
  }

  async getAll(): Promise<Array<Partner>> {
    return this.multipleConverter(await PartnerModel.find(), Partner);
  }
}
