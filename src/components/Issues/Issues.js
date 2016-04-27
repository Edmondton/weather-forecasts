import React from 'react';

import Title from './Title';
import Reporter from './Reporter';
import Labels from './Labels';

import styles from './Issues.scss';

export default function Issues({ issues }) {
    return (
        <ul className={styles.list}>
            {issues.map((issue, i) =>
                <li className={styles.listItem} key={i}>
                    <Title issue={issue} />
                    <div className={styles.main}>
                        Main
                    </div>
                    <aside className={styles.aside}>
                        <Reporter issue={issue} />
                        <Labels labels={issue.getIn(['labels'])} />
                    </aside>
                </li>
            )}
        </ul>
  )
}
