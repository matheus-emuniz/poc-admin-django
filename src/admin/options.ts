import { AdminJSOptions } from 'adminjs';

import { componentLoader, Components } from './component-loader.js';
import { ApiResource } from '../resources/api/api.resource.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    new ApiResource('posts')
  ],
  databases: [],
  dashboard: {
    component: Components.Dashboard,
  },
  pages: {
    "custom-page": {
      component: Components.Dashboard,
    }
  },
  loginPath: '/admin/test_login',
};

export default options;
