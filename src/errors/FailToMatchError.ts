import { TranslatesModelClass } from '../database';

export class FailToMatchError extends Error {
  code: number;
  translates: TranslatesModelClass;

  constructor(field: string) {
    super();
    this.code = 1001;
    this.name = `FailToMatchError`;
    this.message = `'${field}' is fail to match`;
    this.translates = {
      en: `'${field}' is fail to match`,
      ru: `'${field}' не соответствует`,
      uz: `'${field}' mos kelmadi`,
    };
  }
}
