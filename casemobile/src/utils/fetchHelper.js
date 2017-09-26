import _ from 'lodash';
const throwIfNotOk = (response) => {
    console.log("This is repose from node servaer ",response);
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
    const fetchConfig = {
        method: route.method,
        body: _.isEmpty(data) ? null : JSON.stringify(data),
        headers: new Headers(route.header),
        timeout: _.isUndefined(route.timeout) ? null : route.timeout,
        credentials: 'same-origin',
    };

    if (token) {
        fetchConfig.append('authentication', token);

    }
    console.log("Fetch congig ", fetchConfig);
    return fetch(route.path, fetchConfig)
        .then(throwIfNotOk)
        .then(response => response.json());
}