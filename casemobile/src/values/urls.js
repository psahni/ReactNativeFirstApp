import {getBaseURL} from "../config";

const URL = () => ({
    apiBase: `${getBaseURL()}`,
    login: `${getBaseURL()}/lr-web-console-api/login`,
    logout: `${getBaseURL()}/logout`,
    cases: `${getBaseURL()}/lr-case-api/cases`,
    alarms: `${getBaseURL()}/lr-web-console-api/lr-alarm-api/alarms`,
});

const routes = () => ({
    
    login: { method: 'POST', path: URL().login },
    logout: { method: 'GET', path: URL().logout },
    cases: { method: 'GET', path: URL().cases },
    caseDetails: (id) => ({ method: 'GET', path: `${URL().cases}/${id}` }),
    createCase : { method: 'POST', path: URL().cases },
    updateCaseStatus :(id) => ({method: 'PUT' , path:`${URL().cases}/${id}/actions/changeStatus`}),
    alarms: { method: 'POST', path: URL().alarms }
});

export {
    routes
}