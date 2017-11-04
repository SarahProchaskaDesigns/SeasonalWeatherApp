import axios from 'axios';
import { API_KEY, Apple } from '../../config';

const MY_API_KEY = API_KEY;
const ROOT_URL = 'http://api.wunderground.com/api/';

export const FETCH_WEATHER = 'FETCH_WEATHER'

// console.log (API_KEY)
export function fetchWeather(city, state, month){
    const url = `${ROOT_URL}${MY_API_KEY}/planner_${month}01${month}30/q/US/${state}/${city}.json`;
    const request = axios.get(url)
    console.log("Sent request is ", request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}


