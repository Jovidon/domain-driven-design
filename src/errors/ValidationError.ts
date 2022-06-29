import { TranslatesModelClass } from '../database';

export class ValidationError extends Error {
  code: number;
  translates: TranslatesModelClass;

  constructor(field: string) {
    super();
    this.code = 1000;
    this.name = `ValidationError`;
    this.message = `Field '${field}' not validate`;
    this.translates = {
      en: `Field '${field}' not validate`,
      ru: `Поле '${field}' не проверено`,
      uz: `'${field}' maydon tasdiqlanmadi`,
    };
  }
}
