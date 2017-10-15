//const BASE_URL = "http://172.16.69.166:4567";
//const BASE_URL = "http://localhost:5555"
import {getBaseURL} from "../config";
const URL = () => ({
    apiBase: `${getBaseURL()}`,
    login: `${getBaseURL()}/login`,
    logout: `${getBaseURL()}/logout`,
    cases: `${getBaseURL()}/lr-case-api/cases`,
});

const routes = () => ({
    login: { method: 'POST', path: URL().login },
    logout: { method: 'GET', path: URL().logout },
    cases: { method: 'GET', path: URL().cases },
    caseDetails: (id) => ({ method: 'GET', path: `${URL().cases}/${id}` }),
    createCase : { method: 'POST', path: URL().cases },
    
});

export {
    routes
}