import { InvalidInputError } from '../../../errors';

export abstract class BaseClass {
  abstract isValid(): [boolean, string];

  mustBeValid() {
    const [isValid, errMsg] = this.isValid();
    if (!isValid) throw new InvalidInputError(errMsg);
  }
}
