import { index, prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { SessionType, SessionStatus } from '../../../definitions';

@index({ ownerId: 1 })
@index({ accessToken: 1 }, { unique: true })
export class SessionModelClass {
  /** Идентификатор владельца */
  @prop()
  ownerId?: Types.ObjectId;

  /** Тип сеанса */
  @prop({ enum: SessionType })
  type?: SessionType;

  /** Статус сеанса */
  @prop({ enum: SessionStatus, default: SessionStatus.ACTIVE })
  status?: SessionStatus;

  /** Токен доступа */
  @prop()
  accessToken?: string;

  /** Строки User-Agent */
  @prop()
  useragent?: string;

  /** Истекает */
  @prop()
  expires?: number;

  /** Время использования */
  @prop()
  usedAt?: Date;

  /** Дата истекает */
  @prop()
  expiresAt?: Date;

  /** ID */
  _id?: Types.ObjectId;

  /** Дата обновления */
  updatedAt?: Date;

  /** Дата создания */
  createdAt?: Date;
}
