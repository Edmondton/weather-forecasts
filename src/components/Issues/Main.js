import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';
import {fetchPostsIfNeeded} from '../../reducers';
import Issues from './Issues';

// Mixins
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(fetchPostsIfNeeded());
	}

	render() {
		const {issues} = this.props;
		return (
			<section>
				<Issues issues={issues} dispatch={this.props.dispatch}/>
			</section>
		);
	}
}

Object.assign(Main.prototype, PureRenderMixin);

Main.propTypes = {
	issues: PropTypes.instanceOf(Immutable.List).isRequired,
	dispatch: PropTypes.func.isRequired
};

export default Main;
