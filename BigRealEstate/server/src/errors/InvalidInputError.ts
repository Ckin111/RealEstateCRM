import { Log } from '../utils';

export class InvalidInputError extends Error {
  constructor(msg?: string) {
    super(msg ?? `Invalid input detected, please try again.`);
    this.name = this.constructor.name;
  }
}
