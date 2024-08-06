import { ApiBaseProperty } from '../../api/api.base.property.js';
import { DjangoBaseResource } from '../django.resource.js';

export const createPostsResource = (api, databaseName) => new DjangoBaseResource({
  api,
  id: 'Posts',
  model: 'posts',
  databaseName: databaseName,
  properties: [
    new ApiBaseProperty({ path: 'id', isId: true }),
    new ApiBaseProperty({ path: 'title' }),
    new ApiBaseProperty({ path: 'body' }),
  ],
});

export default createPostsResource;
