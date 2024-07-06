import { BaseResource } from 'adminjs';
import { ApiRecord } from './api.record.js';
import { ApiBaseProperty } from './api.property.js';
export class ApiBaseResource extends BaseResource {
    constructor({ model, api, databaseName, propertyClass }) {
        super();
        this._api = api;
        this._model = model;
        this._apiPrefix = `/${model}/`;
        this._databaseName = databaseName;
        this._propertyClass = propertyClass;
    }
    static isAdapterFor(rawResource) {
        return rawResource instanceof ApiBaseResource;
    }
    id() {
        return 'Teste 123';
    }
    databaseName() {
        return this._databaseName;
    }
    async find(filter, options, context) {
        const { data } = await this._api.get(this._apiPrefix);
        return data.map((item) => {
            return new ApiRecord(item, this);
        });
    }
    async findOne(id, context) {
        return new ApiRecord({}, this);
    }
    async findMany(ids, context) {
        return [];
    }
    async count(filter, context) {
        return 0;
    }
    async delete(id, context) {
    }
    async create(params, context) {
        return {};
    }
    async update(id, params, context) {
        return super.update(id, params, context);
    }
    property(path) {
        return new this._propertyClass({ path, isId: path === 'id' });
    }
    properties() {
        return [];
    }
}
