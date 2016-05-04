import React from 'react';
import {render} from 'enzyme';
import WeatherDay from 'components/Weather/WeatherDay';
import Immutable from 'immutable';

describe('(Component) WeatherDay', () => {
	let _wrapper;
	let _data;
	let _dataItem;

	beforeEach(() => {
		_dataItem = Immutable.fromJS({
			time: '5AM',
			icon: '10d',
			temp: '100',
			description: 'description'
		});
		_data = Immutable.fromJS([_dataItem]);
	});

	it('should render correctly', () => {
		_wrapper = render(<WeatherDay date="Monday" data={_data}/>);

		const day = _wrapper.find('li');
		const image = _wrapper.find('img');

		expect(day.text()).to.contain(_dataItem.get('time'));
		expect(day.text()).to.contain(_dataItem.get('temp'));
		expect(day.text()).to.contain(_dataItem.get('description'));
		expect(image.html()).not.to.be.null;
	});

	it('should render nothing for no data', () => {
		_wrapper = render(<WeatherDay date="Monday"/>);

		expect(_wrapper.html()).to.equal('');
	});
});
