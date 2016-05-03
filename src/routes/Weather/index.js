import {injectReducer} from '../../store/reducers';

export default (store) => ({
    path: 'weather',
    getComponent (nextState, next) {
        require.ensure([
            './containers/WeatherContainer',
            '../../reducers'
        ], (require) => {
            const weather = require('./containers/WeatherContainer').default;
            const reducer = require('../../reducers').default;

            injectReducer(store, {key: 'weather', reducer});

            next(null, weather);
        });
    }
});