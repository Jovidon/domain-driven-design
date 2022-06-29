import { sign, verify } from 'jsonwebtoken';

export class Token {
  protected secret: string;
  protected expires: number;

  constructor(secret = 'KfRxG+dZjjASpnGdxL%-@W33@42Ah7Z$', expires = 632448000000) {
    this.secret = secret;
    this.expires = expires;
  }

  async create(payload = {}): Promise<string> {
    return sign(payload, this.secret, { expiresIn: this.expires });
  }

  async verify(token: string): Promise<any> {
    return verify(token, this.secret);
  }
}
