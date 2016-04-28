// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'

export const createRoutes = (store) => {
    const routes = {
        path: '/',
        component: CoreLayout,
        indexRoute: Home,
        getChildRoutes (location, next) {
            require.ensure([], (require) => {
                next(null, [
                    // Provide store for async reducers and middleware
                    require('./Issues').default(store),
                    require('./NotFound').default
                ])
            })
        }
    };

    return routes;
}

export default createRoutes
