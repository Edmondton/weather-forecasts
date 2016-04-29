import React from 'react';
import {Link} from 'react-router';
import Immutable from 'immutable';

import styles from './styles.scss';

export default function Title({issue = Immutable.Map(), onClick}) {
	const number = issue.get('number');

	return (
		<header className={styles.header}>
			<Link to={`/issue/${number}`} onClick={onClick}>
				#{number} {issue.get('title')}
			</Link>
		</header>
	);
}
