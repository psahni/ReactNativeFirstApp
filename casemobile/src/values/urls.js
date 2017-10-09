const BASE_URL = "http://172.16.69.166:3000";
const URL = {
    apiBase: `${BASE_URL}`,
    login: `${BASE_URL}/login`,
    logout: `${BASE_URL}/logout`,
    cases: `${BASE_URL}/cases`,
};

const routes = {
    login: { method: 'POST', path: URL.login },
    logout: { method: 'GET', path: URL.logout },
    cases: { method: 'get', path: URL.cases },
    caseDetails: (id) => ({ method: 'GET', path: `${URL.cases}/${is}` }),
};

export {
    routes
}
