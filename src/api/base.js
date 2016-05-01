'use strict';

import url from 'url';

const HOST = 'api.openweathermap.org';
const PATH = '/data/2.5/forecast';
const KEY = 'bef3fab5d0f6aecb5aaa7397dfc9cfa8';

export function getUriPath (params) {
    params = {
        appid: KEY,
        ...params
    };

    return url.format({
        protocol: 'http',
        host: HOST,
        pathname: PATH,
        query: params
    });
}