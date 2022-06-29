import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class PartnerModelClass {
  @prop()
  fullName: string;

  @prop()
  email: string;

  @prop()
  password: string;

  @prop()
  tokenExpireMinutes: number;

  _id?: Types.ObjectId;

  updatedAt?: Date;

  createdAt?: Date;
}
