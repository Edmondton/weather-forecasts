import React from 'react';
import Title from './Title';
import styles from './Issues.scss';

export default function Reporter ({ issue }) {
    const url = issue.getIn(['user', 'html_url']);

    return (
        <div>
            <a href={url} className={styles.avatarLink} >
              <img
                  src={issue.getIn(['user', 'avatar_url'])}
                  className={styles.avatar}
              />
            </a>
            <p className={styles.userLogin}>
              <a href={url}>
                @{issue.getIn(['user', 'login'])}
              </a>
            </p>
        </div>
    );
}
