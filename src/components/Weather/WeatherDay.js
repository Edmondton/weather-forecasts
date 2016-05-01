import React from 'react';
import Immutable from 'immutable';

import styles from './styles.scss';

export default function WeatherDay({date, data = Immutable.List()}) {
    const temps = data.map((item, index) => {
        return (
            <li key={index} className={styles.tempature}>
                <p className={styles.time}>{item.get('time')}</p>
                <img src={`http://openweathermap.org/img/w/${item.get('icon')}.png`}
                     height="100px" width="100px"/>
                <p>temp: {item.get('temp')} &deg;C</p>
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
    )
}