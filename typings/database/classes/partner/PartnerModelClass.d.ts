import { Types } from 'mongoose';
export declare class PartnerModelClass {
    fullName: string;
    email: string;
    password: string;
    tokenExpireMinutes: number;
    _id?: Types.ObjectId;
    updatedAt?: Date;
    createdAt?: Date;
}
