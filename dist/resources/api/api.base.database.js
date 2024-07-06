import { BaseDatabase } from 'adminjs';
export class ApiBaseDatabase extends BaseDatabase {
    constructor(database, resources) {
        super(database);
        this._resources = resources || [];
    }
    static isAdapterFor(database) {
        return database instanceof ApiBaseDatabase;
    }
    resources() {
        return this._resources;
    }
}
