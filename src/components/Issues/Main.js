import React, {Component, PropTypes} from 'react'
import { fetchPostsIfNeeded } from '../../routes/Issues/modules/issues';
import Issues from './Issues'

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
        const { issues } = this.props;
        return (
            <section>
                <Issues issues={issues}/>
            </section>
        )
    }
}

Object.assign(Main.prototype, PureRenderMixin);

App.propTypes = {
    issues: PropTypes.instanceOf(Immutable.List),
    dispatch: PropTypes.func.isRequired
}

export default Main;