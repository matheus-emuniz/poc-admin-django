import { ApiBaseResource } from '../api/api.base.resource.js';
import { ApiBaseRecord } from '../api/api.base.record.js';
function transformFilters(filters) {
    let transformedFilters = '';
    for (let field in filters) {
        const filter = filters[field];
        transformedFilters += `${filter.path}=${filter.value}&`;
    }
    return transformedFilters;
}
export class DjangoBaseResource extends ApiBaseResource {
    constructor({ api, model, ...attrs }) {
        super(attrs);
        this._model = model;
        this._api = api;
    }
    async create(params, context) {
        try {
            const { data } = await this._api.post(`/${this._model}/`, params);
            return data;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async find(filter, options, context) {
        try {
            const { data } = await this._api.get(`/${this._model}/?${transformFilters(filter.filters)}`);
            return data.map((record) => new ApiBaseRecord(record, this));
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async findOne(id, context) {
        try {
            const { data } = await this._api.get(`/${this._model}/${id}`);
            return new ApiBaseRecord(data, this);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async findMany(ids, context) {
        return super.findMany(ids, context);
    }
    async update(id, params, context) {
        try {
            const { data } = await this._api.put(`/${this._model}/${id}/`, params);
            return data;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async delete(id, context) {
        try {
            await this._api.delete(`/${this._model}/${id}`);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async count(filter, context) {
        try {
            const { data } = await this._api.get(`/${this._model}/count`);
            return data.count;
        }
        catch (e) {
            throw new Error(e);
        }
    }
}
