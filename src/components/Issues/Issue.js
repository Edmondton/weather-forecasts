import React from 'react';
import Immutable from 'immutable';

import Title from './Title';
import Reporter from './Reporter';
import Labels from './Labels';

import defaultStyles from './styles.scss';

export default function Issue ({ issue = Immutable.Map(), dispatch, body, styles = defaultStyles }) {
	return (
		<section className={styles.listItem}>
			<Title issue={issue} dispatch={dispatch} />
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
