import { getModelForClass } from '@typegoose/typegoose';
import { SessionModelClass } from '../classes';

export const SessionModel = getModelForClass(SessionModelClass, {
  schemaOptions: {
    collection: 'sessions',
    timestamps: true,
    minimize: true,
    versionKey: false,
  },
});
