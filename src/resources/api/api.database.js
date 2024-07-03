import { BaseDatabase } from 'adminjs';

export class ApiDatabase extends BaseDatabase {
  static isAdapterFor(database) {
    return database === 'api'
  }

  /**
   * Get list of resources for current database.
   */
  resources() {
    // TODO: Implement this
    return []
  }
}
