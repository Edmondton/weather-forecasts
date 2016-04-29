import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Immutable from 'immutable';

import Issue from '../Issues/Issue';
import FullBody from './FullBody';
import Comments from './Comments';

import {fetchCommentsIfNeeded} from '../../reducers';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import styles from './styles.scss';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {dispatch, issue} = this.props;
		dispatch(fetchCommentsIfNeeded(issue));
	}

	render() {
		const {issue, comments} = this.props;
		return (
			<div className={styles.container}>
				<Link to="/issues">Back</Link>
				<Issue
					issue={issue}
					body={<FullBody text={issue.get('body')} />}
				/>
				<Comments comments={comments}/>
			</div>
		);
	}
}

Object.assign(Main.prototype, PureRenderMixin);

Main.propTypes = {
	dispatch: PropTypes.func.isRequired,
	issue: PropTypes.instanceOf(Immutable.Map).isRequired,
	comments: PropTypes.instanceOf(Immutable.List)
};

export default Main;
