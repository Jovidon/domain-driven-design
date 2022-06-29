import { TranslatesModelClass } from '../database';

export class AuthorizationError extends Error {
  code: number;
  translates: TranslatesModelClass;

  constructor(message: string) {
    super();
    this.code = 1004;
    this.name = `AuthorizationError`;
    this.message = message;
    this.translates = {
      en: `Authorization error`,
      ru: `Ошибка авторизации`,
      uz: `Avtorizatsiya xatosi`,
    };
  }
}
