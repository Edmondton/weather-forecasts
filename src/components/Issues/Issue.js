import React from 'react';
import Immutable from 'immutable';
import { Link } from 'react-router';

import Title from './Title';
import Reporter from './Reporter';
import Labels from './Labels';

import styles from './styles.scss';

export default function Issue ({ issue = Immutable.Map(), body, onClick }) {
	return (
		<section className={styles.listItem}>
			<Title issue={issue} onClick={onClick} />
			<div className={styles.main}>
                    {body}
			</div>
			<aside className={styles.aside}>
				<Reporter user={issue.get('user')} />
				<Labels labels={issue.get('labels')} />
			</aside>
		</section>
	);
}
