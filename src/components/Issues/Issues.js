import React from 'react';
import Immutable from 'immutable';

import Title from './Title';
import Reporter from './Reporter';
import Labels from './Labels';
import ShortenBody from './ShortenBody';

import styles from './Issues.scss';

export default function Issues({ issues  = Immutable.List() }) {
    return (
        <ul className={styles.list}>
            {issues.map((issue, i) =>
                <li className={styles.listItem} key={i}>
                    <Title issue={issue} />
                    <div className={styles.main}>
                        <ShortenBody text={issue.get('body')} />
                    </div>
                    <aside className={styles.aside}>
                        <Reporter user={issue.get('user')} />
                        <Labels labels={issue.get('labels')} />
                    </aside>
                </li>
            )}
        </ul>
  )
}
