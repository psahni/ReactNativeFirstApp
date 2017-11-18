import _ from 'lodash';
import { getToken } from '../authentication';

const throwIfNotOk = (response) => {
    console.log("This is repose from node server ", response);
    if (!response.ok) {
        console.log('Not ok');
        return response.text().then(body => {
            let error ={statusCode :response.status}
            try {
                error = JSON.parse(body)
            } catch (e) {
            }
            
            throw new Object({ status: error.statusCode, message: error.message || `${error.statusCode}Error: Something went wrong` });
        });
    }
    return response;
};

export const fetchFromService = (route, token = '', data = {}) => {
    console.log("fetch service ", data);
    const bearerToken = `Bearer ${getToken()}`;
    const reqHeaders = new Headers();
    reqHeaders.append("Accept","application/json");
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