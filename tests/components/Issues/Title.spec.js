import React from 'react';
import Title from '../../../src/components/Issues/Title';
import {render} from 'enzyme';
import Immutable from 'immutable';

describe('(Component) Title', () => {
	let _wrapper;
	let _data;

	beforeEach(() => {
		_data = Immutable.fromJS({
			number: 123,
			title: 'title'
		});
		_wrapper = render(<Title issue={_data} />);
	});

	it('should render correctly', () => {
		const header = _wrapper.find('header');
		const text = _wrapper.find('a');

		expect(header).to.exist;
		expect(text).to.exist;
		expect(text.text()).to.contain('123 title');
	});
});
