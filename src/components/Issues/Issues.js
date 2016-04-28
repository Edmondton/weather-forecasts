import React from 'react';
import Immutable from 'immutable';

import Title from '../shared/Title';
import Reporter from '../shared/Reporter';
import Labels from '../shared/Labels';
import ShortenBody from '../shared/ShortenBody';
import Issue from '../Issue/Main';

import styles from '../shared/shared.scss';


export default function Issues({ issues  = Immutable.List() }) {
    if (issues.size == 0) {
        return null;
    }

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
