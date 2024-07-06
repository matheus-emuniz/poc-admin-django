import { BaseResource } from 'adminjs';
import { ApiBaseRecord } from './api.base.record.js';
import { ApiBaseProperty } from './api.base.property.js';

export class ApiBaseResource extends BaseResource {
  constructor({ id, databaseName, properties, propertyClass }) {
    super();

    this._id = id || 'No ID';
    this._databaseName = databaseName || 'No database name';
    this._propertyClass = propertyClass || ApiBaseProperty;
    this._properties = properties || [];
  }

  static isAdapterFor(rawResource) {
    return rawResource instanceof ApiBaseResource;
  }

  id() {
    return this._id;
  }

  databaseName() {
    return this._databaseName;
  }

  property(path) {
    return new this._propertyClass({path, isId: path === 'id'});
  }

  properties() {
    return this._properties;
  }

  // These methods should be implemented by whoever extends ApiBaseResource

  async find(filter, options, context) {
    return []
  }

  async findOne(id, context) {
    return new ApiBaseRecord({}, this);
  }

  async findMany(ids, context) {
    return [];
  }

  async count(filter, context) {
    return 0;
  }

  async delete(id, context) {
    await super.delete(id);
  }

  async create(params, context) {
    return {};
  }

  async update(id, params, context) {
    return super.update(id, params, context);
  }
}
