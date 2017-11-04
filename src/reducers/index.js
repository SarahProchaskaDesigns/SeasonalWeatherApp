import { combineReducers } from 'redux';
import WeatherReducter from './reducer_weather'

const rootReducer = combineReducers({
  weather: WeatherReducter
});

export default rootReducer;
