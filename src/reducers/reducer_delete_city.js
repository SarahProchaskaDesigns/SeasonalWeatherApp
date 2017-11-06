// import { DELETE_CITY } from '../actions/index'

// export default function(state, action){ 
//     switch(action.type){
//         case DELETE_CITY:
//             var newState = state.weather.filter((eachObj) => {
//                 if(eachObj.city_name !== action.payload.city && eachObj.month_name !== action.payload.month){
//                     return eachObj
//                 }
//             })
//             return newState
//     }
//     return state
// }