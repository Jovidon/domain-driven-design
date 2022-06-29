import { IBaseRepository } from '../abstract';
import { FilterQuery, Types } from 'mongoose';
import { IBaseEntity } from '../../entity';
export declare abstract class ABaseRepository<T extends IBaseEntity<T, K>, K> implements IBaseRepository<T> {
    abstract create(arg: T): Promise<T>;
    abstract update(arg: T): Promise<T>;
    abstract getById(id: Types.ObjectId): Promise<T>;
    abstract getAll(conditions?: FilterQuery<any>): Promise<Array<T>>;
    protected checkRequiredFields(fields: string[], obj: T): void;
    protected multipleConverter(_modelClassItems: K[], TCreator: {
        new (): T;
    }): Array<T>;
}
