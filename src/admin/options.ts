import { AdminJSOptions } from 'adminjs';

import { componentLoader, Components } from './component-loader.js';
import { ApiBaseResource } from '../app/api/api.base.resource.js';
import { DjangoDatabase } from '../app/django/django.database.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  databases: [
    new DjangoDatabase(),
  ],
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
