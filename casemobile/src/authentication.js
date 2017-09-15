import { fetchFromService } from './utils/fetchHelper';
import { routes } from './values/urls'

let token = '';
let user = {};

export const authenticate = (userName, password) => {
    return fetchFromService(routes.login, '', { userName, password })
        .then((data) => {
            token = data.token;
            return data;
        });
}

export const getToken = () => {
    return token;
}

export const isAuthenticated = () => {
    return !!getToken();
}

export const logout = () => {
    return fetchFromService(routes.logout, getToken());
}
