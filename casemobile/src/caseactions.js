import { fetchFromService } from './utils/fetchHelper';
import { routes } from './values/urls';

export const createCaseReq = (caseObject) => {
	console.log("Request receied " , caseObject);
    return fetchFromService(routes.createCase, '',  caseObject )
        .then((data) => {            
            console.log("Case response : " , data);
            return data;
        }).catch((err)=>{
        	console.log(err);
        });
}

