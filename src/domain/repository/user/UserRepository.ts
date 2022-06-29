import { UserModel, UserModelClass } from '../../../database';
import { User } from '../../entity';
import { Types } from 'mongoose';
import { UserStatus } from '../../../definitions';
import { ABaseRepository } from '../base';
import { IUserRepository } from '../abstract';

export class UserRepository extends ABaseRepository<User, UserModelClass> implements IUserRepository {
  async create(_user: User): Promise<User> {
    const requiredFields: string[] = [
      '_fullName',
      '_phone',
      '_password',
      '_tokenExpireMinutes',
      '_type',
      '_twoStepAuthorizationEnabled',
    ];
    this.checkRequiredFields(requiredFields, _user);

    const userToCreate: UserModelClass = _user.convertToModelClass();
    const created = await UserModel.create(userToCreate);
    return new User().convertToEntity(created);
  }

  async update(_user: User): Promise<User> {
    const requiredFields: string[] = ['_id'];
    this.checkRequiredFields(requiredFields, _user);

    const userToUpdate: UserModelClass = _user.convertToModelClass();
    const updated = await UserModel.findOneAndUpdate({ _id: _user.getId() }, { $set: userToUpdate }, { new: true });
    return new User().convertToEntity(updated);
  }

  async getById(_id: Types.ObjectId): Promise<User> {
    const found = await UserModel.findOne({
      _id,
      status: { $ne: UserStatus.DELETED },
    });
    return new User().convertToEntity(found);
  }

  async getByEmail(email: string): Promise<User> {
    const found = await UserModel.findOne({
      email,
      status: { $ne: UserStatus.DELETED },
    });
    return new User().convertToEntity(found);
  }

  async getAll(): Promise<Array<User>> {
    const query = {
      status: UserStatus.ACTIVE,
    };
    return this.multipleConverter(await UserModel.find(query), User);
  }

  async updatePassword() {
    // implement method.
  }
}
