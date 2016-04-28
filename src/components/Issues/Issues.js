import React from 'react';
import Immutable from 'immutable';

import Issue from '../Issue/Main';

import styles from '../shared/shared.scss';

export default function Issues({ issues  = Immutable.List() }) {
    if (issues.size == 0) {
        return null;
    }

    return (
        <ul className={styles.list}>
            {issues.map((issue, index) =>
                <Issue issue={issue} key={index} />
            )}
        </ul>
  )
}
