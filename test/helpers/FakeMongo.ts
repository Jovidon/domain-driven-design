import { MongoMemoryReplSet } from 'mongodb-memory-server';
import { Mongo } from "../../src";

export class FakeMongo {
  db: Mongo;
  rs: MongoMemoryReplSet;

  async connect(): Promise<void> {
    try {
      this.rs = new MongoMemoryReplSet({
        instanceOpts: [{ storageEngine: 'wiredTiger' }],
      });
      await this.rs.waitUntilRunning();
      const uri = await this.rs.getUri();
      this.db = new Mongo(uri);
      await this.db.connect();
    } catch (error) {
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    await this.rs.stop();
    await this.db.disconnect();
  }
}
