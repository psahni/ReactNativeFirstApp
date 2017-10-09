import _ from 'lodash';
const throwIfNotOk = (response) => {
    console.log("This is repose from node server ",response);
    if (!response.ok) {
        return response.text().then(body => {
            console.log("Body is ", body);
            const error = JSON.parse(body);
            throw new Object({ status: error.statusCode, message: error.message || 'Error: Something went wrong' });
        });
    }
    return response;
};

export const fetchFromService = (route, token = '', data = {}) => {
    const reqHeaders = new Headers();
    reqHeaders.append("Content-Type","application/json");
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
    console.log("Fetch congig ", fetchConfig, route.path, "https://requestb.in/105luo41");
    return fetch(route.path, fetchConfig)
        .then(throwIfNotOk)
        .then(response => response.json());
}