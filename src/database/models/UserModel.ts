import { getModelForClass } from '@typegoose/typegoose';
import { UserModelClass } from '../classes';

export const UserModel = getModelForClass(UserModelClass, {
  schemaOptions: {
    collection: 'users',
    timestamps: true,
    minimize: true,
    versionKey: false,
  },
});
