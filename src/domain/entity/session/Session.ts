import { Types } from 'mongoose';
import { SessionStatus, SessionType } from '../../../definitions';
import { SessionModelClass } from '../../../database';
import { IBaseEntity } from '../base';

export class Session implements IBaseEntity<Session, SessionModelClass> {
  protected _id?: Types.ObjectId;
  protected _ownerId?: Types.ObjectId;
  protected _type?: SessionType;
  protected _accessToken?: string;
  protected _useragent?: string;
  protected _expires?: number;
  protected _status?: SessionStatus;
  protected _usedAt?: Date;
  protected _expiresAt?: Date;
  protected _updatedAt?: Date;
  protected _createdAt?: Date;

  /** Builders */
  buildId(id: Types.ObjectId): Session {
    this._id = id;
    return this;
  }

  buildOwnerId(ownerId: Types.ObjectId): Session {
    this._ownerId = ownerId;
    return this;
  }

  buildType(type: SessionType): Session {
    this._type = type;
    return this;
  }

  buildAccessToken(accessToken: string): Session {
    this._accessToken = accessToken;
    return this;
  }

  buildUseragent(useragent: string): Session {
    this._useragent = useragent;
    return this;
  }

  buildExpires(expires: number): Session {
    this._expires = expires;
    return this;
  }

  buildStatus(status: SessionStatus): Session {
    this._status = status;
    return this;
  }

  buildUsedAt(usedAt: Date): Session {
    this._usedAt = usedAt;
    return this;
  }

  buildExpiresAt(expiresAt: Date): Session {
    this._expiresAt = expiresAt;
    return this;
  }

  buildUpdatedAt(updatedAt: Date): Session {
    this._updatedAt = updatedAt;
    return this;
  }

  buildCreatedAt(createdAt: Date): Session {
    this._createdAt = createdAt;
    return this;
  }

  /** Getters */
  getOwnerId(): Types.ObjectId {
    return this._ownerId;
  }

  getType(): SessionType {
    return this._type;
  }

  getAccessToken(): string {
    return this._accessToken;
  }

  getUseragent(): string {
    return this._useragent;
  }

  getExpires(): number {
    return this._expires;
  }

  getStatus(): SessionStatus {
    return this._status;
  }

  getId(): Types.ObjectId {
    return this._id;
  }

  getUsedAt(): Date {
    return this._usedAt;
  }

  getExpiresAt(): Date {
    return this._expiresAt;
  }

  getCreatedAt(): Date {
    return this._createdAt;
  }

  getUpdatedAt(): Date {
    return this._updatedAt;
  }

  /** Settings */
  convertToEntity(session: SessionModelClass): Session {
    return session
      ? this.buildId(session._id)
          .buildCreatedAt(session.createdAt)
          .buildUpdatedAt(session.updatedAt)
          .buildOwnerId(session.ownerId)
          .buildType(session.type)
          .buildAccessToken(session.accessToken)
          .buildUseragent(session.useragent)
          .buildExpires(session.expires)
          .buildUsedAt(session.usedAt)
          .buildExpiresAt(session.expiresAt)
          .buildStatus(session.status)
      : null;
  }

  convertToModelClass(): SessionModelClass {
    return this
      ? {
          _id: this.getId(),
          accessToken: this.getAccessToken(),
          status: this.getStatus(),
          type: this.getType(),
          expires: this.getExpires(),
          expiresAt: this.getExpiresAt(),
          ownerId: this.getOwnerId(),
          usedAt: this.getUsedAt(),
          useragent: this.getUseragent(),
        }
      : null;
  }
}
