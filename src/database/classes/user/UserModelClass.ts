import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import {UserStatus, UserType} from '../../../definitions';

export class UserModelClass {
  @prop()
  fullName!: string;

  @prop()
  email!: string;

  @prop()
  password!: string;

  @prop({ enum: UserStatus, default: UserStatus.ACTIVE })
  status!: UserStatus;

  @prop({ enum: UserType })
  type!: UserType;

  @prop()
  twoStepAuthorizationEnabled?: boolean;

  @prop()
  phone: string;

  @prop()
  tokenExpireMinutes: number;

  _id?: Types.ObjectId;

  /** Дата обновления */
  updatedAt?: Date;

  /** Дата создания */
  createdAt?: Date;
}
