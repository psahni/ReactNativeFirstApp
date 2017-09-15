const BASE_URL = "http://localhost:5555";
const URL = {
    apiBase: `${BASE_URL}`,
    login: `${BASE_URL}/authenticate`,
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
