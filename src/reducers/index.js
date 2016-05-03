import Immutable from 'immutable';
import TYPES from './actionTypes';
import moment from 'moment-timezone';

const TIMEZONE = 'America/New_York';
const DATE_FORMAT = 'dddd';
const TIME_FORMAT = 'hA';
const debug = require('debug')('starter:reducers');

// ------------------------------------
// Reducer
// ------------------------------------
function weatherReducer(state = Immutable.Map(), {type, payload}) {
	if (!type || !payload) {
		return state;
	}

	switch (type) {
		default:
			return state;
		case TYPES.FETCH_WEATHER:
			const {city, list} = payload;
			const data = list.reduce((map, item) => {
				const temp = moment(item.dt * 1000).tz(TIMEZONE);
				const date = temp.format(DATE_FORMAT);
				const time = temp.format(TIME_FORMAT);
				const obj = {
					date: date,
					time: time,
					...item.main,
					...item.weather[0]
				};

				if (map.hasOwnProperty(date)) {
					map[date].push(obj)
				} else {
					map[date] = [obj];
				}

				return map;
			}, {});
			
			return state.withMutations(intermState => {
				intermState.set('city', Immutable.fromJS(city));
				intermState.set('temps', Immutable.fromJS(data));
			});
	}
}

export default function rootReducer(state = Immutable.Map(), action) {
	return state.merge({
		weather: weatherReducer(state.get('weather'), action),
		city: 'New York'
	});
}
