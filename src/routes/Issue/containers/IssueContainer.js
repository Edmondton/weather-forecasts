import { connect } from 'react-redux';

import Issue from 'components/Issue';

function mapStateToProps(state) {
    return {
        issue: state.issues && state.issues.get('selectedIssue')
    }
}

export default connect(mapStateToProps)(Issue);
