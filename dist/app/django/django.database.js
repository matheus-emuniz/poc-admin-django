import axios from 'axios';
import AdminJS from 'adminjs';
import { ApiBaseDatabase } from '../api/api.base.database.js';
import createPostsResource from './resources/posts.resource.js';
import { DjangoBaseResource } from './django.resource.js';
export class DjangoDatabase extends ApiBaseDatabase {
    constructor(database) {
        let api = axios.create({
            baseURL: 'http://127.0.0.1:8000',
        });
        let databaseName = 'Django';
        super(database, [
            createPostsResource(api, databaseName),
        ]);
    }
}
AdminJS.registerAdapter({ Database: DjangoDatabase, Resource: DjangoBaseResource });
