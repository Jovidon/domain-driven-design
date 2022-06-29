import { Types } from 'mongoose';
import { SessionType, SessionStatus } from '../../../definitions';
export declare class SessionModelClass {
    ownerId?: Types.ObjectId;
    type?: SessionType;
    status?: SessionStatus;
    accessToken?: string;
    useragent?: string;
    expires?: number;
    usedAt?: Date;
    expiresAt?: Date;
    _id?: Types.ObjectId;
    updatedAt?: Date;
    createdAt?: Date;
}
