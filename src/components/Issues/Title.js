import React from 'react';
import styles from './Issues.scss';

export default function Title({ issue }) {
    return (
        <p className={styles.title}>
            #{issue.get('number')} {issue.get('title')}
        </p>
    );
}
