import { Redis } from './Redis';

export class ModuleClass {
  private _redisModule: Redis;

  constructor() {
    this._redisModule = null;
  }

  public Redis(): Redis {
    if (!this._redisModule) this._redisModule = new Redis();
    return this._redisModule;
  }
}

export const Module = new ModuleClass();
