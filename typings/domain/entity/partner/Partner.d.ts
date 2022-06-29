import { Types } from 'mongoose';
import { PartnerModelClass } from '../../../database';
import { IBaseEntity } from '../base';
export declare class Partner implements IBaseEntity<Partner, PartnerModelClass> {
    protected _id?: Types.ObjectId;
    protected _fullName: string;
    protected _email: string;
    protected _password: string;
    protected _tokenExpireMinutes: number;
    buildId(id: Types.ObjectId): Partner;
    buildFullName(fullName: string): Partner;
    buildEmail(email: string): Partner;
    buildPassword(password: string): Partner;
    buildTokenExpireMinutes(tokenExpireMinutes: number): Partner;
    getId(): Types.ObjectId;
    getFullName(): string;
    getEmail(): string;
    getPassword(): string;
    getTokenExpireMinutes(): number;
    convertToEntity(partner: PartnerModelClass): Partner;
    convertToModelClass(): PartnerModelClass;
}
