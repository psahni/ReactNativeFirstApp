import { fetchFromService } from './utils/fetchHelper';
import { routes } from './values/urls'

let token = '';
let user = {};

function fetchCred(uname,pwd){
    let unames = ["admin"];
};

//Temporary code
export const authenticate = (userName, password) => {
    console.log("Request receied " , userName , password);    

    return fetchFromService(routes().login, '', { userName, password })
        .then((data) => {
            console.log("This is response", data)
            token = data.accessToken;
            console.log("Data is : " , data);
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
    return fetchFromService(routes().logout, getToken());
}
