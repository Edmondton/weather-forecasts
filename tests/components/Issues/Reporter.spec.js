import React from 'react';
import Reporter from 'components/Issues/Reporter';
import {render} from 'enzyme';
import Immutable from 'immutable';

describe('(Component) Reporter', () => {
	let _wrapper;
	let _data;

	beforeEach(() => {
		_data = Immutable.fromJS({
			html_url: 'url',
			avatar_url: 'avatar',
			login: 'login'
		});
		_wrapper = render(<Reporter user={_data} />);
	});

	it('should render correct', () => {
		expect(_wrapper.html()).to.contain(_data.get('avatar_url'));
		expect(_wrapper.html()).to.contain(_data.get('html_url'));
		expect(_wrapper.html()).to.contain(_data.get('login'));
	});
});
