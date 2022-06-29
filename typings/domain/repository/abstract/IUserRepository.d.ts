import { IBaseRepository } from '../base';
import { User } from '../../entity';
export interface IUserRepository extends IBaseRepository<User> {
    updatePassword(): any;
    getByEmail(email: string): Promise<User>;
}
