import { getModelForClass } from '@typegoose/typegoose';
import { PartnerModelClass } from '../classes';

export const PartnerModel = getModelForClass(PartnerModelClass, {
  schemaOptions: {
    collection: 'partners',
    timestamps: true,
    minimize: true,
    versionKey: false,
  },
});
