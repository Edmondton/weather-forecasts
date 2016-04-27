import React from 'react';
import styles from './Issues.scss';

export default function Title({ issue }) {
    return (
        <header className={styles.header}>
            #{issue.get('number')} {issue.get('title')}
        </header>
    );
}
