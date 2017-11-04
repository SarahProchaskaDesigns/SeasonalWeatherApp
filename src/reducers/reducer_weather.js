import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            return state.concat([action.payload.data.trip])
    }
    // console.log('Action is: ', action)
    return state
}