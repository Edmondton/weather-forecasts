import React from 'react';
import Immutable from 'immutable';

import styles from './Issues.scss';

export default function Labels ({ labels = Immutable.List() }) {
    if (labels.size == 0) {
        return null;
    }

    const items = labels.toArray().map((item, index) => {
        const style = {
            color: `#${item.get('color')}`
        };

        return (
            <li key={index} className={styles.label}>
                <span className={styles.labelColor} style={style}>{item.get('name')}</span>
            </li>
        );
    });

    return (
        <ul>{items}</ul>
    );
}