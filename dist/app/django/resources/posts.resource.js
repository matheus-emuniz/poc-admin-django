import { ApiBaseProperty } from '../../api/api.base.property.js';
import { DjangoBaseResource } from '../django.database.js';
export const postsResource = (api) => new DjangoBaseResource({
    api,
    id: 'Posts',
    databaseName: 'Django',
    properties: [],
});
export default postsResource;
