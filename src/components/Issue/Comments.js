import React from 'react';
import Immutable from 'immutable';
import FullBody from './FullBody';
import Reporter from '../Issues/Reporter';

import styles from './styles.scss';

export default function Comments({comments = Immutable.List()}) {
	if (comments.size === 0) {
		return null;
	}

	const markup = comments.map((comment, index) => {
		return (
			<div key={index} className={styles.commentContainer}>
				<div className={styles.commenter}>
					<Reporter user={comment.get('user')}/>
				</div>
				<div className={styles.commentText}>
					<header>Commented:</header>
					<FullBody text={comment.get('body')} styles={styles.commentText}/>
				</div>
			</div>
		);
	});

	return (
		<section>
			{markup}
		</section>
	);
}
