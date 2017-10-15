import { fetchFromService } from './utils/fetchHelper';
import { routes } from './values/urls';

export const createCaseReq = (caseObject) => {
	console.log("Request receied " , caseObject);
    return fetchFromService(routes().createCase, '',  caseObject )
        .then((data) => {            
            console.log("Case response : " , data);
            return data;
        }).catch((err)=>{
        	console.log(err);
        });
}

export const getCases = () => {
    console.log("Request receied ");
    return fetchFromService(routes().cases, '')
        .then((data) => {
            if(!data){
                return;
            }
            console.log("Get Case response : " , data);
            let reversedArr =[];
            for(let arrLength = (data.length-1); arrLength > 0; arrLength--){        
                console.log("Pushing into revered array",data[arrLength]);
                reversedArr.push(data[arrLength]);
                console.log("Reversed Arry : ", reversedArr.length);
            }
            console.log("reversedArr ",reversedArr);
            let sliced = reversedArr.slice(0,10);            
            console.log("sliced ", sliced);
            return sliced;
        }).catch((err)=>{
        	console.log(err);
        });
}