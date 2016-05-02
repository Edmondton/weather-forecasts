import React from 'react';
import {render} from 'enzyme';
import Immutable from 'immutable';
import WeatherMain from 'components/Weather/WeatherMain';
import data from '../../mock/nyc.json';

describe('(Component) WeatherMain', () => {
    let _wrapper;
    let _data;

    beforeEach(() => {
        _data = Immutable.fromJS(data);
        _wrapper = render(<WeatherMain weather={_data} city='NYC' />);
    });

    it('should render correctly', () => {
        const header = _wrapper.find('header');

        expect(header.text()).to.equal('Weather Forecast For NYC ')
    })
});
