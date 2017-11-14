import { combineReducers } from 'redux';
import WeatherReducter from './reducer_weather';
// import DeleteWeatherCity from './reducer_delete_city'


// const myWeatherReducer = combineReducers({
//     addWeather: WeatherReducter,
//     deleteWeather: DeleteWeatherCity
// })

// const rootReducer = combineReducers({
//   weather: myWeatherReducer
// });
const rootReducer = combineReducers({
  weather: WeatherReducter
});

export default rootReducer;
