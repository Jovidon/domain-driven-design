import { IBaseRepository } from '../base';
import { User } from '../../entity';

// Abstract method names have to be implemented inside of below interface
export interface IUserRepository extends IBaseRepository<User> {
  updatePassword();
  getByEmail(email: string): Promise<User>;
}
