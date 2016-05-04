import TYPES from './actionTypes';

import readWeather from '../api/weather/read';

function receiveWeatherData(data) {
	return {
		type: TYPES.FETCH_WEATHER,
		payload: data
	};
}

export function fetchWeather(params) {
	return dispatch => {
		return readWeather(params)
			.then(data => dispatch(receiveWeatherData(data)));
	};
}