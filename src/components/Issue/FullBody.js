import React from 'react';
import marked from 'marked';

export default function FullBody ({ text = '' }) {
	const rawMarkup = {__html: marked(text, {sanitize: true})};

	return (
		<span dangerouslySetInnerHTML={rawMarkup} />
	);
}
