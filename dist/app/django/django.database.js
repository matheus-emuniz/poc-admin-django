import { ApiBaseDatabase } from '../api/api.base.database.js';
import { ApiBaseResource } from '../api/api.base.resource.js';
import axios from 'axios';
import { ApiBaseProperty } from '../api/api.base.property.js';
import AdminJS from 'adminjs';
import postsResource from './resources/posts.resource.js';
export class DjangoBaseResource extends ApiBaseResource {
    constructor({ api, ...attrs }) {
        super(attrs);
    }
    async create(params, context) {
        return super.create(params, context);
    }
    async find(filter, options, context) {
        return super.find(filter, options, context);
    }
    async findOne(id, context) {
        return super.findOne(id, context);
    }
    async findMany(ids, context) {
        return super.findMany(ids, context);
    }
    async update(id, params, context) {
        return super.update(id, params, context);
    }
    async delete(id, context) {
        super.delete(id, context);
    }
    async count(filter, context) {
        return super.count(filter, context);
    }
}
export class DjangoDatabase extends ApiBaseDatabase {
    constructor(database) {
        let api = axios.create({
            baseURL: 'http://127.0.0.1:8000',
        });
        super(database, [
            postsResource(api),
        ]);
    }
}
AdminJS.registerAdapter({ Database: DjangoDatabase, Resource: ApiBaseResource });
