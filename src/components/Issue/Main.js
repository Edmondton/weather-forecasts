import React, {Component, PropTypes} from 'react'
import Immutable from 'immutable';

import Title from '../shared/Title';
import Reporter from '../shared/Reporter';
import Labels from '../shared/Labels';
import ShortenBody from '../shared/ShortenBody';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import styles from '../shared/shared.scss';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { issue } = this.props;
        return (
            <li className={styles.listItem}>
                <Title issue={issue} />
                <div className={styles.main}>
                  <ShortenBody text={issue.get('body')} />
                </div>
                <aside className={styles.aside}>
                  <Reporter user={issue.get('user')} />
                  <Labels labels={issue.get('labels')} />
                </aside>
            </li>
        );
    }
}

Object.assign(Main.prototype, PureRenderMixin);

Main.propTypes = {
    issue: PropTypes.instanceOf(Immutable.Map).isRequired,
    dispatch: PropTypes.func
};

export default Main;
