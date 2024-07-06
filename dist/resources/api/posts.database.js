import { ApiBaseDatabase } from './api.base.database.js';
import { ApiBaseResource } from './api.base.resource.js';
import axios from 'axios';
import { ApiBaseProperty } from './api.property.js';
import AdminJS from 'adminjs';
class PostsResource extends ApiBaseResource {
    constructor(api) {
        super({ model: 'posts', api, databaseName: 'Teste' });
    }
    properties() {
        return [
            this.property('id'),
            this.property('title'),
        ];
    }
}
export class PostsDatabase extends ApiBaseDatabase {
    constructor(database) {
        let api = axios.create({
            baseURL: 'http://127.0.0.1:8000',
        });
        super(database, [
            new PostsResource(api),
        ]);
    }
}
AdminJS.registerAdapter({ Database: PostsDatabase, Resource: PostsResource });
