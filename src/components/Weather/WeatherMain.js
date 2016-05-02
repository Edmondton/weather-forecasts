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
        const {city} = this.props;
        if (city) {
            this.getWeather({
                params: {
                    q: city,
                    units: 'metric'
                }
            });
        }
    }
    
    onChange(event) {
        const city = event.target.value;
        this.getWeather({
            params: {
                q: city,
                units: 'metric'
            }
        });
    }

    getWeather(params) {
        const {dispatch} = this.props;
        dispatch(fetchWeather(params));
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
                <div>
                    City: <input type="text" 
                                 onBlur={this.onChange.bind(this)} 
                                 defaultValue={this.props.city} 
                                 className={styles.cityInput}
                />
                </div>
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
    weather: PropTypes.instanceOf(Immutable.Map).isRequired,
    city: PropTypes.string.isRequired
};

export default WeatherMain;