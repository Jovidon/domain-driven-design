import { FilterQuery, Types } from 'mongoose';

export interface IBaseRepository<K> {
  create(arg: K): Promise<K>;
  update(arg: K): Promise<K>;
  getById(id: Types.ObjectId): Promise<K>;
  getAll(conditions?: FilterQuery<any>): Promise<Array<K>>;
}
