const throwIfNotOk = (response) => {
    if (!response.ok) {
        return response.text().then(body => {
            const error = JSON.parse(body);
            throw new Object({ status: error.statusCode, message: error.message || 'Error: Something went wrong' });
        });
    }
    return response;
};

export const fetchFromService = (route, token = '', data = {}) => {
    const fetchConfig = {
        method: route.method,
        body: fp.isEmpty(data) ? null : JSON.stringify(data),
        headers: new Headers(route.header),
        timeout: fp.isUndefined(route.timeout) ? null : route.timeout,
        credentials: 'same-origin',
    };

    if (token) {
        fetchConfig.append('authentication', token);
    }

    return fetch(route.path, fetchConfig)
        .then(throwIfNotOk)
        .then(response => response.json());
}