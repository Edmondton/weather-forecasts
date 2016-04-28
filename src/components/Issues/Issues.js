import React from 'react';
import Immutable from 'immutable';

import Issue from './Issue';
import ShortenBody from './ShortenBody';

import styles from './styles.scss';

export default function Issues({ issues  = Immutable.List(), dispatch }) {
    if (issues.size == 0) {
        return null;
    }

    return (
        <ul className={styles.list}>
            <li className={styles.listStyle}>
                {issues.map((issue, index) =>
                    <Issue
                            issue={issue}
                            key={index}
                            dispatch={dispatch}
                            body={<ShortenBody text={issue.get('body')} />}
                    />
                )}
            </li>
        </ul>
  )
}
