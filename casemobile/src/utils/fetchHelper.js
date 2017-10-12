import _ from 'lodash';
const bearerToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYmU0NzM1Zi1mZGZkLTRkYTUtYmQxYi04ZDE5NjdhNGJkMzkiLCJjaWQiOiI3MzhFMTlEMC02ODU3LTRFNjMtOTA2My1DMkYzMEE5NTdFMzciLCJpc3MiOiJsci1hdXRoIiwicmlkIjoic2VydmljZUFjY291bnQiLCJwaWQiOjEsInN1YiI6IkNhc2VBUEl1U0VSIiwiZXhwIjozMDg1NDczNjg3LCJpYXQiOjE1MDc2MjYwODd9.EqudE-0mmv2bFTGliz1s6lAmjL35fVSaULz5q-gfU_uEuAQ6aaqEP382aX9GJ1uCy1BOSWIMm44JcOd041W0ol9Ux25W5EAyR5OQL_XXUOPf2YIG6XfSMZimqKU57cZibqPWTxQwUINd-gKMzUCU-O5I5laj951Rpxqr7STXmVOHiKmZNl7Q5-tYtTtf4GvVhuB6neEunukJZ2fxFktXGwTCfBmfe735q0Iu95Go-Sa5cp6w2EF0FEl2g9DqTQi4nCUL6F3sb7A06VRkd-tOJdexBzd5JYVjAkp2K_gPlzBQkiosvqCHehx_LT2O_MVH1KgbVXsM3UtPSze79ATIFg"
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
    console.log("fetch ser ", data);
    const reqHeaders = new Headers();
    reqHeaders.append("Content-Type","application/json");
    reqHeaders.append("Authorization",bearerToken);
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