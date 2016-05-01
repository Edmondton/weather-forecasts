import {connect} from 'react-redux';
import Immutable from 'immutable';

import WeatherMain from 'components/Weather';

function mapStateToProps(state) {
    return {
        weather: state.weather && state.weather.get('weather') || Immutable.Map()
    };
}

export default connect(mapStateToProps)(WeatherMain);