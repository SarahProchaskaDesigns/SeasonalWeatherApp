import { FETCH_WEATHER, DELETE_CITY } from '../actions/index'

// console.log(DELETE_CITY, FETCH_WEATHER)

export default function(state = [], action){
    // console.log('Action is: ', action)
    switch(action.type){
        case FETCH_WEATHER:
            action.payload.data.trip.city_name = action.meta.city_name
            action.payload.data.trip.month_name = action.meta.month_name
            return state.concat([action.payload.data.trip])
        case DELETE_CITY:
            var newState = state.filter((eachObj) => {
                return eachObj.city_name !== action.payload.selectedCity || eachObj.month_name !== action.payload.selectedMonth
            })
            return newState
    }
    
    // console.log('Action is: ', action)
    return state
}