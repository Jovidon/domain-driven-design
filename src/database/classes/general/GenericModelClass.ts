import { prop } from '@typegoose/typegoose';

export class GenericModelClass {
  @prop()
  key!: string;

  @prop()
  value!: string;
}
