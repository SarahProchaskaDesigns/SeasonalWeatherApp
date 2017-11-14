import { DELETE_CITY } from '../actions/index'

export default function(state = [], action){ 
    var newState = state.slice()
    switch(action.type){
        case DELETE_CITY:
            var newState = state.weather.filter((eachObj) => {
                return eachObj.city_name !== action.payload.city || eachObj.month_name !== action.payload.month
                })
    }
    return newState
}