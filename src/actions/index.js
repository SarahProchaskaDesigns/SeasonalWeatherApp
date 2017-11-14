//THIS IS A TEST!!!
import axios from 'axios';
import { API_KEY, Apple } from '../../config';

const MY_API_KEY = API_KEY;
const ROOT_URL = 'http://api.wunderground.com/api/';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const DELETE_CITY = 'DELETE_CITY';
export const SORT_BY_MONTH = 'SORT_BY_MONTH';
export const SORT_BY_CITY = 'SORT_BY_CITY';
export const SORT_TEMP_HIGHS = 'SORT_TEMP_HIGHS';
export const SORT_TEMP_LOWS = 'SORT_TEMP_LOWS';
export const SORT_RAIN_SNOW = 'SORT_RAIN_SNOW';

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

////
export function fetchWeather(city, state, countryName, countryCode, monthNumber, monthName){
    if(countryCode === "US"){
        var url = `${ROOT_URL}${MY_API_KEY}/planner_${monthNumber}01${monthNumber}30/q/US/${state}/${city}.json`;
    }else{
        var url = `${ROOT_URL}${MY_API_KEY}/planner_${monthNumber}01${monthNumber}30/q/${countryName}/${city}.json`;
    }
    console.log(url)
    const request = axios.get(url)
    // console.log("Sent request is ", request)
    // console.log("City is: ", city)

    return {
        type: FETCH_WEATHER,
        meta: {
            city_name: city,
            country_name: countryName,
            state: state,
            month_name: monthName,
            },
        payload: request
    }
}

export function sortMonths(){
    // console.log('getting hit!')
    return{
        type: SORT_BY_MONTH,
    }
}

export function sortCity(){
    return{
        type: SORT_BY_CITY
    }
}
export function sortTempHighs(){
    return{
        type: SORT_TEMP_HIGHS
    }
}
export function sortTempLows(){
    return{
        type: SORT_TEMP_LOWS
    }
}
export function sortRainSnow(){
    return{
        type: SORT_RAIN_SNOW
    }
}




