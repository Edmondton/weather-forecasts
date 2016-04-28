import React from 'react';
import Immutable from 'immutable';

import Issue from './Issue';
import ShortenBody from './ShortenBody';

import { selectIssue } from '../../reducers';

import styles from './styles.scss';

export default function Issues({ issues  = Immutable.List(), dispatch }) {
    if (issues.size == 0) {
        return null;
    }

    let handleClick = (issue) => {
        dispatch(selectIssue(issue));
    };

    return (
        <ul className={styles.list}>
            <li className={styles.listStyle}>
                {issues.map((issue, index) =>
                    <Issue
                            onClick={handleClick.bind(this, issue)}
                            issue={issue}
                            key={index}
                            body={<ShortenBody text={issue.get('body')} />}
                    />
                )}
            </li>
        </ul>
  )
}
