import { fetchFromService } from './utils/fetchHelper';
import { routes } from './values/urls';

export const getAlarms = () => {
  return fetchFromService(routes().alarms).then((data) => {
    console.log("alarm data received = ", data);
    return data;
  })
}