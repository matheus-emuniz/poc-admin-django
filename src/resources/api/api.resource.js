import { BaseResource } from 'adminjs';
import axios from 'axios';
import { ApiProperty } from './api.property.js';
import { ApiRecord } from './api.record.js';

export class ApiResource extends BaseResource {
  constructor(model) {
    super();

    this.api = axios.create({
      baseURL: 'http://127.0.0.1:8000',
    });

    this.model = model;
    this.apiPrefix = `/${model}/`
  }

  static isAdapterFor(adapter) {
    return adapter === 'api';
  }

  assignDecorator(admin, options) {
    super.assignDecorator(admin, options);
  }

  decorate() {
    return super.decorate();
  }

  id() {
    return this.model;
  }

  databaseName() {
    return 'api';
  }

  async find(filter, options, context) {
    const { data } = await this.api.get(this.apiPrefix);

    const records = data.map((item) => {
      return new ApiRecord(item, this);
    })

    console.log(records[0].resource.decorate)

    return records
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
    return new ApiProperty({path, isId: path === 'id'});
  }

  properties() {
    return [
      this.property('id'),
      this.property('title')
    ]
  }
}
