'use strict';

import {getUriPath} from '../base';

export default function read(opts) {
	const {params} = opts;

	return fetch(getUriPath(params)).then(response => {
		if (response.state >= 400) {
			return {};
		}

		return response.json();
	});
}