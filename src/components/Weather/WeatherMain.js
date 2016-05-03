import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';

import WeatherDay from './WeatherDay'

import {fetchWeather} from '../../reducers/actions';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import styles from './styles.scss';

class WeatherMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: 'imperial'
        }
    }

    componentDidMount() {
        const {units} = this.state;
        const {city} = this.props;
        if (city) {
            this.getWeather(city, units);
        }
    }

    onChange(event) {
        const {units} = this.state;
        const city = event.target.value;
        this.getWeather(city, units);
    }

    getWeather(city, units) {
        const {dispatch} = this.props;
        dispatch(fetchWeather({
            params: {
                q: city,
                units: units
            }
        }));
    }

    getDays(temps) {
        if (temps) {
            return temps.map((item, key) => {
                return (
                    <WeatherDay date={key} data={item} key={key} isMetric={this.state.units === 'metric'} />
                );
            });
        }
        return null;
    }

    onUnitChange(units) {
        this.setState({
            'units': units
        });
        const {city} = this.props;
        this.getWeather(city, units);
    }

    render() {
        const {weather, units} = this.props;
        const days = this.getDays(weather.get('temps'));
        return (
            <div className={styles.container}>
                <div>
                    City: <input type="text"
                                 onBlur={this.onChange.bind(this)}
                                 defaultValue={this.props.city}
                                 className={styles.cityInput}
                            />
                    <span className={styles.unitSelection}>
                        <input type="radio"
                                name="group"
                                id="far"
                                defaultChecked
                                onChange={this.onUnitChange.bind(this, 'imperial')}
                        />
                        <label htmlFor="far">Fahrenheit</label>
                        <input type="radio" name="group" id="cel" onChange={this.onUnitChange.bind(this, 'metric')} />
                        <label htmlFor="cel">Celsius</label>
                    </span>
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
