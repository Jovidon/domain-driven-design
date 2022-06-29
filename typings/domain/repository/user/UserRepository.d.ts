import { UserModelClass } from '../../../database';
import { User } from '../../entity';
import { Types } from 'mongoose';
import { ABaseRepository } from '../base';
import { IUserRepository } from '../abstract';
export declare class UserRepository extends ABaseRepository<User, UserModelClass> implements IUserRepository {
    create(_user: User): Promise<User>;
    update(_user: User): Promise<User>;
    getById(_id: Types.ObjectId): Promise<User>;
    getByEmail(email: string): Promise<User>;
    getAll(): Promise<Array<User>>;
    updatePassword(): Promise<void>;
}
