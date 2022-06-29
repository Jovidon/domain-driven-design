import { Types } from 'mongoose';
import { UserStatus, UserType } from '../../../definitions';
export declare class UserModelClass {
    fullName: string;
    email: string;
    password: string;
    status: UserStatus;
    type: UserType;
    twoStepAuthorizationEnabled?: boolean;
    phone: string;
    tokenExpireMinutes: number;
    _id?: Types.ObjectId;
    updatedAt?: Date;
    createdAt?: Date;
}
