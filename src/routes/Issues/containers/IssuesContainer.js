import { connect } from 'react-redux';
import Immutable from 'immutable';

import Issues from 'components/Issues';

function mapStateToProps(state) {
    return {
        issues: state.issues.get('issues') || Immutable.List()
    }
}

export default connect(mapStateToProps)(Issues);