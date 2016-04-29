import {connect} from 'react-redux';

import Issue from 'components/Issue';

function mapStateToProps(state) {
	return {
		issue: state.issues && state.issues.get('selectedIssue'),
		comments: state.issues && state.issues.get('comments')
	};
}

export default connect(mapStateToProps)(Issue);
