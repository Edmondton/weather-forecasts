import React from 'react';
import Immutable from 'immutable';

import styles from './styles.scss';

export default function Reporter({user = Immutable.Map()}) {
	const url = user.get('html_url');

	return (
		<div>
			<a href={url} className={styles.avatarLink}>
				<img
					src={user.get('avatar_url')}
					className={styles.avatar}
				/>
			</a>
			<p className={styles.userLogin}>
				<a href={url}>
					@{user.get('login')}
				</a>
			</p>
		</div>
	);
}
