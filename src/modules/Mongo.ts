import { Mongoose, connect, ConnectionOptions } from 'mongoose';

export class Mongo {
  uri: string;
  db: Mongoose;
  options: ConnectionOptions;

  constructor(uri: string) {
    this.uri = uri;
    this.options = {
      autoIndex: true,
      poolSize: 10,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
  }

  async connect(): Promise<void> {
    this.db = await connect(this.uri, this.options);
  }

  async disconnect(): Promise<void> {
    await this.db.disconnect();
  }
}
