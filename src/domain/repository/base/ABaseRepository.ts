import { IBaseRepository } from '../abstract';
import { FilterQuery, Types } from 'mongoose';
import { RequirementError } from '../../../errors';
import { IBaseEntity } from '../../entity';

export abstract class ABaseRepository<T extends IBaseEntity<T, K>, K> implements IBaseRepository<T> {
  abstract create(arg: T): Promise<T>;
  abstract update(arg: T): Promise<T>;
  abstract getById(id: Types.ObjectId): Promise<T>;
  abstract getAll(conditions?: FilterQuery<any>): Promise<Array<T>>;

  protected checkRequiredFields(fields: string[], obj: T): void {
    for (const field of fields) {
      if (obj[field] === null || obj[field] === undefined) throw new RequirementError(field);
    }
  }

  protected multipleConverter(_modelClassItems: K[], TCreator: { new (): T }): Array<T> {
    const entities: T[] = [];
    for (const item of _modelClassItems) {
      const entityObject = new TCreator().convertToEntity(item);
      entities.push(entityObject);
    }
    return entities;
  }
}
