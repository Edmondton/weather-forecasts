import React from 'react';
import { Link } from 'react-router';
import Immutable from 'immutable';

import { selectIssue } from '../../reducers';

import styles from './styles.scss';

export default function Title({ issue = Immutable.Map(), dispatch }) {
    let handleClick = () => {
        dispatch(selectIssue(issue));
    };
    return (
        <header className={styles.header}>
            <Link to="/issue" params={{ issue: issue}} onClick={handleClick}>
                #{issue.get('number')} {issue.get('title')}
            </Link>
        </header>
    );
}
