import React from 'react';
import Immutable from 'immutable';

import styles from './styles.scss';

export default function WeatherDay({date, data = Immutable.List(), isMetric}) {
    if (data.size === 0) {
        return null;
    }

    const temps = data.map((item, index) => {
        const unit = isMetric ? 'C' : 'F';

        return (
            <li key={index} className={styles.temperatureContainer}>
                <p className={styles.time}>{item.get('time')}</p>
                <img src={`http://openweathermap.org/img/w/${item.get('icon')}.png`}
                     className={styles.weatherIcon}/>
                <p className={styles.temperature}>temp: {item.get('temp')} &deg;{unit}</p>
                <p className={styles.description}>{item.get('description')}</p>
            </li>
        );
    });

    return (
        <section className={styles.dayContainer}>
            {date}
            <ul>
                {temps}
            </ul>
        </section>
    );
}
