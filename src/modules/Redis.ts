const asyncRedis = require('async-redis');

export class Redis {
  public client: any;

  constructor() {
    try {
      this.client = asyncRedis.createClient();
    } catch (error) {
      console.error('REDIS ERROR', error);
      throw error;
    }
  }

  public async set(key: string, value: string, duration: number) {
    try {
      this.client.set(key, value);
      this.client.expire(key, duration);
    } catch (error) {
      console.error('REDIS ERROR', error);
      throw error;
    }
  }

  public async get(field: string) {
    try {
      return await this.client.get(field);
    } catch (error) {
      console.error('REDIS ERROR', error);
      throw error;
    }
  }
}
