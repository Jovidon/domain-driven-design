import { TranslatesModelClass } from '../database';

export class RequirementError extends Error {
  code: number;
  translates: TranslatesModelClass;

  constructor(field: string) {
    super();
    this.code = 1000;
    this.name = `RequirementError`;
    this.message = `'${field}' is required field`;
    this.translates = {
      en: `'${field}' is required field`,
      ru: `'${field}' обязательное поле`,
      uz: `'${field}' majburiy maydon`,
    };
  }
}
