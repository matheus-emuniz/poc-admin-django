import { BaseDatabase } from 'adminjs';
export class Database extends BaseDatabase {
    static isAdapterFor(database) {
        return database === 'api';
    }
    resources() {
        return [];
    }
}
