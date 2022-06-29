import { SessionModelClass, SessionModel } from '../../../database';
import { Session } from '../../entity';
import { Types } from 'mongoose';
import { SessionStatus } from '../../../definitions';
import { ABaseRepository } from '../base';
import { ISessionRepository } from '../abstract';

export class SessionRepository extends ABaseRepository<Session, SessionModelClass> implements ISessionRepository {
  async create(_session: Session): Promise<Session> {
    const requiredFields: string[] = ['_ownerId', '_type'];
    this.checkRequiredFields(requiredFields, _session);

    const sessionToCreate: SessionModelClass = _session.convertToModelClass();
    const created = await SessionModel.create(sessionToCreate);
    return new Session().convertToEntity(created);
  }

  async update(_session: Session): Promise<Session> {
    const requiredFields: string[] = ['_id'];
    this.checkRequiredFields(requiredFields, _session);

    const userToUpdate: SessionModelClass = _session.convertToModelClass();
    const updated = await SessionModel.findOneAndUpdate(
      { _id: _session.getId() },
      { $set: userToUpdate },
      { new: true },
    );
    return new Session().convertToEntity(updated);
  }

  async getById(_id: Types.ObjectId): Promise<Session> {
    const found = await SessionModel.findOne({ _id });
    return new Session().convertToEntity(found);
  }

  async getAll(): Promise<Array<Session>> {
    const query = {
      status: SessionStatus.ACTIVE,
    };
    return this.multipleConverter(await SessionModel.find(query), Session);
  }

  async getByAccessToken(accessToken: string): Promise<Session> {
    const found = await SessionModel.findOne({ accessToken });
    return new Session().convertToEntity(found);
  }
}
