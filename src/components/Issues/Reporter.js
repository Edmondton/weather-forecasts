import React from 'react';
import Title from './Title';
import styles from './Issues.scss';

export default function Reporter ({ issue }) {
    return (
        <div>
            <img
                src={issue.getIn(['user', 'avatar_url'])}
                className={styles.avatar}
            />
            <p className={styles.userLogin}>
                @{issue.getIn(['user', 'login'])}
            </p>
        </div>
    );
}
