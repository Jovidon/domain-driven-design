import { IBaseRepository } from '../base';
import { Session } from '../../entity';
export interface ISessionRepository extends IBaseRepository<Session> {
    getByAccessToken(accessToken: string): Promise<Session>;
}
