import { BaseProperty } from 'adminjs';

export class ApiBaseProperty extends BaseProperty {
  isVisible() {
    return !this.isId();
  }
}
