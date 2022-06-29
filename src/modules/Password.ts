import { hashSync, genSaltSync, compareSync } from 'bcrypt';

export class Password {
  protected value;

  constructor(value: string) {
    this.value = value;
  }

  encode(): string {
    return hashSync(this.value, genSaltSync());
  }

  decode(hash: string): boolean {
    return compareSync(this.value, hash);
  }
}
