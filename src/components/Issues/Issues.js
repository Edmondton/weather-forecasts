import React from 'react';
import Title from './Title';
import styles from './Issues.scss';

export default function Issues({ issues }) {
    return (
        <ul className={styles.list}>
            {issues.map((issue, i) =>
                <li className={styles.listItem} key={i}>
                    <section className={styles.issue}>
                        <Title issue={issue} />
                    </section>
                </li>
            )}
        </ul>
  )
}
