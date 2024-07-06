import { ApiBaseDatabase } from './api.base.database.js';
import { ApiBaseResource } from './api.base.resource.js';
import axios from 'axios';
import { ApiBaseProperty } from './api.property.js';
import AdminJS from 'adminjs';
class DjangoDatabaseResource extends ApiBaseResource {
    constructor({ api, id, databaseName, model, properties, propertyClass = ApiBaseProperty }) {
        super({ api, id, databaseName, model, propertyClass });
        this._properties = properties;
    }
    properties() {
        return this._properties;
    }
}
export class DjangoDatabase extends ApiBaseDatabase {
    constructor(database) {
        let api = axios.create({
            baseURL: 'http://127.0.0.1:8000',
        });
        super(database, [
            new DjangoDatabaseResource({
                api, databaseName: 'DjangoTest', id: 'Resource 1', model: 'posts', properties: [
                    new ApiBaseProperty({ path: 'id', isId: true, position: 0 }),
                    new ApiBaseProperty({ path: 'title' }),
                    new ApiBaseProperty({ path: 'body' }),
                ],
            }),
        ]);
    }
}
AdminJS.registerAdapter({ Database: DjangoDatabase, Resource: DjangoDatabaseResource });
