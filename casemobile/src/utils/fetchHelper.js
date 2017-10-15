import _ from 'lodash';
import { getToken } from '../authentication';

const throwIfNotOk = (response) => {
    console.log("This is repose from node server ", response);
    if (!response.ok) {
        debugger;
        return response.text().then(body => {
            console.log("Body is ", body);
            const error = JSON.parse(body);
            throw new Object({ status: error.statusCode, message: error.message || 'Error: Something went wrong' });
        });
    }
    return response;
};

export const fetchFromService = (route, token = '', data = {}) => {
    console.log("fetch ser ", data);
    const bearerToken = `Bearer ${getToken()}`;
    const reqHeaders = new Headers();
    reqHeaders.append("Content-Type","application/json");
    reqHeaders.append("Authorization", bearerToken);
    const fetchConfig = {
        method: route.method,
        body: _.isEmpty(data) ? null : JSON.stringify(data),
        headers: reqHeaders,
        timeout: _.isUndefined(route.timeout) ? null : route.timeout,
        credentials: 'same-origin',
    };

    if (token) {
        fetchConfig.append('authentication', token);

    }
    console.log("Fetch congig ", fetchConfig, route.path);
    return fetch(route.path, fetchConfig)
        .then(throwIfNotOk)
        .then(response => response.json());
}