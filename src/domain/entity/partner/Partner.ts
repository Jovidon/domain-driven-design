import { Types } from 'mongoose';
import { PartnerModelClass } from '../../../database';
import { IBaseEntity } from '../base';

export class Partner implements IBaseEntity<Partner, PartnerModelClass> {
  protected _id?: Types.ObjectId;
  protected _fullName: string;
  protected _email: string;
  protected _password: string;
  protected _tokenExpireMinutes: number;

  /**
   *  Builders
   */
  buildId(id: Types.ObjectId): Partner {
    this._id = id;
    return this;
  }

  buildFullName(fullName: string): Partner {
    this._fullName = fullName;
    return this;
  }

  buildEmail(email: string): Partner {
    this._email = email;
    return this;
  }

  buildPassword(password: string): Partner {
    this._password = password;
    return this;
  }

  buildTokenExpireMinutes(tokenExpireMinutes: number): Partner {
    this._tokenExpireMinutes = tokenExpireMinutes;
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

  getTokenExpireMinutes(): number {
    return this._tokenExpireMinutes;
  }

  convertToEntity(partner: PartnerModelClass): Partner {
    if (!partner) return null;
    this.buildId(partner._id)
      .buildEmail(partner.email)
      .buildFullName(partner.fullName)
      .buildPassword(partner.password)
      .buildTokenExpireMinutes(partner.tokenExpireMinutes);
    return this;
  }

  convertToModelClass(): PartnerModelClass {
    return this
      ? {
          _id: this.getId(),
          fullName: this.getFullName(),
          email: this.getEmail(),
          password: this.getPassword(),
          tokenExpireMinutes: this.getTokenExpireMinutes(),
        }
      : null;
  }
}
