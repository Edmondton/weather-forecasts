import React from 'react';
import Labels from 'components/Issues/Labels';
import {render} from 'enzyme';
import Immutable from 'immutable'

describe('(Component) Labels', () => {
	let _wrapper;
	let _data;

	beforeEach(() => {
		_data = Immutable.fromJS([{
			name: 'name',
			color: 'fff'
		}]);
		_wrapper = render(<Labels labels={_data} />);
	});

	it('should render correctly', () => {
		const item = _wrapper.find('li');

		expect(item.text()).to.equal('name');
		expect(item.html()).to.contain('fff');
	});
});
