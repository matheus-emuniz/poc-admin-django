import express from 'express';
import AdminJS from 'adminjs';
import { buildRouter } from '@adminjs/express';
import options from './admin/options.js';
import initializeDb from './db/index.js';
import { ApiDatabase } from './resources/api/api.database.js';
import { ApiResource } from './resources/api/api.resource.js';
AdminJS.registerAdapter({ Database: ApiDatabase, Resource: ApiResource });
const port = process.env.PORT || 3000;
const start = async () => {
    const app = express();
    await initializeDb();
    const admin = new AdminJS(options);
    if (process.env.NODE_ENV === 'production') {
        await admin.initialize();
    }
    else {
        admin.watch();
    }
    const router = buildRouter(admin);
    app.use(admin.options.rootPath, router);
    app.listen(port, () => {
        console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
    });
};
start();
