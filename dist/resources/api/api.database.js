import { BaseDatabase } from 'adminjs';
export class ApiDatabase extends BaseDatabase {
    static isAdapterFor(database) {
        return database === 'api';
    }
    resources() {
        return [];
    }
}
