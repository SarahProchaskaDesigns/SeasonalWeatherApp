import axios from 'axios';
import { API_KEY, Apple } from '../../config';

const MY_API_KEY = API_KEY;
const ROOT_URL = 'http://api.wunderground.com/api/';

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const DELETE_CITY = 'DELETE_CITY';

// console.log (API_KEY)
export function deleteCity(city, month){
    // console.log(city, month)
    return{
        type: DELETE_CITY,
        payload: {
            selectedCity: city,
            selectedMonth: month
        }   
    }
}
export function fetchWeather(city, state, monthNumber, monthName){
    const url = `${ROOT_URL}${MY_API_KEY}/planner_${monthNumber}01${monthNumber}30/q/US/${state}/${city}.json`;
    const request = axios.get(url)
    // console.log("Sent request is ", request)
    // console.log("City is: ", city)

    return {
        type: FETCH_WEATHER,
        meta: {
            city_name: city,
            month_name: monthName,
            },
        payload: request
    }
}


