import {connect} from 'react-redux';

import Issues from 'components/Issues';

function mapStateToProps(state) {
	return {
		issues: state.issues.get('issues')
	};
}

export default connect(mapStateToProps)(Issues);
