import { DefaultAuthProvider } from 'adminjs';
import { componentLoader } from './component-loader.js';
const provider = new DefaultAuthProvider({
    componentLoader,
    authenticate: async ({ email, password }) => {
        return { email };
        return null;
    },
});
export default provider;
