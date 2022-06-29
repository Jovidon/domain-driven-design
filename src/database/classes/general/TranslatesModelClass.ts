import { prop } from '@typegoose/typegoose';

export class TranslatesModelClass {
  /** Uzbek */
  @prop()
  uz?: string;

  /** Russian */
  @prop()
  ru?: string;

  /** English */
  @prop()
  en?: string;
}
