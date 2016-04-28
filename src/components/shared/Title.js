import React from 'react';
import Immutable from 'immutable';

import styles from './shared.scss';

export default function Title({ issue = Immutable.Map() }) {
    return (
        <header className={styles.header}>
            #{issue.get('number')} {issue.get('title')}
        </header>
    );
}
