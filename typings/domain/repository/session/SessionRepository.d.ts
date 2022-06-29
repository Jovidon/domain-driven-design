import { SessionModelClass } from '../../../database';
import { Session } from '../../entity';
import { Types } from 'mongoose';
import { ABaseRepository } from '../base';
import { ISessionRepository } from '../abstract';
export declare class SessionRepository extends ABaseRepository<Session, SessionModelClass> implements ISessionRepository {
    create(_session: Session): Promise<Session>;
    update(_session: Session): Promise<Session>;
    getById(_id: Types.ObjectId): Promise<Session>;
    getAll(): Promise<Array<Session>>;
    getByAccessToken(accessToken: string): Promise<Session>;
}
