import { TranslatesModelClass } from '../database';

export class NotFoundError extends Error {
  code: number;
  translates: TranslatesModelClass;

  constructor(target = 'Target') {
    super();
    this.code = 1000;
    this.name = `NotFoundError`;
    this.message = `${target} not found`;
    this.translates = {
      en: `${target} not found`,
      ru: `${target} не найден`,
      uz: `${target} topilmadi`,
    };
  }
}
