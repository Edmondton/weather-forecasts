import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';

import WeatherCard from './WeatherDay'

import {fetchWeather} from '../../reducers/actions';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import styles from './styles.scss';

class WeatherMain extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchWeather({
            params: {
                q: 'New York',
                units: 'metric'
            }
        }));
    }
    
    getDays(temps) {
        if (temps) {
            return temps.map((item, key) => {
                return (
                    <WeatherCard date={key} data={item} key={key} />
                );
            });
        }
        return null;
    }
    
    render() {
        const {weather} = this.props;
        const days = this.getDays(weather.get('temps'));
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    Weather Forecast For {weather.getIn(['city', 'name'])}
                    {' '}
                </header>
                <main className={styles.main}>
                    {days}
                </main>
            </div>
        );
    }
}

Object.assign(WeatherMain.prototype, PureRenderMixin);

WeatherMain.propTypes = {
    dispatch: PropTypes.func.isRequired,
    weather: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default WeatherMain;