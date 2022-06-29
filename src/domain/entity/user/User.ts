import { Types } from 'mongoose';
import { UserModelClass } from '../../../database';
import {UserStatus, UserType} from '../../../definitions';
import { IBaseEntity } from '../base';

export class User implements IBaseEntity<User, UserModelClass> {
  protected _id?: Types.ObjectId;
  protected _fullName: string;
  protected _email: string;
  protected _password: string;
  protected _twoStepAuthorizationEnabled: boolean;
  protected _phone: string;
  protected _tokenExpireMinutes: number;
  protected _status: UserStatus;
  protected _type: UserType;

  /**
   *  Builders
   */
  buildId(id: Types.ObjectId): User {
    this._id = id;
    return this;
  }

  buildFullName(fullName: string): User {
    this._fullName = fullName;
    return this;
  }

  buildEmail(email: string): User {
    this._email = email;
    return this;
  }

  buildPassword(password: string): User {
    this._password = password;
    return this;
  }

  buildTwoStepAuthorizationEnabled(twoStepAuthorizationEnabled: boolean): User {
    this._twoStepAuthorizationEnabled = twoStepAuthorizationEnabled;
    return this;
  }

  buildPhone(phone: string): User {
    this._phone = phone;
    return this;
  }

  buildTokenExpireMinutes(tokenExpireMinutes: number): User {
    this._tokenExpireMinutes = tokenExpireMinutes;
    return this;
  }

  buildStatus(status: UserStatus): User {
    this._status = status;
    return this;
  }

  buildType(type: UserType): User {
    this._type = type;
    return this;
  }

  /**
   * Getters
   */
  getId(): Types.ObjectId {
    return this._id;
  }

  getFullName(): string {
    return this._fullName;
  }

  getEmail(): string {
    return this._email;
  }

  getPassword(): string {
    return this._password;
  }

  getTwoStepAuthorizationEnabled(): boolean {
    return this._twoStepAuthorizationEnabled;
  }

  getPhone(): string {
    return this._phone;
  }

  getTokenExpireMinutes(): number {
    return this._tokenExpireMinutes;
  }

  getStatus(): UserStatus {
    return this._status;
  }

  getType(): UserType {
    return this._type;
  }

  convertToEntity(user: UserModelClass): User {
    if (!user) return null;
    this.buildId(user._id)
      .buildEmail(user.email)
      .buildFullName(user.fullName)
      .buildPassword(user.password)
      .buildPhone(user.phone)
      .buildStatus(user.status)
      .buildType(user.type)
      .buildTwoStepAuthorizationEnabled(user.twoStepAuthorizationEnabled)
      .buildTokenExpireMinutes(user.tokenExpireMinutes);
    return this;
  }

  convertToModelClass(): UserModelClass {
    return this
      ? {
          _id: this.getId(),
          status: this.getStatus(),
          email: this.getEmail(),
          fullName: this.getFullName(),
          password: this.getPassword(),
          phone: this.getPhone(),
          type: this.getType(),
          tokenExpireMinutes: this.getTokenExpireMinutes(),
          twoStepAuthorizationEnabled: this.getTwoStepAuthorizationEnabled(),
        }
      : null;
  }
}
