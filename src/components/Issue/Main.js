import React, {Component, PropTypes} from 'react'
import Immutable from 'immutable';

import Issue from '../Issues/Issue';
import FullBody from './FullBody';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import styles from './styles.scss';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
	    const { issue } = this.props;
        return (
			<div className={styles.container}>
	            <Issue
		                styles={}
		                issue={issue}
	                    body={<FullBody text={issue.get('body')} />}
	            />
			</div>
        );
    }
}

Object.assign(Main.prototype, PureRenderMixin);

Main.propTypes = {
    dispatch: PropTypes.func.isRequired,
	issue: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default Main;
