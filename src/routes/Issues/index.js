import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path: 'issues',
    getComponent(nextState, next) {
        require.ensure([
            './containers/IssuesContainer',
            './modules/issues'
        ], (require) => {
            const Issues = require('./containers/IssuesContainer').default
            const reducer = require('./modules/issues').default

            injectReducer(store, { key: 'issues', reducer })

            next(null, Issues)
        })
    }
});