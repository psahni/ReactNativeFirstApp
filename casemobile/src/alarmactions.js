import { fetchFromService } from './utils/fetchHelper';
import { routes } from './values/urls';

export const getAlarms = (filters) => {
  const filterFrom = '1447604675817'
  const filterTo = '253402214399999'

  const requestBody = {
    "paginator" :{
       "origin"    : 0,
       "page_size" : 100
     },
    "search"    :{
      "query"                    : `alarmDate:[${ filterFrom } TO ${filterTo}]`,
      "sort"                     :  [{"fieldName":"alarmDate","order":"dsc"},{"fieldName":"alarmId","order":"dsc"}],
      "onlyShowIfImOnNotifyList" : false
    }
  }

  return fetchFromService(routes().alarms, '', requestBody).then((data) => {
    console.log("alarm data received = ", data);
    return data;
  })
}