//const BASE_URL = "http://172.16.69.166:4567";
const BASE_URL = "http://172.16.69.166:4567"
const URL = {
    apiBase: `${BASE_URL}`,
    login: `${BASE_URL}/login`,
    logout: `${BASE_URL}/logout`,
    cases: `${BASE_URL}/lr-case-api/cases`,
};

const routes = {
    login: { method: 'POST', path: URL.login },
    logout: { method: 'GET', path: URL.logout },
    cases: { method: 'GET', path: URL.cases },
    caseDetails: (id) => ({ method: 'GET', path: `${URL.cases}/${id}` }),
    createCase : { method: 'POST', path: URL.cases },
    
};

export {
    routes
}