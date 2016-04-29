import {injectReducer} from '../../store/reducers';

export default (store) => ({
	  path: 'issue/:number',
	  getComponent (nextState, next) {
		  require.ensure([
			  './containers/IssueContainer',
			  '../../reducers'
		], (require) => {
			  const Issue = require('./containers/IssueContainer').default;
			  const reducer = require('../../reducers').default;

			  injectReducer(store, {key: 'issues', reducer});

			  next(null, Issue);
		});
	}
});
